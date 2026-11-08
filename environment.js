/* Four cached SVG environments; only their opacity changes. No scroll render loop. */
(()=>{
 const root=document.documentElement,page=document.body.dataset.page;
 const allowed=['tide','pearl','slate','silver'];
 const defaults={index:'tide',downloads:'silver',technologies:'slate',changelog:'pearl',privacy:'pearl',games:'slate',news:'silver','news-item':'silver'};
 let scene=defaults[page]||'tide';
 function set(next){if(!allowed.includes(next)||scene===next&&root.dataset.scene)return;scene=next;root.dataset.scene=next;}
 window.ZephyronEnvironment={set};set(scene);
 const sections=[...document.querySelectorAll('[data-scene]')];
 if('IntersectionObserver'in window){const active=new Set();const obs=new IntersectionObserver(entries=>{entries.forEach(e=>e.isIntersecting?active.add(e.target):active.delete(e.target));const candidate=[...active].sort((a,b)=>Math.abs(a.getBoundingClientRect().top-innerHeight*.3)-Math.abs(b.getBoundingClientRect().top-innerHeight*.3))[0];if(candidate)set(candidate.dataset.scene);},{rootMargin:'-20% 0px -55% 0px',threshold:0});sections.forEach(s=>obs.observe(s));}
 const platformScene={Windows:'slate',Android:'tide',macOS:'pearl',common:'slate'};
 const selected=document.querySelector('[data-download-platform][aria-pressed="true"],[data-log-platform][aria-pressed="true"],[data-tech-platform][aria-pressed="true"]');if(selected)set(platformScene[selected.dataset.downloadPlatform||selected.dataset.logPlatform||selected.dataset.techPlatform]||scene);
 document.querySelectorAll('[data-download-platform],[data-log-platform],[data-tech-platform]').forEach(b=>b.addEventListener('click',()=>set(platformScene[b.dataset.downloadPlatform||b.dataset.logPlatform||b.dataset.techPlatform]||'silver')));
 document.addEventListener('zephyron-platform-change',()=>{const b=document.querySelector('[data-download-platform][aria-pressed="true"]');if(b)set(platformScene[b.dataset.downloadPlatform]);});
})();
