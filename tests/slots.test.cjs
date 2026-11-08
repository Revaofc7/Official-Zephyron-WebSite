const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const CORE=require.resolve('../slots-core.js'),c=require(CORE);
assert.equal(c.fresh().balance,50000);assert.equal(c.BETS.length,5);
for(const bet of c.BETS){let losses=0,pairs=0,triples=0;for(let a=0;a<6;a++)for(let b=0;b<6;b++)for(let d=0;d<6;d++){
 const queue=[a,b,d],r=c.spin(c.fresh(),bet,()=>queue.shift(),'test',10),s=[a,b,d].map(i=>c.SYMBOLS[i].id);
 const triple=a===b&&b===d,pair=a===b||a===d||b===d,expected=triple?bet*c.SYMBOLS[a].multiplier:pair?bet:0;
 assert.equal(r.last.payout,expected);assert.equal(r.balance,50000-bet+expected);assert.equal(r.spins,1);assert.deepEqual(r.last.symbols,s);
 const restored=c.normalize(JSON.parse(JSON.stringify(r)));assert.deepEqual(restored,r);assert.equal(c.normalize(restored).balance,r.balance,'restoring never pays again');
 if(triple)triples++;else if(pair)pairs++;else losses++;
 }assert.deepEqual([triples,pairs,losses],[6,90,120]);}
for(const bad of [null,{version:2,balance:500},{version:1,balance:-1,spins:0},{version:1,balance:NaN,spins:0}])assert.equal(c.normalize(bad).balance,50000);
assert.throws(()=>c.spin({...c.fresh(),balance:99},100),RangeError);assert.throws(()=>c.spin(c.fresh(),101),RangeError);assert.throws(()=>c.spin(c.fresh(),500,()=>6),RangeError);
assert.equal(c.spin({...c.fresh(),balance:100},100,(()=>{const q=[0,1,2];return()=>q.shift()})()).balance,0);
let raw=[4294967295,4294967292,4294967291];const ctx={module:{exports:{}},crypto:{getRandomValues:a=>{a[0]=raw.shift()}},Uint32Array,Math,Date,Object,Array,Number,RangeError};vm.runInNewContext(fs.readFileSync(CORE,'utf8'),ctx);assert.equal(ctx.module.exports.randomIndex(),5);assert.equal(raw.length,0);
console.log('PASS: 1,080 outcomes across all bets, 50,000 initial coins, exact payouts, pair returns, zero balance, reload idempotence, invalid state recovery and unbiased crypto rejection.');
