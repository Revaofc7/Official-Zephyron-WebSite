/* Android release copy; existing layout, theme and platform controls are retained. */
(() => {
  const note=document.querySelector('[data-release-note]');
  const android=document.getElementById('android-release');
  const selected=document.getElementById('selected-platform');
  function sync(){
    const en=document.documentElement.lang==='en';
    if(note)note.textContent=en?'Windows and Android are available. The macOS version will follow.':'Windows и Android уже доступны. Версию для macOS добавим позже.';
    document.querySelectorAll('[data-android-ru]').forEach(el=>{
      const text=el.getAttribute(en?'data-android-en':'data-android-ru');
      if(el.textContent!==text)el.textContent=text;
    });
    if(android){
      const active=document.querySelector('[data-log-platform][aria-pressed="true"]');
      const platform=selected?.textContent.trim()||active?.getAttribute('data-log-platform')||'Windows';
      android.hidden=platform!=='Android';
      if(!android.hidden){
        const windows=document.getElementById('windows-release'),empty=document.getElementById('log-empty');
        if(windows)windows.hidden=true;
        if(empty)empty.hidden=true;
      }
    }
  }
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  if(selected)new MutationObserver(sync).observe(selected,{childList:true,subtree:true,characterData:true});
  document.querySelectorAll('[data-log-platform]').forEach(button=>button.addEventListener('click',()=>queueMicrotask(sync)));
  sync();
})();
