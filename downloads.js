/* Platform cards: native touch scrolling, mouse dragging and keyboard controls. */
(() => {
  const track=document.getElementById('download-track');if(!track)return;
  const platforms=['Windows','macOS','Android'];
  const cards=[...track.querySelectorAll('[data-download-card]')];
  const buttons=[...document.querySelectorAll('[data-download-platform]')];
  const prev=document.getElementById('download-prev'),next=document.getElementById('download-next');
  const action=document.getElementById('platform-download'),label=document.getElementById('platform-download-label');
  const position=document.getElementById('download-position'),heading=document.getElementById('install-heading');
  const instructions=document.getElementById('platform-install-text'),toast=document.getElementById('toast');
  // A direct Windows asset URL can replace API discovery when supplied.
  const installers={Windows:'',macOS:'',Android:''};
  const windowsRelease='https://api.github.com/repos/Revaofc7/zephyron-downloads/releases/tags/V26.0.1';
  const windowsSteps={
    ru:['Скачай .exe-установщик Zephyron кнопкой выше.','Запусти скачанный .exe-файл.','Нажми «Далее».','Нажми «Продолжить».','Нажми «Окей» («Завершить установку»).'],
    en:['Download the Zephyron .exe installer using the button above.','Run the downloaded .exe file.','Click “Next”.','Click “Continue”.','Click “OK” (“Finish installation”).']
  };
  const steps=document.getElementById('platform-install-steps');
  const availability=document.getElementById('download-availability');
  let windowsAssetPromise=null,downloadBusy=false;
  async function windowsAsset(){
    if(installers.Windows)return installers.Windows;
    if(!windowsAssetPromise){
      windowsAssetPromise=(async()=>{
        const controller=new AbortController();
        const timeout=setTimeout(()=>controller.abort(),12000);
        try{
          const response=await fetch(windowsRelease,{credentials:'omit',headers:{Accept:'application/vnd.github+json'},signal:controller.signal});
          if(!response.ok)throw new Error('Release unavailable');
          const release=await response.json();
          const assets=(release.assets||[]).filter(asset=>/\.exe$/i.test(asset.name||''));
          if(assets.length!==1)throw new Error('Expected one installer');
          const url=new URL(assets[0].browser_download_url);
          if(url.protocol!=='https:'||url.hostname!=='github.com'||!url.pathname.startsWith('/Revaofc7/zephyron-downloads/releases/download/V26.0.1/'))throw new Error('Unexpected installer URL');
          return url.href;
        }finally{clearTimeout(timeout);}
      })().catch(error=>{windowsAssetPromise=null;throw error;});
    }
    return windowsAssetPromise;
  }
  const installation={
    Windows:{ru:'Установка в несколько шагов.',en:'Install in a few steps.'},
    macOS:{ru:'Здесь появится инструкция установки Zephyron на macOS.',en:'Instructions for installing Zephyron on macOS will appear here.'},
    Android:{ru:'Здесь появится инструкция установки Zephyron на Android.',en:'Instructions for installing Zephyron on Android will appear here.'}
  };
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let saved='Windows';try{saved=localStorage.getItem('zephyron-download-platform')||saved;}catch{}
  const requested=new URL(location.href).searchParams.get('platform');
  let index=platforms.indexOf(platforms.includes(requested)?requested:saved);if(index<0)index=0;
  let drag=null,programmatic=false,scrollTimer=0,toastTimer=0,resizeFrame=0;
  const language=()=>document.documentElement.lang==='en'?'en':'ru';
  function sync(){
    const p=platforms[index],en=language()==='en';
    buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
    prev.disabled=index===0;next.disabled=index===platforms.length-1;
    prev.setAttribute('aria-label',en?'Previous platform':'Предыдущая платформа');
    next.setAttribute('aria-label',en?'Next platform':'Следующая платформа');
    track.setAttribute('aria-label',en?'Choose a platform':'Выбор платформы');
    track.closest('section').setAttribute('aria-label',en?'Zephyron platforms':'Платформы Zephyron');
    position.textContent=String(index+1).padStart(2,'0')+' / 03 · '+p;
    label.textContent=downloadBusy?(en?'Preparing download…':'Подготовка загрузки…'):(en?'Download for ':'Скачать для ')+p;
    action.disabled=downloadBusy;
    availability.textContent=p==='Windows'?'V26.0.1 · .EXE':(en?'The installer link will be added later.':'Ссылку на установщик добавим позже.');
    heading.textContent=(en?'Install on ':'Установка на ')+p;
    instructions.textContent=installation[p][language()];
    steps.replaceChildren();
    steps.hidden=p!=='Windows';
    if(p==='Windows')windowsSteps[language()].forEach(step=>{const li=document.createElement('li');li.textContent=step;steps.append(li);});
    document.getElementById('install-number').textContent=String(index+1).padStart(2,'0');
    document.getElementById('install-platform').textContent=p;
    action.setAttribute('aria-describedby','download-availability');
    document.dispatchEvent(new Event('zephyron-platform-change'));
  }
  function remember(){try{localStorage.setItem('zephyron-download-platform',platforms[index]);}catch{}}
  function nearest(){
    const r=track.getBoundingClientRect(),center=r.left+r.width/2;
    return cards.reduce((best,card,i)=>{const c=card.getBoundingClientRect(),b=cards[best].getBoundingClientRect();return Math.abs(c.left+c.width/2-center)<Math.abs(b.left+b.width/2-center)?i:best;},0);
  }
  function select(i,scroll=true,smooth=true){
    index=Math.max(0,Math.min(platforms.length-1,i));sync();remember();
    if(scroll){
      programmatic=true;
      track.scrollTo({left:Math.max(0,cards[index].offsetLeft-(track.clientWidth-cards[index].offsetWidth)/2),behavior:smooth&&!motion.matches?'smooth':'auto'});
      clearTimeout(scrollTimer);
      scrollTimer=setTimeout(()=>{programmatic=false;},700);
    }
  }
  buttons.forEach((button,i)=>button.addEventListener('click',()=>select(i)));
  prev.addEventListener('click',()=>select(index-1));next.addEventListener('click',()=>select(index+1));
  track.addEventListener('scroll',()=>{
    if(!programmatic){const i=nearest();if(i!==index)select(i,false);}
    clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{
      programmatic=false;if(drag?.moved)return;
      const i=nearest();if(i!==index)select(i,false);
    },160);
  },{passive:true});
  // Touch uses the browser's native momentum and scroll snapping.
  track.addEventListener('wheel',()=>{programmatic=false;},{passive:true});
  track.addEventListener('pointerdown',e=>{
    programmatic=false;
    if(e.pointerType!=='mouse'||!e.isPrimary||e.button!==0)return;
    drag={id:e.pointerId,start:e.clientX,scroll:track.scrollLeft,moved:false};
  });
  track.addEventListener('pointermove',e=>{
    if(!drag||e.pointerId!==drag.id)return;
    const dx=e.clientX-drag.start;
    if(!drag.moved&&Math.abs(dx)<6)return;
    if(!drag.moved){drag.moved=true;track.classList.add('card-dragging');track.setPointerCapture(e.pointerId);}
    e.preventDefault();track.scrollLeft=drag.scroll-dx;
  });
  function finish(){
    if(!drag)return;const d=drag;drag=null;
    if(track.hasPointerCapture?.(d.id))track.releasePointerCapture(d.id);
    track.classList.remove('card-dragging');
    if(d.moved)select(nearest());
  }
  ['pointerup','pointercancel','lostpointercapture'].forEach(type=>track.addEventListener(type,finish));
  window.addEventListener('pointerup',finish);window.addEventListener('blur',finish);
  track.addEventListener('dragstart',e=>e.preventDefault());
  track.addEventListener('keydown',e=>{
    if(e.target!==track||e.metaKey||e.ctrlKey||e.altKey)return;
    if(e.key==='ArrowLeft'){e.preventDefault();select(index-1);}
    else if(e.key==='ArrowRight'){e.preventDefault();select(index+1);}
    else if(e.key==='Home'){e.preventDefault();select(0);}
    else if(e.key==='End'){e.preventDefault();select(2);}
    else if(e.key==='Escape'&&drag)finish();
  });
  action.addEventListener('click',async()=>{
    const p=platforms[index];
    if(downloadBusy)return;
    if(p==='Windows'){
      downloadBusy=true;sync();toast.classList.remove('visible');
      try{
        const url=await windowsAsset();
        location.assign(url);
      }catch{
        clearTimeout(toastTimer);
        toast.textContent=language()==='en'?'Could not retrieve the installer link. Check your connection and try again.':'Не удалось получить ссылку на установщик. Проверь соединение и попробуй ещё раз.';
        toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),6500);
      }finally{downloadBusy=false;sync();}
      return;
    }
    if(installers[p]){location.assign(installers[p]);return;}
    clearTimeout(toastTimer);
    toast.textContent=language()==='en'?'The '+p+' installer link will be added later.':'Ссылку на установщик для '+p+' добавим позже.';
    toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),4500);
  });
  new MutationObserver(()=>sync()).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  function fit(){cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(()=>select(index,true,false));}
  if('ResizeObserver' in window)new ResizeObserver(fit).observe(track);
  else window.addEventListener('resize',fit,{passive:true});
  document.fonts?.ready.then(fit);
  window.addEventListener('pageshow',fit);
  window.addEventListener('pagehide',()=>{clearTimeout(scrollTimer);clearTimeout(toastTimer);cancelAnimationFrame(resizeFrame);});
  select(index,true,false);
})();
