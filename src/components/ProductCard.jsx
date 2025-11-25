import { Card, Image, Text, Group, Badge, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function ProductCard({ ...rest }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="w-72"
      width="100%"
      component={Link}
      to={`/detail/${rest.id}`}
    >
      <Card.Section>
        <Image
          src={rest.thumbnail}
          height={360}
          alt="Product image"
          fit="contain"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{rest.title}</Text>
        <Badge color="green">{rest.reviews.length} reviews</Badge>
      </Group>
      <Text fw={500} fs={"16px"} c={"#3e3a3aff"}>
        {rest.description.slice(0, 60)}...
      </Text>
      <Text size="lg" fw={700} mt="sm">
        ${rest.price}
      </Text>

      <Button color="green" fullWidth mt="md" radius="md">
        Add to cart
      </Button>
    </Card>
  );
}
