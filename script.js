/* No credentials or private download addresses belong in this file. */
(() => {
  const copy = {
    ru: {skip:'К содержимому',get:'Скачать',eyebrow:'Твоё пространство общения',headline:'На одной волне.',intro:'Ближе к своим. Дальше от лишнего.',download:'Скачать Zephyron',bubbleOne:'Всегда рядом',bubbleTwo:'Всё начинается с «привет»',alex:'Алекс',mira:'Мира',you:'Вы',search:'Поиск',previewOne:'Уже подключаюсь',previewTwo:'Созвон · 18:20',previewThree:'Система готова',online:'в сети',today:'Сегодня',messageOne:'Есть минутка просто поболтать?',messageTwo:'Для тебя — всегда.',compose:'Напиши что-нибудь хорошее…',concept:'Визуальный концепт интерфейса',devices:'ТВОИ УСТРОЙСТВА',everywhere:'Там, где ты.',choose:'Три платформы. Один Zephyron.',pc:'На большом экране',mac:'В ритме твоего Mac',android:'Всегда под рукой',pending:'Ссылки на установщики пока не подключены.',footer:'Меньше шума. Больше общения.',light:'Включить светлую тему',dark:'Включить тёмную тему',title:'Zephyron — На одной волне',notice:p=>`Загрузка для ${p} пока не подключена.`},
    en: {skip:'Skip to content',get:'Download',eyebrow:'Your space to connect',headline:'On the same wavelength.',intro:'Closer to your people. Away from the noise.',download:'Download Zephyron',bubbleOne:'Always close',bubbleTwo:'It all starts with hello',alex:'Alex',mira:'Mira',you:'You',search:'Search',previewOne:'Connecting now',previewTwo:'Call · 18:20',previewThree:'System ready',online:'online',today:'Today',messageOne:'Got a minute for a little chat?',messageTwo:'For you? Always.',compose:'Say something good…',concept:'Interface design concept',devices:'YOUR DEVICES',everywhere:'Wherever you are.',choose:'Three platforms. One Zephyron.',pc:'On the big screen',mac:'At home on your Mac',android:'Always within reach',pending:'Installer links have not been connected yet.',footer:'Less noise. More connection.',light:'Switch to light theme',dark:'Switch to dark theme',title:'Zephyron — On the same wavelength',notice:p=>`The ${p} download has not been connected yet.`}
  };
  Object.assign(copy.ru, {menu:'Открыть меню',closeMenu:'Закрыть меню',home:'Главная',changelog:'Список изменений',technologies:'Технологии',privacy:'Политика конфиденциальности',sections:'РАЗДЕЛЫ',backHome:'На главную',changelogIntro:'Что нового в Zephyron — для каждого устройства.',technologiesIntro:'То, что делает Zephyron особенным.',privacyIntro:'Прозрачно о данных и конфиденциальности.',emptyLog:'Здесь появятся обновления',emptyLogText:'История версий для выбранной платформы пока не опубликована.',emptyTech:'Скоро расскажем подробнее',emptyTechText:'Здесь будут описаны наши фирменные технологии.',emptyPrivacy:'Документ готовится',emptyPrivacyText:'Текст политики конфиденциальности пока не опубликован.',platforms:'Выберите платформу'});
  Object.assign(copy.en, {menu:'Open navigation',closeMenu:'Close navigation',home:'Home',changelog:'Changelog',technologies:'Technologies',privacy:'Privacy policy',sections:'EXPLORE',backHome:'Back to home',changelogIntro:'What’s new in Zephyron — for every device.',technologiesIntro:'What makes Zephyron different.',privacyIntro:'Clarity about data and privacy.',emptyLog:'Updates will appear here',emptyLogText:'Version history for the selected platform has not been published yet.',emptyTech:'More to share soon',emptyTechText:'Our signature technologies will be described here.',emptyPrivacy:'Document in preparation',emptyPrivacyText:'The privacy policy has not been published yet.',platforms:'Choose a platform'});
  Object.assign(copy.ru, {"policyUpdated":"Редакция от 3 сентября 2026 года","policySupportTitle":"КОНФИДЕНЦИАЛЬНОСТЬ И ПОДДЕРЖКА","policySupportHint":"Запросы о данных и удалении аккаунта","policyContents":"Содержание","policyHeading1":"1. О документе","policyBody1":"Эта Политика объясняет, какие данные обрабатывает Zephyron и зачем. Оператором данных является разработчик сервиса, указанный на странице приложения в RuStore. Политика доступна до регистрации и в приложении.","policyHeading2":"2. Данные аккаунта","policyBody2":"При регистрации обрабатываются имя пользователя, отображаемое имя и пароль. На сервере пароль хранится не в открытом виде, а как стойкое производное значение. Дополнительно пользователь может установить фотографию профиля, описание и создать данные восстановления доступа.","policyHeading3":"3. Общение и материалы","policyBody3":"Для доставки и синхронизации обрабатываются сообщения, изображения, файлы, реакции, сведения об отправителе и получателе, время и статус доставки. Текстовые сообщения защищаются при хранении на сервере, однако текущая версия не заявляется как сервис со сквозным шифрованием всей переписки.","policyHeading4":"4. Голосовые звонки","policyBody4":"Для установления звонка обрабатываются имена участников, состояние и продолжительность вызова, сетевые адреса и технические параметры соединения. Аудиосодержимое разговора приложением не записывается и не сохраняется как голосовая запись.","policyHeading5":"5. Технические данные","policyBody5":"Для входа, защиты и диагностики могут обрабатываться токен сессии, идентификатор установки, модель или имя устройства, версия приложения, IP-адрес, время подключений, события ошибок и данные о попытках входа.","policyHeading6":"6. Разрешения устройства","policyBody6":"Доступ к микрофону используется только для голосовых звонков. Разрешение на уведомления нужно для сообщений и сведений о вызовах. Выбранные пользователем изображения читаются только для загрузки или отправки. Разрешения можно отозвать в настройках Android.","policyHeading7":"7. Цели и основания обработки","policyBody7":"Данные нужны для создания аккаунта, доставки сообщений, установления звонков, синхронизации, восстановления доступа, защиты от злоупотреблений, исправления ошибок и выполнения требований закона. Основаниями являются исполнение пользовательского соглашения, согласие и законные интересы в обеспечении безопасности сервиса.","policyHeading8":"8. Передача и обработчики","policyBody8":"Данные не продаются рекламодателям. Они могут технически обрабатываться поставщиками хостинга и инфраструктуры. Для push-уведомлений может использоваться Firebase Cloud Messaging, которому передаётся токен устройства и необходимая служебная информация. Данные также могут быть раскрыты по обязательному законному требованию.","policyHeading9":"9. Срок хранения","policyBody9":"Данные аккаунта и переписка хранятся, пока они нужны для работы сервиса или выполнения законных обязанностей. Отдельные изображения могут иметь указанный в приложении срок доступности. Технические журналы и защитные записи хранятся ограниченное время для диагностики и предотвращения злоупотреблений.","policyHeading10":"10. Защита данных","policyBody10":"Применяются разграничение доступа, хеширование паролей и токенов, шифрование отдельных данных при хранении, ограничения запросов и технический контроль доступа. Ни один способ защиты не исключает риск полностью, поэтому пользователю также важно защищать своё устройство.","policyHeading11":"11. Права пользователя","policyBody11":"Пользователь может уточнить данные профиля, удалить отдельные доступные материалы, отозвать разрешения устройства, прекратить использование сервиса, а также запросить доступ, исправление или удаление данных по адрес поддержки, указанный ниже. Некоторые данные могут сохраняться, если этого требует закон или безопасность.","policyHeading12":"12. Дети, изменения и контакты","policyBody12":"Сервис не предназначен для самостоятельного использования детьми младше 14 лет. Политика может обновляться вместе с развитием Zephyron; дата редакции указана вверху. Вопросы о данных направляются по адресу поддержки, указанному ниже."});
  Object.assign(copy.en, {"policyUpdated":"Effective September 3, 2026","policySupportTitle":"PRIVACY & SUPPORT","policySupportHint":"Data and account deletion requests","policyContents":"Contents","policyHeading1":"1. About this Policy","policyBody1":"This Policy explains what information Zephyron processes and why. The data operator is the service developer identified on the application's RuStore page. This Policy is available before registration and in the app.","policyHeading2":"2. Account data","policyBody2":"Registration processes a username, display name and password. The server stores a strong derived value rather than the plain password. You may also add a profile image, biography and account recovery data.","policyHeading3":"3. Communications","policyBody3":"Message delivery and synchronization require processing messages, images, files, reactions, sender and recipient details, timestamps and delivery states. Text messages are protected at rest on the server; the current version is not represented as providing end-to-end encryption for all chats.","policyHeading4":"4. Voice calls","policyBody4":"To establish a call, Zephyron processes participant names, call state and duration, network addresses and connection parameters. The application does not record or store conversation audio as a voice recording.","policyHeading5":"5. Technical data","policyBody5":"Login, security and diagnostics may involve a session token, installation identifier, device model or name, app version, IP address, connection times, error events and login-attempt information.","policyHeading6":"6. Device permissions","policyBody6":"Microphone access is used only for voice calls. Notification permission is used for messages and call information. Images selected by you are read only for upload or sending. Permissions can be revoked in Android settings.","policyHeading7":"7. Purposes and legal bases","policyBody7":"Data is used to create accounts, deliver messages, establish calls, sync content, recover access, prevent abuse, diagnose faults and comply with law. Legal bases include performance of these Terms, consent and the legitimate interest in securing the service.","policyHeading8":"8. Service providers and disclosure","policyBody8":"Data is not sold to advertisers. It may be technically processed by hosting and infrastructure providers. Firebase Cloud Messaging may process a device token and necessary service data for push notifications. Data may also be disclosed when required by a binding lawful request.","policyHeading9":"9. Retention","policyBody9":"Account and communication data is retained while needed to operate the service or comply with legal duties. Some images may have an expiry period shown in the app. Diagnostic and security records are retained only as long as reasonably needed.","policyHeading10":"10. Security","policyBody10":"Measures include access controls, password and token hashing, encryption of selected data at rest, request limits and technical access monitoring. No method eliminates every risk, so protecting your device is also important.","policyHeading11":"11. Your choices and rights","policyBody11":"You may update profile information, delete available individual materials, revoke device permissions, stop using the service, and request access, correction or deletion using the support address below. Some information may be retained where law or security requires it.","policyHeading12":"12. Children, updates and contact","policyBody12":"The service is not intended for independent use by children under 14. This Policy may change as Zephyron evolves; its effective date is shown above. Privacy questions can be sent using the support address below."});
  Object.assign(copy.ru,{games:'Игры',gamesIntro:'Небольшая пауза. Где-то между звёздами.',flightIntro:'Обходи астероиды. Собирай звёзды. Держи курс.',gameControls:'Веди корабль мышью или пальцем. На клавиатуре — стрелки ← →, пробел для паузы.',gameScore:'Счёт',gameBest:'Рекорд',gameCanvas:'Космическая игра Orbit',gameTip:'Один корабль. Бесконечный космос.',policyFile:'12 разделов / RU + EN'});
  Object.assign(copy.en,{games:'Games',gamesIntro:'A little break. Somewhere between the stars.',flightIntro:'Dodge asteroids. Collect stars. Stay on course.',gameControls:'Move with your mouse or finger. Keyboard: ← → arrows, space to pause.',gameScore:'Score',gameBest:'Best',gameCanvas:'Orbit space game',gameTip:'One ship. Endless space.',policyFile:'12 sections / RU + EN'});
  Object.assign(copy.ru,{downloads:'Скачать Zephyron',downloadsIntro:'Выбери свой экран. Остальное — Zephyron.',downloadPicker:'Выбор платформы',windowsDescription:'Отдельный клиент для твоего ПК. Переписка и привычное пространство общения — на большом экране.',macDescription:'Zephyron на твоём Mac. Знакомые панели, мягкие капсулы и пространство для разговоров.',androidDescription:'Твоё общение — с собой. Мобильный клиент Zephyron для телефона на Android.',desktopClient:'Для компьютера',mobileClient:'Для телефона',cardSwipe:'Листай карточки или выбирай платформу сверху.',downloadLater:'Ссылки на установщики добавим позже.',instructionLater:'Здесь появится инструкция для этой платформы.',installation:'Установка'});
  Object.assign(copy.en,{downloads:'Download Zephyron',downloadsIntro:'Choose your screen. Zephyron takes it from there.',downloadPicker:'Choose a platform',windowsDescription:'A dedicated client for your PC. Your conversations and familiar space to connect, on a bigger screen.',macDescription:'Zephyron on your Mac. Familiar panels, soft capsules and room for conversations.',androidDescription:'Take your conversations with you. The Zephyron mobile client for your Android phone.',desktopClient:'For your computer',mobileClient:'For your phone',cardSwipe:'Swipe the cards or choose a platform above.',downloadLater:'Installer links will be added later.',instructionLater:'Instructions for this platform will appear here.',installation:'Installation'});
  Object.assign(copy.ru,{pending:'Windows уже доступен. Версии для macOS и Android добавим позже.'});
  Object.assign(copy.en,{pending:'Windows is available. Downloads for macOS and Android will be added later.'});
  const pageName=document.body.dataset.page||'home';
  Object.assign(copy.ru,{common:'Общее',techFilter:'Раздел технологий',vpnOnly:'Только с VPN',bctDescription:'BCT создана для использования с VPN. Она помогает уменьшать задержку и дольше сохранять соединение при включённом VPN.',bctNote:'Без VPN технология не используется.',bctLatency:'Меньше задержка',bctStability:'Устойчивее соединение',emptyPlatformTech:'Пока без отдельных технологий',emptyPlatformTechText:'Здесь появятся технологии для выбранной платформы. BCT уже описана в разделе «Общее».'});
  Object.assign(copy.en,{common:'General',techFilter:'Technology category',vpnOnly:'VPN only',bctDescription:'BCT is designed for use with a VPN. It helps reduce latency and keep the connection active for longer while the VPN is enabled.',bctNote:'The technology is not used without a VPN.',bctLatency:'Lower latency',bctStability:'A steadier connection',emptyPlatformTech:'No platform-specific technologies yet',emptyPlatformTechText:'Technologies for the selected platform will appear here. BCT is already described under General.'});
  Object.assign(copy.ru, {team:'Команда',previewOne:'Тогда до встречи :)',previewTwo:'Кидай, сейчас послушаю',previewThree:'Супер, проверю вечером',compose:'Сообщение…',demoLabel:'Демонстрационная переписка',tryChats:'Выбери диалог — посмотри, как выглядит общение.',replay:'Повторить переписку ↻',pause:'Остановить анимацию Ⅱ',noteForm:'Ничего острого.',noteFormText:'Плавающие панели. Мягкие капсулы. Знакомый Zephyron.',noteSpace:'Место для разговора.',noteSpaceText:'Интерфейс остаётся на фоне. Люди — на первом плане.',noteEveryday:'Твой привычный экран.',noteEverydayText:'Windows, macOS или Android — выбирай своё устройство.'});
  Object.assign(copy.en, {team:'Team',previewOne:'See you then :)',previewTwo:'Send it, I’ll listen now',previewThree:'Great, I’ll check tonight',compose:'Message…',demoLabel:'Illustrative conversation',tryChats:'Choose a conversation. Get a feel for Zephyron.',replay:'Replay conversation ↻',pause:'Stop animation Ⅱ',noteForm:'No sharp edges.',noteFormText:'Floating panels. Soft capsules. Familiar Zephyron.',noteSpace:'Room for a conversation.',noteSpaceText:'The interface stays in the background. People come first.',noteEveryday:'Your everyday screen.',noteEverydayText:'Windows, macOS or Android — choose your device.'});
  const conversations={
    alex:{avatar:'avatar-a',initial:'A',messages:[
      ['in','18:42','Ты сегодня во сколько заканчиваешь?','What time do you finish today?'],
      ['out','18:43','Минут через двадцать. А что?','In about twenty minutes. Why?'],
      ['in','18:43','Давай прогуляемся? Я уже весь день дома 😅','Fancy a walk? I’ve been home all day 😅'],
      ['out','18:44','Давай! У кофейни на углу?','Sure! Meet at the café on the corner?'],
      ['in','18:45','Да, буду там в семь','Yep, I’ll be there at seven'],
      ['out','18:46','Тогда до встречи :)','See you then :)']
    ]},
    mira:{avatar:'avatar-m',initial:'M',messages:[
      ['in','11:04','Помнишь трек, который вчера играли?','Remember the track they played yesterday?'],
      ['out','11:05','Тот, который ты весь вечер напевала?','The one you hummed all evening?'],
      ['in','11:05','Да! Наконец нашла его','Yes! Finally found it'],
      ['out','11:06','Как называется?','What’s it called?'],
      ['in','11:07','Сейчас скину ссылку. Припев всё ещё в голове','I’ll send the link. Still can’t get the chorus out of my head'],
      ['out','11:08','Кидай, сейчас послушаю 🎧','Send it, I’ll listen now 🎧']
    ]},
    team:{avatar:'bot',initial:'✦',messages:[
      ['in','09:25','Новая сборка готова. Кто сможет проверить на Mac?','New build is ready. Can anyone test it on a Mac?'],
      ['out','09:26','Я могу. Что смотреть в первую очередь?','I can. What should I check first?'],
      ['in','09:27','Панель диалогов и переключение темы','The chat list and theme switching'],
      ['out','09:29','Окей. Ещё прогоню на маленьком экране','Got it. I’ll try a smaller screen too'],
      ['in','09:30','Спасибо! Если что-то съедет — кидай скрин','Thanks! Send a screenshot if anything looks off'],
      ['out','09:32','Супер, проверю вечером','Great, I’ll check tonight']
    ]}
  };
  let selectedChat='alex';
  let demoTimeout=0;
  let demoRunning=false;
  let demoInView=false;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const messageLog=document.getElementById('demo-messages');
  const replayButton=document.getElementById('demo-replay');
  function stopDemo(){clearTimeout(demoTimeout);demoRunning=false;}
  function renderConversation(animate=false){
    if(!messageLog)return;
    stopDemo();
    const chat=conversations[selectedChat];
    document.getElementById('chat-name').textContent=copy[language][selectedChat];
    const avatar=document.getElementById('chat-avatar');
    avatar.className='mini-avatar '+chat.avatar;avatar.textContent=chat.initial;
    document.querySelectorAll('[data-chat]').forEach(button=>{const active=button.dataset.chat===selectedChat;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    messageLog.setAttribute('aria-label',copy[language].demoLabel+' — '+copy[language][selectedChat]);
    document.querySelector('.chat-panel').setAttribute('aria-label',copy[language].concept);
    document.querySelector('.mobile-chat-picker').setAttribute('aria-label',copy[language].demoLabel);
    messageLog.replaceChildren();
    const today=document.createElement('span');today.className='today';today.textContent=copy[language].today;messageLog.append(today);
    const rows=chat.messages.map(([direction,time,ru,en])=>{
      const row=document.createElement('div');row.className='message-row '+(direction==='in'?'incoming-row':'outgoing-row');
      const bubble=document.createElement('div');bubble.className='message '+(direction==='in'?'incoming':'outgoing');
      const text=document.createElement('span');text.textContent=language==='ru'?ru:en;
      const timestamp=document.createElement('small');timestamp.textContent=time+(direction==='out'?' ✓✓':'');bubble.append(text,timestamp);
      const face=document.createElement('span');face.className='mini-avatar '+(direction==='in'?chat.avatar:'avatar-n');face.textContent=direction==='in'?chat.initial:'N';face.setAttribute('aria-hidden','true');
      direction==='in'?row.append(face,bubble):row.append(bubble,face);
      return row;
    });
    const syncReplay=()=>{replayButton.textContent=copy[language][demoRunning?'pause':'replay'];};
    if(!animate||reducedMotion.matches){messageLog.append(...rows);messageLog.scrollTop=0;syncReplay();return;}
    demoRunning=true;syncReplay();
    let index=0;
    const next=()=>{
      messageLog.querySelector('.typing')?.remove();
      rows[index].classList.add('message-arriving');messageLog.append(rows[index++]);messageLog.scrollTop=messageLog.scrollHeight;
      if(index===rows.length){demoRunning=false;syncReplay();return;}
      const typing=document.createElement('div');typing.className='typing';typing.setAttribute('aria-hidden','true');typing.innerHTML='<i></i><i></i><i></i>';messageLog.append(typing);
      demoTimeout=setTimeout(next,1050);
    };
    next();
  }
  const menuButton=document.createElement('button');
  menuButton.type='button';menuButton.className='menu-toggle';menuButton.id='menu-toggle';
  menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-controls','site-menu');
  menuButton.innerHTML='<span></span><span></span><span></span>';
  const nav=document.querySelector('.nav');nav.append(menuButton);
  const menu=document.createElement('dialog');menu.id='site-menu';menu.className='site-menu frost';
  menu.setAttribute('aria-labelledby','menu-heading');
  menu.innerHTML='<div class="menu-top"><div><span class="menu-logo"><img class="theme-logo" src="./assets/zephyron-wordmark-white.png" alt="Zephyron" width="1536" height="1024"></span><h2 id="menu-heading" class="menu-caption" data-i18n="sections"></h2></div><button class="menu-close" type="button" autofocus><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div><nav aria-label="Zephyron">'+[['home','index.html','01'],['downloads','downloads.html','02'],['changelog','changelog.html','03'],['technologies','technologies.html','04'],['privacy','privacy.html','05'],['games','games.html','06']].map(([key,url,num])=>'<a href="./'+url+'"'+(pageName===key?' aria-current="page"':'')+'><span class="menu-number">'+num+'</span><span data-i18n="'+key+'"></span><span class="menu-link-arrow" aria-hidden="true">↗</span></a>').join('')+'</nav><div class="menu-footer"><span class="dot"></span><span data-i18n="footer"></span></div>';
  document.body.append(menu);
  let scrollPosition=0;
  let closeMenuTimer=0;
  function syncMenuButton(){menuButton.setAttribute('aria-expanded',String(menu.open));menuButton.setAttribute('aria-label',copy[language][menu.open?'closeMenu':'menu']);}
  function openMenu(){
    if(menu.open)return;
    clearTimeout(closeMenuTimer);menu.classList.remove('menu-closing');
    scrollPosition=window.scrollY;
    document.body.style.top=`-${scrollPosition}px`;
    document.body.classList.add('menu-open');
    menu.showModal();syncMenuButton();
  }
  function closeMenu(){
    if(!menu.open||menu.classList.contains('menu-closing'))return;
    if(reducedMotion.matches){menu.close();return;}
    menu.classList.add('menu-closing');
    closeMenuTimer=setTimeout(()=>menu.close(),190);
  }
  menu.addEventListener('close',()=>{
    clearTimeout(closeMenuTimer);menu.classList.remove('menu-closing');
    document.body.classList.remove('menu-open');document.body.style.top='';
    const root=document.documentElement;const prior=root.style.scrollBehavior;
    root.style.scrollBehavior='auto';window.scrollTo(0,scrollPosition);root.style.scrollBehavior=prior;
    syncMenuButton();menuButton.focus({preventScroll:true});
  });
  menuButton.addEventListener('click',openMenu);
  menu.querySelector('.menu-close').addEventListener('click',closeMenu);
  let backdropPressed=false;
  const outside=e=>{const r=menu.getBoundingClientRect();return e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom;};
  menu.addEventListener('pointerdown',e=>{backdropPressed=outside(e);});
  menu.addEventListener('click',e=>{if(backdropPressed&&outside(e))closeMenu();backdropPressed=false;});
  menu.addEventListener('cancel',e=>{e.preventDefault();closeMenu();});
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',event=>{if(event.button===0&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey)closeMenu();}));
  const read = (key, fallback) => {try{return localStorage.getItem(key)||fallback;}catch{return fallback;}};
  const save = (key,value) => {try{localStorage.setItem(key,value);}catch{}};
  let language=read('zephyron-language','ru')==='en'?'en':'ru';
  let theme=read('zephyron-theme','dark')==='light'?'light':'dark';
  let timer;
  const languageButton=document.getElementById('language');
  const themeButton=document.getElementById('theme');
  const toast=document.getElementById('toast');
  function render(){
    document.documentElement.lang=language;
    document.documentElement.dataset.theme=theme;
    document.title=pageName==='home'?copy[language].title:copy[language][pageName]+' — Zephyron';
    document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=copy[language][el.dataset.i18n];});
    languageButton.textContent=language==='ru'?'EN':'RU';
    languageButton.setAttribute('aria-label',language==='ru'?'Switch to English':'Переключить на русский');
    themeButton.setAttribute('aria-label',copy[language][theme==='dark'?'light':'dark']);
    document.querySelector('.visual')?.setAttribute('aria-label',copy[language].concept);
    syncMenuButton();
    menu.querySelector('.menu-close').setAttribute('aria-label',copy[language].closeMenu);
    document.querySelector('.platform-tabs')?.setAttribute('aria-label',copy[language].platforms);
    document.querySelector('.tech-tabs')?.setAttribute('aria-label',copy[language].techFilter);
    document.querySelector('meta[name="description"]').content=language==='ru'?'Zephyron — мессенджер для Windows, macOS и Android.':'Zephyron — a messenger for Windows, macOS and Android.';
    renderConversation();
    renderTechnology();
    document.getElementById('orbit-canvas')?.setAttribute('aria-label',copy[language].gameCanvas);
    requestAnimationFrame(syncSelectors);
  }
  languageButton.addEventListener('click',()=>{language=language==='ru'?'en':'ru';save('zephyron-language',language);toast.classList.remove('visible');render();});
  themeButton.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';save('zephyron-theme',theme);render();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')toast.classList.remove('visible');});
  document.getElementById('year').textContent=new Date().getFullYear();
  const platformButtons=[...document.querySelectorAll('[data-log-platform]')];
  if(platformButtons.length){
    const selectPlatform=(platform)=>{platformButtons.forEach(button=>{const selected=button.dataset.logPlatform===platform;button.setAttribute('aria-pressed',String(selected));});document.getElementById('selected-platform').textContent=platform;syncSelectors();animateContent(document.querySelector('.empty-state'));};
    platformButtons.forEach(button=>button.addEventListener('click',()=>{selectPlatform(button.dataset.logPlatform);save('zephyron-log-platform',button.dataset.logPlatform);}));
    const saved=read('zephyron-log-platform','Windows');selectPlatform(['Windows','macOS','Android'].includes(saved)?saved:'Windows');
  }
  const techButtons=[...document.querySelectorAll('[data-tech-platform]')];
  const techCategories=['common','Windows','macOS','Android'];
  const savedTech=read('zephyron-tech-platform','common');
  let selectedTech=techCategories.includes(savedTech)?savedTech:'common';
  function renderTechnology(){
    if(!techButtons.length)return;
    techButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.techPlatform===selectedTech)));
    document.getElementById('bct-card').hidden=selectedTech!=='common';
    document.getElementById('tech-empty').hidden=selectedTech==='common';
    document.getElementById('selected-tech-label').textContent=selectedTech==='common'?copy[language].common:selectedTech;
  }
  techButtons.forEach(button=>button.addEventListener('click',()=>{
    selectedTech=button.dataset.techPlatform;save('zephyron-tech-platform',selectedTech);
    renderTechnology();syncSelectors();animateContent(document.getElementById('tech-content'));
  }));
  render();
  if(messageLog){
    document.querySelectorAll('[data-chat]').forEach(button=>button.addEventListener('click',()=>{selectedChat=button.dataset.chat;renderConversation();syncSelectors();animateContent(messageLog);}));
    replayButton.addEventListener('click',()=>renderConversation(!demoRunning));
    if('IntersectionObserver' in window){
      const observer=new IntersectionObserver(entries=>{if(entries[0].isIntersecting&&!demoInView){demoInView=true;renderConversation(true);observer.disconnect();}},{threshold:.45});
      observer.observe(document.querySelector('.app-window'));
    }
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&demoRunning)renderConversation();});
    reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches)renderConversation();});
  }
  if('IntersectionObserver' in window&&!reducedMotion.matches){
    const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){
      entry.target.classList.add('revealed');revealObserver.unobserve(entry.target);
      const cleanup=event=>{if(event.target===entry.target&&event.propertyName==='opacity'){
        entry.target.classList.remove('reveal-ready','revealed');entry.target.removeEventListener('transitionend',cleanup);
      }};
      entry.target.addEventListener('transitionend',cleanup);
    }}),{threshold:.12});
    document.querySelectorAll('.design-notes>div,.section-heading,.product-heading,.headline,.intro,.subpage>h1,.page-intro,.empty-state h2,.empty-state p,.technology-card h2,.technology-card p').forEach(el=>{el.classList.add('reveal-ready');revealObserver.observe(el);});
  }
  // Sliding glass lenses, measured again after language changes and resizing.
  function syncSelectors(){
    document.querySelectorAll('.platform-tabs,.mobile-chat-picker,.chat-list').forEach(group=>{
      if(group.classList.contains('liquid-dragging'))return;
      const active=group.querySelector('button[aria-pressed="true"]');
      if(!active)return;
      let lens=group.querySelector('.selector-lens');
      if(!lens){lens=document.createElement('span');lens.className='selector-lens';lens.setAttribute('aria-hidden','true');group.prepend(lens);group.classList.add('liquid-selector');}
      const visible=active.offsetWidth>0;
      lens.hidden=!visible;
      if(!visible)return;
      lens.style.left=active.offsetLeft+'px';lens.style.top=active.offsetTop+'px';
      lens.style.width=active.offsetWidth+'px';lens.style.height=active.offsetHeight+'px';
    });
  }
  function animateContent(element){
    if(!element||reducedMotion.matches)return;
    element.querySelectorAll('h2,h3,p,.message').forEach(text=>{
      text.getAnimations?.().forEach(animation=>animation.cancel());
      text.animate?.([{opacity:.4,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:440,easing:'cubic-bezier(.22,1,.36,1)'});
    });
  }
  syncSelectors();
  document.addEventListener('zephyron-platform-change',syncSelectors);
  setupDraggableSelectors();
  if('ResizeObserver' in window){
    const sizeObserver=new ResizeObserver(syncSelectors);
    document.querySelectorAll('.platform-tabs,.mobile-chat-picker,.chat-list').forEach(group=>sizeObserver.observe(group));
  }else window.addEventListener('resize',syncSelectors,{passive:true});
  document.fonts?.ready.then(syncSelectors);
  reducedMotion.addEventListener('change',()=>document.documentElement.classList.toggle('motion-ready',!reducedMotion.matches));

  function setupDraggableSelectors(){
    document.querySelectorAll('.platform-tabs,.mobile-chat-picker,.chat-list').forEach(group=>{
      const vertical=group.classList.contains('chat-list');
      const buttons=[...group.querySelectorAll('button[aria-pressed]')];
      const lens=group.querySelector('.selector-lens');
      if(!lens||buttons.length<2)return;
      let drag=null;
      let suppressClick=false;
      const clearPreview=()=>buttons.forEach(button=>button.classList.remove('drag-over'));
      const finish=(commit)=>{
        if(!drag)return;
        const current=drag;drag=null;
        group.classList.remove('liquid-dragging');clearPreview();
        if(group.hasPointerCapture?.(current.id))group.releasePointerCapture(current.id);
        if(current.moved){suppressClick=true;setTimeout(()=>{suppressClick=false;},500);}
        if(commit&&current.moved&&current.target)current.target.click();
        syncSelectors();
      };
      group.addEventListener('pointerdown',event=>{
        if(!event.isPrimary||event.button!==0||drag)return;
        const active=buttons.find(button=>button.getAttribute('aria-pressed')==='true');
        if(!active||active.offsetWidth===0)return;
        suppressClick=false;
        drag={id:event.pointerId,x:event.clientX,y:event.clientY,moved:false,target:active};
      });
      group.addEventListener('pointermove',event=>{
        if(!drag||drag.id!==event.pointerId)return;
        const along=vertical?event.clientY-drag.y:event.clientX-drag.x;
        const across=vertical?event.clientX-drag.x:event.clientY-drag.y;
        if(!drag.moved){
          if(Math.abs(along)<6)return;
          if(event.pointerType==='touch'&&Math.abs(across)>Math.abs(along)){finish(false);return;}
          drag.moved=true;group.setPointerCapture(event.pointerId);group.classList.add('liquid-dragging');
        }
        event.preventDefault();
        const rect=group.getBoundingClientRect();
        const position=vertical?event.clientY-rect.top-group.clientTop:event.clientX-rect.left-group.clientLeft;
        const start=button=>vertical?button.offsetTop:button.offsetLeft;
        const size=button=>vertical?button.offsetHeight:button.offsetWidth;
        const center=button=>start(button)+size(button)/2;
        const nearest=buttons.reduce((best,button)=>Math.abs(center(button)-position)<Math.abs(center(best)-position)?button:best,buttons[0]);
        drag.target=nearest;clearPreview();nearest.classList.add('drag-over');
        const active=buttons.find(button=>button.getAttribute('aria-pressed')==='true');
        const length=size(active);
        const lower=start(buttons[0]);
        const upper=start(buttons[buttons.length-1])+size(buttons[buttons.length-1])-length;
        const offset=Math.max(lower,Math.min(upper,position-length/2));
        lens.style[vertical?'top':'left']=offset+'px';
      });
      group.addEventListener('pointerup',event=>{if(drag?.id===event.pointerId){if(drag.moved)event.preventDefault();finish(true);}});
      group.addEventListener('pointercancel',event=>{if(drag?.id===event.pointerId)finish(false);});
      group.addEventListener('lostpointercapture',event=>{if(event.target===group&&drag?.id===event.pointerId)finish(false);});
      group.addEventListener('keydown',event=>{
        if(event.key==='Escape'){finish(false);return;}
        if(event.metaKey||event.ctrlKey||event.altKey)return;
        const current=buttons.indexOf(document.activeElement);
        if(current<0)return;
        const previous=vertical?'ArrowUp':'ArrowLeft';
        const next=vertical?'ArrowDown':'ArrowRight';
        let index=current;
        if(event.key===previous)index=Math.max(0,current-1);
        else if(event.key===next)index=Math.min(buttons.length-1,current+1);
        else if(event.key==='Home')index=0;
        else if(event.key==='End')index=buttons.length-1;
        else return;
        event.preventDefault();buttons[index].focus();buttons[index].click();
      });
      group.addEventListener('click',event=>{if(suppressClick&&event.detail>0){event.preventDefault();event.stopImmediatePropagation();suppressClick=false;}},true);
      window.addEventListener('blur',()=>finish(false));
      window.addEventListener('pointerup',event=>{if(drag?.id===event.pointerId)finish(false);});
      window.addEventListener('pointercancel',event=>{if(drag?.id===event.pointerId)finish(false);});
    });
  }

  // Ordinary multi-page navigation: no fetch/router, works with local file URLs too.
  let navigationPending=false;
  let navigationTimer=0;
  document.addEventListener('click',event=>{
    const link=event.target.closest?.('a[href]');
    if(!link||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||link.hasAttribute('download')||(link.target&&link.target!=='_self')||reducedMotion.matches)return;
    const url=new URL(link.href,location.href);
    const localFile=location.protocol==='file:'&&url.protocol==='file:';
    const sameOrigin=url.origin===location.origin&&/^https?:$/.test(url.protocol);
    const isSitePage=/\.html$|\/$/.test(url.pathname);
    if(!(localFile||sameOrigin)||!isSitePage||url.pathname===location.pathname)return;
    event.preventDefault();
    if(navigationPending)return;
    navigationPending=true;
    document.body.classList.remove('page-restored');document.body.classList.add('page-leaving');
    document.documentElement.classList.remove('page-restored');document.documentElement.classList.add('page-leaving');
    navigationTimer=setTimeout(()=>location.assign(url.href),300);
  });
  window.addEventListener('pageshow',event=>{
    clearTimeout(navigationTimer);navigationPending=false;
    document.body.classList.remove('page-leaving');
    document.documentElement.classList.remove('page-leaving');
    if(event.persisted){
      if(!reducedMotion.matches)document.body.classList.add('page-restored');
      if(!reducedMotion.matches)document.documentElement.classList.add('page-restored');
      renderConversation();renderTechnology();
    }
    syncSelectors();
  });
  window.addEventListener('pagehide',()=>{clearTimeout(navigationTimer);document.body.classList.remove('page-restored');document.documentElement.classList.remove('page-restored');stopDemo();});
})();
