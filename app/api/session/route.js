import { NextResponse } from 'next/server';
import { COOKIE, verify } from '../../../lib/server';
export async function GET(request){ return NextResponse.json({authenticated: verify(request.cookies.get(COOKIE)?.value)}); }
