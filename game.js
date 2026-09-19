/* Orbit — local, dependency-free mini game. Nothing is sent to a server. */
(() => {
  class Flight {
    constructor(random=Math.random){this.random=random;this.width=900;this.height=560;this.reset();}
    reset(){this.x=450;this.target=450;this.elapsed=0;this.bonus=0;this.spawn=.7;this.starSpawn=1.3;this.rocks=[];this.stars=[];this.over=false;}
    get score(){return Math.floor(this.elapsed*5)+this.bonus;}
    get y(){return this.height-65;}
    resize(height){this.height=height;this.x=Math.max(25,Math.min(875,this.x));}
    step(dt,direction=0){
      if(this.over)return;
      dt=Math.max(0,Math.min(.035,dt));this.elapsed+=dt;
      if(direction)this.target=this.x+direction*490*dt;
      this.target=Math.max(25,Math.min(875,this.target));
      this.x+=Math.max(-650*dt,Math.min(650*dt,this.target-this.x));
      const speed=160+Math.min(200,this.elapsed*3);
      this.spawn-=dt;this.starSpawn-=dt;
      if(this.spawn<=0){this.rocks.push({x:35+this.random()*830,y:-45,r:18+this.random()*16,angle:this.random()*6.28,seed:this.random()});this.spawn=Math.max(.28,.85-this.elapsed*.008);}
      if(this.starSpawn<=0){this.stars.push({x:35+this.random()*830,y:-25,r:10});this.starSpawn=1.5+this.random();}
      this.rocks.forEach(r=>{r.y+=speed*dt;r.angle+=dt*.3;});
      this.stars.forEach(s=>{s.y+=speed*.8*dt;});
      // A compact ship hitbox leaves room around its decorative wings.
      this.over=this.rocks.some(r=>Math.hypot(r.x-this.x,r.y-this.y)<r.r+11);
      this.stars=this.stars.filter(s=>{if(Math.hypot(s.x-this.x,s.y-this.y)<s.r+15){this.bonus+=25;return false;}return s.y<this.height+40;});
      this.rocks=this.rocks.filter(r=>r.y<this.height+50);
    }
  }
  if(typeof module!=='undefined'&&module.exports){module.exports={Flight};return;}
  const canvas=document.getElementById('orbit-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const start=document.getElementById('orbit-start'),pause=document.getElementById('orbit-pause');
  const overlay=document.getElementById('orbit-overlay'),title=document.getElementById('orbit-state-title'),text=document.getElementById('orbit-state-text');
  const score=document.getElementById('orbit-score'),bestLabel=document.getElementById('orbit-best'),announcement=document.getElementById('orbit-announcement');
  const strings={
    ru:{idle:'Держи курс.',idleText:'Собирай звёзды и обходи астероиды.',start:'Начать полёт',paused:'Пауза.',pausedText:'Космос подождёт.',resume:'Продолжить',over:'Полёт завершён.',again:'Ещё раз',pause:'Пауза',score:'Счёт',best:'Рекорд',unavailable:'Игра недоступна',unavailableText:'Попробуй открыть страницу в другом браузере.'},
    en:{idle:'Stay on course.',idleText:'Collect stars and dodge asteroids.',start:'Start flight',paused:'Paused.',pausedText:'Space can wait.',resume:'Continue',over:'Flight complete.',again:'Try again',pause:'Pause',score:'Score',best:'Best',unavailable:'Game unavailable',unavailableText:'Try opening this page in another browser.'}
  };
  const game=new Flight();let state='idle',raf=0,last=0,best=0,drag=false;
  const keys=new Set(),motion=matchMedia('(prefers-reduced-motion: reduce)');
  try{const saved=Number(localStorage.getItem('zephyron-orbit-best'));best=Number.isFinite(saved)?Math.max(0,Math.floor(saved)):0;}catch{}
  const format=n=>String(n).padStart(4,'0');
  const t=()=>strings[document.documentElement.lang==='en'?'en':'ru'];
  function hud(){score.textContent=format(game.score);bestLabel.textContent=format(best);}
  function ui(announce=false){
    const s=t();hud();overlay.hidden=state==='playing';pause.disabled=state==='idle'||state==='over'||!ctx;
    pause.textContent=state==='paused'?s.resume:s.pause;
    title.textContent=!ctx?s.unavailable:state==='over'?s.over:state==='paused'?s.paused:s.idle;
    text.textContent=!ctx?s.unavailableText:state==='over'?s.score+' / '+format(game.score)+' · '+s.best+' / '+format(best):state==='paused'?s.pausedText:s.idleText;
    start.textContent=state==='over'?s.again:state==='paused'?s.resume:s.start;start.disabled=!ctx;
    if(announce)announcement.textContent=state==='playing'?s.start:title.textContent+' '+text.textContent;
  }
  function cancel(){cancelAnimationFrame(raf);raf=0;last=0;keys.clear();drag=false;}
  function setState(next){
    cancel();state=next;
    if(next==='over'){
      if(game.score>best){best=game.score;try{localStorage.setItem('zephyron-orbit-best',String(best));}catch{}}
    }
    ui(true);draw();
    if(next==='playing'){canvas.focus({preventScroll:true});raf=requestAnimationFrame(frame);}
    if(next==='over'&&document.activeElement===canvas)start.focus({preventScroll:true});
  }
  function launch(){
    if(!ctx)return;
    if(state!=='paused')game.reset();
    setState('playing');
  }
  function toggle(){if(state==='playing')setState('paused');else if(state==='paused')launch();}
  start.addEventListener('click',launch);pause.addEventListener('click',toggle);
  function frame(time){
    if(state!=='playing')return;
    const dt=last?Math.min(.035,(time-last)/1000):0;last=time;
    const direction=(keys.has('ArrowRight')||keys.has('d')?1:0)-(keys.has('ArrowLeft')||keys.has('a')?1:0);
    game.step(dt,direction);draw();hud();
    if(game.over){setState('over');return;}
    raf=requestAnimationFrame(frame);
  }
  function point(e){const r=canvas.getBoundingClientRect();game.target=Math.max(25,Math.min(875,(e.clientX-r.left)/r.width*900));}
  canvas.addEventListener('pointerdown',e=>{
    if(state!=='playing'||!e.isPrimary||e.button!==0)return;
    canvas.focus({preventScroll:true});keys.clear();drag=true;canvas.setPointerCapture(e.pointerId);point(e);
  });
  canvas.addEventListener('pointermove',e=>{if(state==='playing'&&e.isPrimary&&(drag||e.pointerType==='mouse'))point(e);});
  ['pointerup','pointercancel','lostpointercapture'].forEach(type=>canvas.addEventListener(type,()=>{drag=false;}));
  canvas.addEventListener('keydown',e=>{
    if(['ArrowLeft','ArrowRight','a','d'].includes(e.key)){
      if(state==='playing'){e.preventDefault();keys.add(e.key);}
    }else if(e.code==='Space'){e.preventDefault();if(!e.repeat)toggle();}
  });
  window.addEventListener('keyup',e=>keys.delete(e.key));
  canvas.addEventListener('blur',()=>keys.clear());
  const suspend=()=>{if(state==='playing')setState('paused');};
  document.addEventListener('visibilitychange',()=>{if(document.hidden)suspend();});
  window.addEventListener('blur',suspend);
  window.addEventListener('pagehide',()=>{suspend();cancel();});
  window.addEventListener('pageshow',()=>{fit();ui();});
  new MutationObserver(()=>{if(document.body.classList.contains('menu-open')||document.body.classList.contains('page-leaving'))suspend();}).observe(document.body,{attributes:true,attributeFilter:['class']});
  new MutationObserver(()=>{ui();draw();}).observe(document.documentElement,{attributes:true,attributeFilter:['lang','data-theme']});
  motion.addEventListener('change',()=>draw());
  function fit(){
    if(!ctx)return;
    const r=canvas.getBoundingClientRect();if(!r.width||!r.height)return;
    const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(r.width*dpr);canvas.height=Math.round(r.height*dpr);
    game.resize(900*r.height/r.width);draw();
  }
  if('ResizeObserver' in window)new ResizeObserver(fit).observe(canvas);
  else window.addEventListener('resize',fit);
  function draw(){
    if(!ctx)return;
    const w=900,h=game.height;ctx.setTransform(canvas.width/w,0,0,canvas.height/h,0,0);
    ctx.fillStyle='#0b0b0f';ctx.fillRect(0,0,w,h);
    const halo=ctx.createRadialGradient(w*.5,h*.13,4,w*.5,h*.13,w*.48);
    halo.addColorStop(0,'rgba(255,255,255,.07)');halo.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=halo;ctx.fillRect(0,0,w,h);
    // Deterministic stars: no random flicker between frames.
    for(let i=0;i<65;i++){
      const x=(i*137.3+31)%w,y=((i*87.7+19)+(motion.matches?0:game.elapsed*9))%h;
      ctx.fillStyle=i%5===0?'#898991':'#36363f';ctx.beginPath();ctx.arc(x,y,i%5===0?1.5:.8,0,Math.PI*2);ctx.fill();
    }
    ctx.strokeStyle='#27272f';ctx.lineWidth=1;ctx.beginPath();ctx.arc(w*.5,h*.13,53,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle='#0b0b0f';ctx.beginPath();ctx.arc(w*.5-10,h*.13-7,51,0,Math.PI*2);ctx.fill();
    game.stars.forEach(s=>{
      ctx.save();ctx.translate(s.x,s.y);ctx.strokeStyle='#f5f5f5';ctx.lineWidth=2;
      ctx.beginPath();ctx.moveTo(0,-11);ctx.lineTo(3,-3);ctx.lineTo(11,0);ctx.lineTo(3,3);ctx.lineTo(0,11);ctx.lineTo(-3,3);ctx.lineTo(-11,0);ctx.lineTo(-3,-3);ctx.closePath();ctx.stroke();ctx.restore();
    });
    game.rocks.forEach(r=>{
      ctx.save();ctx.translate(r.x,r.y);ctx.rotate(r.angle);
      ctx.beginPath();for(let i=0;i<9;i++){const a=i*Math.PI*2/9,rr=r.r*(.82+.18*Math.sin(i*2.7+r.seed*5)**2);const x=Math.cos(a)*rr,y=Math.sin(a)*rr;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}
      ctx.closePath();ctx.fillStyle='#222229';ctx.strokeStyle='#808089';ctx.lineWidth=1.5;ctx.fill();ctx.stroke();
      ctx.fillStyle='#42424d';ctx.beginPath();ctx.arc(-r.r*.2,-r.r*.12,3,0,Math.PI*2);ctx.fill();ctx.restore();
    });
    ctx.save();ctx.translate(game.x,game.y);
    if(state==='playing'&&!motion.matches){ctx.strokeStyle='#55555f';ctx.beginPath();ctx.moveTo(-4,17);ctx.lineTo(0,30);ctx.lineTo(4,17);ctx.stroke();}
    ctx.fillStyle='#f2f2f3';ctx.beginPath();ctx.moveTo(0,-20);ctx.lineTo(16,16);ctx.lineTo(0,10);ctx.lineTo(-16,16);ctx.closePath();ctx.fill();
    ctx.fillStyle='#0b0b0f';ctx.beginPath();ctx.arc(0,0,3,0,Math.PI*2);ctx.fill();ctx.restore();
    ctx.fillStyle='#666671';ctx.font='11px monospace';ctx.fillText('Z / ORBIT',22,28);
    ctx.fillText('+',w-30,28);
  }
  fit();ui();draw();
})();
