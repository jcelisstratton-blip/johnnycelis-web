import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const basicAuth = request.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (
      user === process.env.PANEL_USER &&
      pwd === process.env.PANEL_PASSWORD
    ) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Autenticación requerida", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Panel Central"' },
  });
}

export const config = {
  matcher: "/panelcentral/:path*",
};
