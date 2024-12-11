import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Fix headers for development
  if (process.env.NODE_ENV === 'development') {
    const forwardedHost = request.headers.get('x-forwarded-host');
    const origin = request.headers.get('origin');

    if (forwardedHost && origin && forwardedHost !== origin) {
      url.headers.set('x-forwarded-host', origin);
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}
