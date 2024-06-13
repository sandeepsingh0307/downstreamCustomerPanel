import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const protectedRoutes = ["/profile", "/dashboard", "/setting"];
// export const authRoutes = ["/signin"];
// export const unprotectedRoutes = ["/"];

export function middleware(request: NextRequest) {

    if (protectedRoutes.includes(request.nextUrl.pathname)) {
        NextResponse.redirect(new URL('/signin', request.url))
    }
}