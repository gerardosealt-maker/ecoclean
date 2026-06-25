import crypto from 'crypto';
import { seedState } from './seed';
export const COOKIE='eco_clean_session';
export function sign(){ const secret=process.env.APP_SESSION_SECRET||'dev-secret'; const value=`ok.${Date.now()}`; const sig=crypto.createHmac('sha256',secret).update(value).digest('hex'); return `${value}.${sig}`; }
export function verify(token){ try{ if(!token) return false; const parts=token.split('.'); if(parts.length!==3||parts[0]!=='ok') return false; const secret=process.env.APP_SESSION_SECRET||'dev-secret'; const sig=crypto.createHmac('sha256',secret).update(`${parts[0]}.${parts[1]}`).digest('hex'); return sig===parts[2]; }catch{return false;} }
export const cleanUrl = url => { if(!url) return ''; const u=url.trim().replace(/\/+$/,''); return u.endsWith('/rest/v1')?u:`${u}/rest/v1`; };
export const stateId = () => process.env.APP_STATE_ID || 'eco-clean';
export const secret = () => process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
export function demo(){ return JSON.parse(JSON.stringify(seedState)); }
const headers = key => ({ apikey:key, Authorization:`Bearer ${key}`, 'Content-Type':'application/json' });
export async function getState(){ const url=cleanUrl(process.env.SUPABASE_URL||''), key=secret(); if(!url||!key) return {source:'local-demo', state:demo()}; const res=await fetch(`${url}/eco_clean_state?id=eq.${encodeURIComponent(stateId())}&select=payload`,{headers:headers(key),cache:'no-store'}); if(!res.ok) throw new Error(await res.text()); const rows=await res.json(); if(rows?.[0]?.payload) return {source:'supabase', state:rows[0].payload}; const st=demo(); await saveState(st); return {source:'supabase-seeded', state:st}; }
export async function saveState(state){ const url=cleanUrl(process.env.SUPABASE_URL||''), key=secret(); const next={...state, version:6, lastUpdated:new Date().toISOString()}; if(!url||!key) return {source:'local-demo', state:next}; const res=await fetch(`${url}/eco_clean_state`,{method:'POST',headers:{...headers(key), Prefer:'resolution=merge-duplicates,return=representation'},body:JSON.stringify([{id:stateId(),payload:next,updated_at:new Date().toISOString()}]),cache:'no-store'}); if(!res.ok) throw new Error(await res.text()); return {source:'supabase', state:next}; }
