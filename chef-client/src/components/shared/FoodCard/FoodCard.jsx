/* eslint-disable react/prop-types */
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { food_name, rating, description, image, id } = item;
  return (
    <div className="my-5">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="center">
          <Image src={image} alt="Norway" />
        </Group>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{food_name}</Text>
          <Badge color="pink" variant="light">
            {rating}
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {description}
        </Text>
        <Link className="no-underline" to={`/food/${id}`}>
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Show details
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default FoodCard;
