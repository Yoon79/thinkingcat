"use client";

import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function PaymentFailedPage() {
  const router = useRouter();

  return (
    <Container size="sm" py="xl">
      <Stack align="center">
        <Title
          order={1}
          size="h2"
          fw={800}
          ta="center"
          className="text-red-500"
        >
          결제에 실패했습니다
        </Title>
        <Text c="dimmed" ta="center" size="md">
          결제 처리 중 문제가 발생했습니다.
          <br />
          다시 시도하시거나 고객센터로 문의해주세요.
        </Text>
        <Button
          size="md"
          variant="light"
          color="red"
          onClick={() => router.push("/pricing")}
        >
          다시 시도하기
        </Button>
      </Stack>
    </Container>
  );
}
