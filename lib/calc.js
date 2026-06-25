export const labels = { venta:'Venta', compra:'Compra mercancía', gasto:'Gasto operativo', ingreso_extra:'Ingreso extra', gasto_extra:'Gasto extra', pago_deuda:'Pago de deuda' };
export const mxn = (n=0) => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(Number(n||0));
export const pct = (n=0) => `${Math.round(Number(n||0)*100)}%`;
export const monthKey = (date='') => date.slice(0,7);
export const nowMonth = () => new Date().toISOString().slice(0,7);
export const uid = (p='id') => `${p}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
export const num = v => { const n = Number(String(v??'').replace(/[^0-9.-]/g,'')); return Number.isFinite(n)?n:0; };
export function metrics(state, month=nowMonth()){
  const s = state.settings || {}; const rows = (state.movements||[]).filter(m=>monthKey(m.date)===month);
  const sum = t => rows.filter(m=>m.type===t).reduce((a,m)=>a+Number(m.amount||0),0);
  const sales=sum('venta'), purchases=sum('compra'), expenses=sum('gasto'), extraIn=sum('ingreso_extra'), extraOut=sum('gasto_extra'), debtPay=sum('pago_deuda');
  const monthlyGoal = Number(s.dailySalesGoal||0)*Number(s.targetBusinessDays||0), outflows=purchases+expenses+extraOut+debtPay, net=sales+extraIn-outflows;
  const saleDays = new Set(rows.filter(m=>m.type==='venta'&&m.amount>0).map(m=>m.date)).size, avg=saleDays?sales/saleDays:0;
  const debtBalance=(state.debts||[]).filter(d=>d.status!=='Liquidada').reduce((a,d)=>a+Number(d.balance||0),0);
  const today = new Date(), [y,mo]=month.split('-').map(Number), elapsed=(today.getFullYear()===y&&today.getMonth()+1===mo)?today.getDate():new Date(y,mo,0).getDate();
  const expected=Number(s.dailySalesGoal||0)*Math.min(elapsed, Number(s.targetBusinessDays||0));
  return { rows, sales, purchases, expenses, extraIn, extraOut, debtPay, outflows, gross:sales-purchases, net, monthlyGoal, progress:monthlyGoal?sales/monthlyGoal:0, saleDays, avg, debtBalance, margin:(sales+extraIn)?net/(sales+extraIn):0, expected, rhythm:sales-expected, projection:avg*Number(s.targetBusinessDays||0), dailyNeeded:Math.max(0,(monthlyGoal-sales)/Math.max(1,Number(s.targetBusinessDays||0)-saleDays)) };
}
export function salesByDay(state, month=nowMonth()) { const [y,mo]=month.split('-').map(Number), days=new Date(y,mo,0).getDate(), goal=Number(state.settings?.dailySalesGoal||0); return Array.from({length:days},(_,i)=>{ const day=i+1, date=`${y}-${String(mo).padStart(2,'0')}-${String(day).padStart(2,'0')}`; const rows=(state.movements||[]).filter(m=>m.date===date); return {day,date,sales:rows.filter(m=>m.type==='venta').reduce((a,m)=>a+Number(m.amount||0),0),out:rows.filter(m=>!['venta','ingreso_extra'].includes(m.type)).reduce((a,m)=>a+Number(m.amount||0),0),goal}; }); }
export function byCategory(state, month=nowMonth()) { const map=new Map(); for (const m of (state.movements||[])) if(monthKey(m.date)===month && !['venta','ingreso_extra'].includes(m.type)) map.set(m.category||'Sin categoría',(map.get(m.category||'Sin categoría')||0)+Number(m.amount||0)); return [...map].map(([name,value])=>({name,value})).sort((a,b)=>b.value-a.value); }
export function yearRows(state) { const y=Number(state.settings?.workingYear||new Date().getFullYear()); return Array.from({length:12},(_,i)=>{ const key=`${y}-${String(i+1).padStart(2,'0')}`; return {key,label:new Date(y,i,1).toLocaleDateString('es-MX',{month:'short'}),...metrics(state,key)}; }); }
