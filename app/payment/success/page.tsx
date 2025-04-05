"use client";

import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage() {
  const router = useRouter();

  return (
    <Container size="sm" py="xl">
      <Stack align="center">
        <Title
          order={1}
          size="h2"
          fw={800}
          ta="center"
          className="bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent"
        >
          결제가 완료되었습니다
        </Title>
        <Text c="dimmed" ta="center" size="md">
          체크온 프리미엄 서비스 이용이 시작되었습니다.
          <br />더 나은 교육 관리를 시작해보세요.
        </Text>
        <Button
          size="md"
          onClick={() => router.push("/dashboard")}
          className="bg-gradient-to-r from-[#60A5FA] to-[#34D399] hover:opacity-90"
        >
          대시보드로 이동
        </Button>
      </Stack>
    </Container>
  );
}
