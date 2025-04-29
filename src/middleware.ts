import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from './utils/supabase/client';

const PUBLIC_ROUTES = ['/', '/sign-in', '/sign-up', 'forget-password', 'blog', '/api', '/_next', '/favicon.ico']

function isPublicRoute(pathname: string) {
  return PUBLIC_ROUTES.some((route) => pathname.startsWith(route))
}

export default function middleware(request: NextRequest,) {
  const intlResponse = createMiddleware(routing);

  if (intlResponse) return intlResponse

  const supabase = createClient()

  // Recupera o token do cookie
  const access_token = request.cookies.get('sb-access-token')?.value

  // Se a rota for pública, libera o acesso
  if (isPublicRoute(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  // Se não houver token, redireciona para login
  if (!access_token) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  // Valida o token com o Supabase
  const { data, error } = await supabase.auth.getUser(access_token)
  if (error || !data.user) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  // Usuário autenticado, segue normalmente
  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};