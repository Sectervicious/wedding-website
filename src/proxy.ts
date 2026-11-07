import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale } from "@/lib/i18n/config";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
