/* Device hints stay in this browser. No permission prompts or fingerprint collection. */
(function(root,factory){
 const api=factory();
 if(typeof module==='object'&&module.exports){module.exports=api;return;}
 root.ZephyronDevice=api;
 const device=api.detect(navigator);api.current=device;
 function update(){
  const en=document.documentElement.lang==='en',state=api.recommend(device,en?'en':'ru');
  document.querySelectorAll('[data-smart-link]').forEach(a=>{a.href=state.href;});
  document.querySelectorAll('[data-smart-label]').forEach(el=>{el.textContent=state.label;});
  document.querySelectorAll('[data-smart-short]').forEach(el=>{el.textContent=state.available?(en?'Download':'Скачать'):(en?'Versions':'Версии');});
  document.querySelectorAll('[data-device-note]').forEach(el=>{el.textContent=state.note;});
  document.querySelectorAll('[data-platform-chip]').forEach(el=>{const active=el.dataset.platformChip===device;el.classList.toggle('is-device',active);if(active)el.setAttribute('aria-label',el.textContent+' — '+(en?'your device':'ваше устройство'));});
 }
 api.update=update;update();
 new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})(typeof window==='undefined'?this:window,function(){
 function detect(n={}){
  const ua=String(n.userAgent||''),platform=String(n.userAgentData?.platform||n.platform||'');
  if(/iPhone|iPad|iPod/i.test(ua)||(/Mac/i.test(platform)&&Number(n.maxTouchPoints)>1))return 'iOS';
  if(/Android/i.test(ua+' '+platform))return 'Android';
  if(/Windows|Win32|Win64/i.test(ua+' '+platform))return 'Windows';
  if(/Macintosh|MacIntel|Mac OS|macOS/i.test(ua+' '+platform))return 'macOS';
  if(/Linux|CrOS/i.test(ua+' '+platform))return 'Linux';
  return 'unknown';
 }
 function recommend(device,lang='ru'){
  const en=lang==='en',available=device==='Windows'||device==='Android';
  const href=['Windows','Android','macOS'].includes(device)?'./downloads.html?platform='+device:'./downloads.html';
  if(available)return {available,href,label:(en?'Download for ':'Скачать для ')+device,note:(en?'For your ':'Для вашего ')+(device==='Android'?(en?'phone':'телефона'):(en?'computer':'компьютера'))+' · '+device+' · Zephyron 26.0.2'};
  if(device==='macOS')return {available,href,label:en?'Zephyron for macOS':'Zephyron для macOS',note:en?'The macOS download is coming. Windows and Android are available now.':'Версия для macOS готовится. Windows и Android уже доступны.'};
  if(device==='iOS'||device==='Linux')return {available,href,label:en?'Choose a version':'Выбрать версию',note:en?'No '+device+' download yet. Available for Windows and Android.':'Клиента для '+device+' пока нет. Доступны Windows и Android.'};
  return {available,href,label:en?'Download Zephyron':'Скачать Zephyron',note:en?'Available for Windows and Android.':'Доступно для Windows и Android.'};
 }
 function choose(requested,saved,detected){const p=['Windows','macOS','Android'];return p.includes(requested)?requested:p.includes(saved)?saved:p.includes(detected)?detected:'Windows';}
 return {detect,recommend,choose};
});
