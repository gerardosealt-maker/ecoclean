import { NextResponse } from 'next/server';
import { COOKIE, verify, getState, saveState } from '../../../lib/server';
const deny=()=>NextResponse.json({ok:false,error:'Sesión no autorizada'},{status:401});
export async function GET(request){ if(!verify(request.cookies.get(COOKIE)?.value)) return deny(); try{return NextResponse.json({ok:true,...await getState()});}catch(e){return NextResponse.json({ok:false,error:e.message},{status:500});} }
export async function PUT(request){ if(!verify(request.cookies.get(COOKIE)?.value)) return deny(); try{ const body=await request.json(); return NextResponse.json({ok:true,...await saveState(body.state)}); }catch(e){return NextResponse.json({ok:false,error:e.message},{status:500});} }
