import { NextResponse } from "next/server";

export const middleware = (request) => {
  const { origin, pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  // Allow public post routes: /@username/:post-slug
  const publicPostPattern = /^\/@[^\/]+\/[^\/]+$/;
  const publicPaths = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/verify-email",
  ];

  if (
    !publicPostPattern.test(pathname) &&
    !publicPaths.includes(pathname) &&
    !accessToken &&
    !refreshToken
  ) {
    return NextResponse.redirect(`${origin}/login`);
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
