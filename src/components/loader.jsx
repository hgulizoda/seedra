import {
  Container,
  Skeleton,
  Card,
  Grid,
  Group,
  Button,
  Stack,
} from "@mantine/core";

export default function MantineSkeleton() {
  return (
    <Container size="lg" py={20}>
      <Card withBorder radius="md" p="xl" mb={30}>
        <Grid>
          <Grid.Col span={6}>
            <Stack>
              <Skeleton height={30} width="80%" radius="sm" />
              <Skeleton height={14} width="90%" />
              <Skeleton height={14} width="60%" />
              <Group mt={10}>
                <Skeleton height={36} width={100} radius="xl" />
                <Skeleton height={36} width={100} radius="xl" />
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={380} radius="md" />
          </Grid.Col>
        </Grid>
      </Card>

      <Group mb={20}>
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} height={30} width={80} radius="xl" />
        ))}
      </Group>

      <Grid>
        {Array.from({ length: 6 }).map((_, i) => (
          <Grid.Col key={i} span={4}>
            <Card withBorder radius="md" p="md">
              <Skeleton height={150} radius="md" />
              <Skeleton height={16} mt={10} width="70%" />
              <Skeleton height={12} mt={6} width="50%" />
              <Skeleton height={12} mt={6} width="90%" />
              <Group position="apart" mt={16}>
                <Skeleton height={20} width={60} />
                <Button disabled radius="xl">
                  Add to cart
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
