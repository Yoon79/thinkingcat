import { NextResponse } from "next/server";

const getPortoneToken = async () => {
  const response = await fetch("https://api.iamport.kr/users/getToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imp_key: process.env.PORTONE_API_KEY,
      imp_secret: process.env.PORTONE_API_SECRET,
    }),
  });
  const data = await response.json();
  return data.response.access_token;
};

const verifyPayment = async (impUid: string, amount: number, token: string) => {
  const response = await fetch(`https://api.iamport.kr/payments/${impUid}`, {
    headers: {
      "Authorization": token,
    },
  });
  const data = await response.json();
  
  if (data.response.status !== "paid") {
    throw new Error("결제가 완료되지 않았습니다.");
  }
  
  if (data.response.amount !== amount) {
    throw new Error("결제 금액이 일치하지 않습니다.");
  }
  
  return data.response;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const impUid = searchParams.get("imp_uid");
  const merchantUid = searchParams.get("merchant_uid");

  if (!impUid || !merchantUid) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/payment/failed?error=missing_parameters`
    );
  }

  try {
    // 1. 포트원 액세스 토큰 발급
    const accessToken = await getPortoneToken();
    
    // 2. 결제 정보 확인
    const paymentData = await verifyPayment(impUid, 49900, accessToken);
    console.log("paymentData", paymentData);
    // 3. 데이터베이스에 결제 정보 저장 및 사용자 구독 상태 업데이트
    // TODO: 실제 데이터베이스 연동 로직 구현
    // await db.payments.create({...})
    // await db.users.update({...})
    
    // 성공 페이지로 리다이렉트
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`
    );
  } catch (error) {
    console.error("Payment verification failed:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/payment/failed?error=verification_failed`
    );
  }
} 