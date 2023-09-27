/* eslint-disable react/prop-types */
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const FoodCard = ({ foodItem }) => {
  const { food_name, rating, image, id } = foodItem;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="center" >
        <Image src={image} alt="Norway" height={180}/>
      </Group>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700}>{food_name}</Text>
        <Badge color="pink" variant="light">
          {rating}
        </Badge>
      </Group>
      <Link className="no-underline" to={`/food/${id}`}>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Show details
        </Button>
      </Link>
    </Card>
  );
};

export default FoodCard;
