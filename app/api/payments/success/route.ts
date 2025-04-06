import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paymentId = searchParams.get("paymentId");
  const orderId = searchParams.get("orderId");

  try {
    // 여기에서 결제 검증 및 데이터베이스 처리를 수행합니다
    // 1. 포트원 API를 통해 결제 정보 확인
    // 2. 데이터베이스에 결제 정보 저장
    // 3. 사용자 구독 상태 업데이트

    // 성공 페이지로 리다이렉트
    return NextResponse.redirect(new URL("/payment/success", request.url));
  } catch (error) {
    console.error("Payment verification failed:", error);
    return NextResponse.redirect(new URL("/payment/error", request.url));
  }
} 