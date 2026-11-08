/* Finite compositor animations. Normal document navigation and native browser history remain intact. */
(()=>{'use strict';
const root=document.documentElement,reduced=matchMedia('(prefers-reduced-motion: reduce)'),running=new Set(),owned=new WeakMap();
const allowed=()=>!reduced.matches&&root.dataset.motion!=='off'&&!document.hidden;
const ease='cubic-bezier(.2,.8,.2,1)';
 document.addEventListener('pointerdown',()=>window.ZephyronPageTransition?.skipTransition(),{capture:true,passive:true});document.addEventListener('keydown',()=>window.ZephyronPageTransition?.skipTransition(),{capture:true});
function cancel(el){const old=owned.get(el);if(old){old.cancel();owned.delete(el);running.delete(old)}}
function play(el,frames,duration=300){if(!el)return null;cancel(el);if(!allowed()||!el.animate)return null;const a=el.animate(frames,{duration,easing:ease,fill:'none'});owned.set(el,a);running.add(a);const done=()=>{running.delete(a);if(owned.get(el)===a)owned.delete(el)};a.finished.then(done,done);return a}
function enter(el){if(!el||el.hidden)return;el.classList.add('visible');el.querySelectorAll('.reveal').forEach(n=>n.classList.add('visible'));play(el,[{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],320)}
function menu(el,open){if(!el)return;el.dataset.menuState=open?'open':'closed';cancel(el);if(open){el.hidden=false;play(el,[{opacity:0,transform:'translateY(-8px) scale(.985)'},{opacity:1,transform:'none'}],250)}else if(!el.hidden){const finish=()=>{if(el.dataset.menuState==='closed')el.hidden=true};const a=play(el,[{opacity:1,transform:'none'},{opacity:0,transform:'translateY(-5px) scale(.99)'}],150);if(a)a.finished.then(finish,finish);else finish()}}
const closing=new WeakMap();
function dialogOpen(el){closing.delete(el);delete el.dataset.closing;play(el,[{opacity:0,transform:'translateY(13px) scale(.975)'},{opacity:1,transform:'none'}],280)}
function dialogClose(el,finish){if(!el.open)return;el.dataset.closing='';const a=play(el,[{opacity:1,transform:'none'},{opacity:0,transform:'translateY(7px) scale(.985)'}],160);const token={};closing.set(el,token);const done=()=>{if(closing.get(el)!==token)return;closing.delete(el);delete el.dataset.closing;finish()};if(a)a.finished.then(done,done);else done()}
window.ZephyronMotion=Object.freeze({enter,menu,dialogOpen,dialogClose});
const selector='.glass-card,.material-showcase,.detail-row,.download-shell,.device-studio,.download-guide,.journal-index,.release-card,.technology-card,.policy-section,.policy-support,.slots-machine,.slots-guide';
document.querySelectorAll(selector).forEach(el=>el.classList.add('reveal'));
document.querySelectorAll('.glass-card-grid,.platform-glass-grid').forEach(group=>[...group.children].forEach((card,i)=>card.style.setProperty('--card-delay',(i%2)*65+'ms')));
let observer=null;if('IntersectionObserver'in window){observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.04,rootMargin:'0px 0px -15px 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
const stopCardEffects=new Set();
function motionState(){const active=allowed();root.classList.toggle('has-user-pause',!active);root.classList.toggle('motion',active&&!!observer);if(!active){stopCardEffects.forEach(stop=>stop());running.forEach(a=>a.cancel());running.clear()}}
motionState();new MutationObserver(motionState).observe(root,{attributes:true,attributeFilter:['data-motion']});reduced.addEventListener?.('change',motionState);
function markViewport(){document.querySelectorAll('.reveal').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)el.classList.add('visible')})}
window.addEventListener('zephyron-route-ready',markViewport);
// Animate selected panels after their existing controllers update state.
new MutationObserver(records=>{const targets=new Set();records.forEach(m=>{const el=m.target;if(!el.hidden&&el.matches('.live-panel,#live-windows,#bct-card,#tech-empty,#windows-release,#android-release,#log-empty'))targets.add(el)});targets.forEach(enter)}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden']});
const lenses=[];document.querySelectorAll('.platform-tabs').forEach(group=>{const lens=document.createElement('span');lens.className='platform-lens';lens.setAttribute('aria-hidden','true');group.prepend(lens);group.classList.add('has-lens');const sync=()=>{const active=group.querySelector('button[aria-pressed="true"]');if(!active)return;const a=active.getBoundingClientRect(),b=group.getBoundingClientRect();lens.style.width=a.width+'px';lens.style.height=a.height+'px';lens.style.transform='translate('+(a.left-b.left-group.clientLeft)+'px,'+(a.top-b.top-group.clientTop)+'px)'};lenses.push(sync);new MutationObserver(sync).observe(group,{subtree:true,attributes:true,attributeFilter:['aria-pressed']});if('ResizeObserver'in window)new ResizeObserver(sync).observe(group);sync()});
document.addEventListener('zephyron-ui-change',()=>lenses.forEach(sync=>sync()));document.fonts?.ready.then(()=>lenses.forEach(sync=>sync()));
document.querySelector('[data-tech-back]')?.addEventListener('click',()=>document.querySelector('[data-tech-platform="common"]')?.click());
// Work only while a fine pointer is moving over a card. No continuous animation loop.
const finePointer=matchMedia('(hover:hover) and (pointer:fine)');
document.querySelectorAll('.glass-card').forEach(card=>{
 let frame=0,settle=0,point=null;
 const reset=()=>{cancelAnimationFrame(frame);frame=0;point=null;clearTimeout(settle);card.classList.remove('is-pointer-active');['--card-x','--card-y','--card-rx','--card-ry','--card-lift'].forEach(name=>card.style.removeProperty(name))};
 stopCardEffects.add(reset);
 card.addEventListener('pointermove',e=>{if(e.pointerType==='touch'||!finePointer.matches||!allowed())return;clearTimeout(settle);point={x:e.clientX,y:e.clientY};if(frame)return;frame=requestAnimationFrame(()=>{frame=0;if(!point||!allowed())return;const r=card.getBoundingClientRect(),x=Math.max(0,Math.min(r.width,point.x-r.left)),y=Math.max(0,Math.min(r.height,point.y-r.top));card.classList.add('is-pointer-active');card.style.setProperty('--card-x',x+'px');card.style.setProperty('--card-y',y+'px');card.style.setProperty('--card-rx',((.5-y/r.height)*4).toFixed(2)+'deg');card.style.setProperty('--card-ry',((x/r.width-.5)*4).toFixed(2)+'deg');card.style.setProperty('--card-lift','-2px')})},{passive:true});
 card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);frame=0;point=null;['--card-rx','--card-ry','--card-lift'].forEach(name=>card.style.removeProperty(name));clearTimeout(settle);settle=setTimeout(reset,450)},{passive:true});
});
finePointer.addEventListener?.('change',()=>stopCardEffects.forEach(stop=>stop()));
// The policy remains a real document with native anchors and disclosure.
const contents=document.querySelector('.reader-nav details');if(contents){if(matchMedia('(max-width:760px)').matches)contents.open=false;contents.addEventListener('toggle',()=>{if(contents.open)play(contents.querySelector('ol'),[{opacity:0,transform:'translateY(-5px)'},{opacity:1,transform:'none'}],220)});contents.addEventListener('click',e=>{if(e.target.closest('a')&&matchMedia('(max-width:760px)').matches)contents.open=false});
 if('IntersectionObserver'in window){const links=[...contents.querySelectorAll('a')],map=new Map(links.map(a=>[a.hash.slice(1),a]));const sections=document.querySelectorAll('.policy-section');const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting&&map.has(e.target.id)){links.forEach(a=>a.removeAttribute('aria-current'));map.get(e.target.id).setAttribute('aria-current','location')}})},{rootMargin:'-15% 0px -65% 0px',threshold:0});sections.forEach(el=>obs.observe(el));}}
// A small fallback exit for browsers without cross-document transitions.
let leaving=false,leaveTimer=0,recovery=0;
function localPage(a){if(!a||a.target&&a.target!=='_self'||a.hasAttribute('download'))return null;let u;try{u=new URL(a.href,location.href)}catch{return null}if(u.origin!==location.origin||!(/\.html$/.test(u.pathname)||u.pathname.endsWith('/')))return null;if(u.pathname===location.pathname&&u.search===location.search)return null;return u}
document.addEventListener('click',e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const url=localPage(e.target.closest('a[href]'));if(!url||root.dataset.navigation==='native'||!allowed()||leaving)return;leaving=true;e.preventDefault();root.classList.add('nav-leaving');leaveTimer=setTimeout(()=>location.assign(url.href),120);recovery=setTimeout(()=>{root.classList.remove('nav-leaving');leaving=false},950)});
if(document.body.dataset.page==='news-item')document.querySelectorAll('.site-header a[href="./news.html"]').forEach(a=>a.setAttribute('aria-current','location'));
const prefetched=new Set();function prefetch(e){if(prefetched.size>=3||navigator.connection?.saveData||/2g/.test(navigator.connection?.effectiveType||''))return;const u=localPage(e.target.closest('a[href]'));if(!u||prefetched.has(u.href))return;prefetched.add(u.href);const link=document.createElement('link');link.rel='prefetch';link.as='document';link.href=u.href;document.head.append(link)}
document.addEventListener('pointerover',prefetch,{passive:true});document.addEventListener('focusin',prefetch);
document.querySelectorAll('.site-header a[href],#mobile-menu a[href]').forEach(a=>{const u=new URL(a.href,location.href);if(u.pathname===location.pathname&&!u.hash)a.setAttribute('aria-current','page')});
window.addEventListener('pageshow',e=>{clearTimeout(recovery);root.classList.remove('nav-leaving');leaving=false;if(e.persisted){markViewport();lenses.forEach(sync=>sync())}});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopCardEffects.forEach(stop=>stop());running.forEach(a=>a.cancel());running.clear()}else motionState()});
window.addEventListener('pagehide',()=>{clearTimeout(leaveTimer);clearTimeout(recovery);stopCardEffects.forEach(stop=>stop());running.forEach(a=>a.cancel());running.clear()});
})();
