/* eslint-disable react/prop-types */
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    name,
    experience_years,
    likes,
    number_of_recipes,
    rating,
    picture,
    id,
  } = chef;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="space-y-6">
      <Group justify="center">
        <Image src={picture} height={140} alt="Norway" />
      </Group>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
        <Badge
          variant="gradient"
          gradient={{ from: "red", to: "pink", deg: 360 }}
        >
          {number_of_recipes} Recips
        </Badge>
      </Group>
      <Group gap="xs" justify="center">
        <Badge
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          {experience_years} years
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: "blue", to: "lime", deg: 90 }}
        >
          {rating} Rating
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: "blue", to: "pink", deg: 90 }}
        >
          {likes} Likes
        </Badge>
      </Group>

      <Link to={`/chef/${id}`} className="no-underline">
        <Button variant="light" color="blue" fullWidth mt="xl" radius="md">
          Show details
        </Button>
      </Link>
    </Card>
  );
};

export default ChefCard;
