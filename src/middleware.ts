import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest,) {
    const i18nMiddleware = createMiddleware(routing);
    return i18nMiddleware(request)
}

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};