import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const message = searchParams.get("message");
  const orderId = searchParams.get("orderId");

  // 실패 로그 기록
  console.error(`Payment failed for order ${orderId}: ${message}`);

  // 실패 페이지로 리다이렉트
  return NextResponse.redirect(new URL("/payment/failed", request.url));
} 