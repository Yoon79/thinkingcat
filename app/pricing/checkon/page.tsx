"use client";

import {
  Container,
  Title,
  Text,
  Card,
  Group,
  List,
  ThemeIcon,
  Button,
  Grid,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { nanoid } from "nanoid";

declare global {
  interface Window {
    IMP: any;
  }
}

const plans = [
  {
    title: "프리미엄",
    price: "49,900",
    priceAmount: 49900,
    features: [
      "무제한 클래스 운영",
      "상세 학습 분석",
      "맞춤형 리포트",
      "학부모 알림 서비스",
      "출결 자동화 기능",
      "기본 기술 지원",
      "API 연동",
      "우선 기술 지원",
      "맞춤형 기능 개발",
      "데이터 백업",
      "관리자 대시보드",
    ],
    buttonText: "결제하기",
    popular: true,
  },
];

export default function PricingPage() {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(script);

    script.onload = () => {
      const { IMP } = window;
      IMP.init("YOUR_PORTONE_STORE_ID");
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handlePayment = async (plan: any) => {
    const merchantUid = nanoid();
    window.IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: merchantUid,
        name: `체크온 ${plan.title} 요금제`,
        amount: plan.priceAmount,
        buyer_email: "buyer@example.com",
        buyer_name: "구매자",
        m_redirect_url: `${window.location.origin}/api/payments/success`,
      },
      (response: any) => {
        if (response.success) {
          router.push("/payment/success");
        } else {
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <Container size="lg" py="xl">
      <Title
        order={1}
        size="h2"
        fw={800}
        ta="center"
        className="bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent"
      >
        합리적인 요금제로 시작하세요
      </Title>
      <Text c="dimmed" ta="center" size="md" maw={580} mx="auto" mt="sm">
        모든 규모의 교육기관에 맞는 다양한 요금제를 제공합니다. 필요한 기능만
        선택하여 시작하세요.
      </Text>

      <Grid mt={30}>
        {plans.map((plan) => (
          <Grid.Col key={plan.title} span={{ base: 12, md: 6 }}>
            <Card
              shadow="sm"
              padding="md"
              radius="md"
              withBorder
              className={plan.popular ? "border-blue-500 border-2" : ""}
            >
              {plan.popular && (
                <Text
                  c="blue"
                  fw={500}
                  size="xs"
                  tt="uppercase"
                  ta="center"
                  mt="xs"
                >
                  가장 인기있는 플랜
                </Text>
              )}
              <Text fw={700} size="lg" ta="center" mt="md">
                {plan.title}
              </Text>
              <Group justify="center" mt="md">
                <Text size="lg" span fw={700}>
                  ₩
                </Text>
                <Text size="lg" span fw={700}>
                  {plan.price}
                </Text>
                <Text size="xs" span c="dimmed">
                  / 월
                </Text>
              </Group>

              <List
                spacing="xs"
                size="xs"
                mt={20}
                center
                icon={
                  <ThemeIcon size={16} radius="xl" className="bg-blue-500">
                    <IconCheck size={10} />
                  </ThemeIcon>
                }
              >
                {plan.features.map((feature) => (
                  <List.Item key={feature}>{feature}</List.Item>
                ))}
              </List>

              <Button
                fullWidth
                mt="md"
                size="sm"
                variant={plan.popular ? "filled" : "light"}
                onClick={() => handlePayment(plan)}
                className={
                  plan.popular
                    ? "bg-gradient-to-r from-[#60A5FA] to-[#34D399] hover:opacity-90"
                    : ""
                }
              >
                {plan.buttonText}
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Text c="dimmed" ta="center" size="xs" mt={30}>
        모든 요금제는 부가세 별도이며, 연간 결제 시 20% 할인됩니다.
        <br />
        기업 고객을 위한 맞춤형 요금제는 별도 문의 바랍니다.
      </Text>
    </Container>
  );
}
