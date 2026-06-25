import { NextResponse } from 'next/server';
import { COOKIE, sign } from '../../../lib/server';
export async function POST(request){ const body=await request.json().catch(()=>({})); if(body.password !== (process.env.APP_PASSWORD||'EcoClean2026*')) return NextResponse.json({ok:false,error:'Contraseña incorrecta'},{status:401}); const res=NextResponse.json({ok:true}); res.cookies.set(COOKIE, sign(), {httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:60*60*24*30}); return res; }
