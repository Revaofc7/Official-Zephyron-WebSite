/* Valueless play coins. Pure rules shared by the browser and the rule checks. */
(()=>{'use strict';
 const INITIAL=50000,BETS=Object.freeze([100,250,500,1000,2500]);
 const SYMBOLS=Object.freeze([
  {id:'moon',ru:'Луна',en:'Moon',multiplier:4,path:'<path d="M20 14.2A8.8 8.8 0 0 1 9.8 4 9 9 0 1 0 20 14.2Z"/>'},
  {id:'heart',ru:'Сердце',en:'Heart',multiplier:6,path:'<path d="M20.6 5.8a5 5 0 0 0-7.1 0L12 7.3l-1.5-1.5a5 5 0 0 0-7.1 7.1L12 21l8.6-8.1a5 5 0 0 0 0-7.1Z"/>'},
  {id:'star',ru:'Звезда',en:'Star',multiplier:8,path:'<path d="m12 2 3 6.3 7 .9-5 4.9 1.2 6.9-6.2-3.3L5.8 21 7 14.1l-5-4.9 7-.9L12 2Z"/>'},
  {id:'gem',ru:'Кристалл',en:'Crystal',multiplier:12,path:'<path d="m3 8 4-5h10l4 5-9 13L3 8Zm0 0h18M7 3l5 18 5-18M7 8l5-5 5 5"/>'},
  {id:'bolt',ru:'Молния',en:'Bolt',multiplier:16,path:'<path d="m14 2-10 12h7l-1 8L20 9h-7l1-7Z"/>'},
  {id:'zeph',ru:'Zephyron',en:'Zephyron',multiplier:24,path:null}
 ].map(Object.freeze));
 const ids=SYMBOLS.map(s=>s.id),validBalance=n=>Number.isSafeInteger(n)&&n>=0;
 function fresh(){return {version:1,balance:INITIAL,spins:0,last:null}}
 function payout(symbols,bet){if(!BETS.includes(bet)||!Array.isArray(symbols)||symbols.length!==3||symbols.some(s=>!ids.includes(s)))throw new RangeError('Invalid spin');const[a,b,c]=symbols;if(a===b&&b===c)return bet*SYMBOLS.find(s=>s.id===a).multiplier;return a===b||a===c||b===c?bet:0}
 function normalize(raw){if(!raw||raw.version!==1||!validBalance(raw.balance)||!Number.isSafeInteger(raw.spins)||raw.spins<0)return fresh();let last=null;try{if(raw.last&&typeof raw.last.id==='string'&&BETS.includes(raw.last.bet)&&Number.isSafeInteger(raw.last.at)){const symbols=[...raw.last.symbols];last={id:raw.last.id.slice(0,100),bet:raw.last.bet,symbols,payout:payout(symbols,raw.last.bet),at:raw.last.at}}}catch{}return {version:1,balance:raw.balance,spins:raw.spins,last}}
 function randomIndex(){if(typeof crypto!=='undefined'&&crypto.getRandomValues){const n=new Uint32Array(1),limit=4294967292;do{crypto.getRandomValues(n)}while(n[0]>=limit);return n[0]%6}return Math.floor(Math.random()*6)}
 function spin(raw,bet,random=randomIndex,id=String(Date.now()),at=Date.now()){const state=normalize(raw);if(!BETS.includes(bet)||state.balance<bet)throw new RangeError('Insufficient play coins');const symbols=Array.from({length:3},()=>{const i=random();if(!Number.isInteger(i)||i<0||i>=6)throw new RangeError('Invalid random index');return ids[i]});const paid=payout(symbols,bet),balance=state.balance-bet+paid;if(!validBalance(balance)||!Number.isSafeInteger(state.spins+1))throw new RangeError('Balance limit');return {version:1,balance,spins:state.spins+1,last:{id,bet,symbols,payout:paid,at}}}
 const api=Object.freeze({INITIAL,BETS,SYMBOLS,fresh,normalize,payout,randomIndex,spin});if(typeof module!=='undefined'&&module.exports)module.exports=api;else window.ZephyronSlots=api;
})();
