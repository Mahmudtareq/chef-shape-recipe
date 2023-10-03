/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  Paper,
  Rating,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { SiClockify } from "react-icons/si";
import SocialMedia from "../SocialMedia/SocialMedia";

const FoodDetailsHero = ({ singleFood }) => {
  const {
    image,
    cook_time,
    food_name,
    instructions,
    preparation_time,
    publish_date,
    rating,
    description,
  } = singleFood;
  return (
    <Box className="my-8">
      <div className="lg:flex items-center gap-10">
        <div className="w-full lg:w-1/2">
          <Image src={image} alt="" width={120} />
        </div>
        <div className="w-full lg:w-1/2 lg:mt-0 mt-3 space-y-3">
          <Title>{food_name}</Title>
          <Group gap={2}>
            <Text>Published on :</Text>
            <Text>{publish_date}</Text>
          </Group>
          <Paper bg="green" className="p-4">
            <SimpleGrid
              cols={{ base: 2, md: 3 }}
              spacing={{ base: 10, sm: "xl" }}
              verticalSpacing={{ base: "md", sm: "xl" }}
            >
              <div className="flex items-center gap-2">
                <SiClockify />
                <div>
                  <Text>Prep Time</Text>
                  <Text c="light">{preparation_time}</Text>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <SiClockify />
                <div>
                  <Text>Prep Time</Text>
                  <Text>{preparation_time}</Text>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <SiClockify />
                <div>
                  <Text>Prep Time</Text>
                  <Text>{preparation_time}</Text>
                </div>
              </div>
            </SimpleGrid>
          </Paper>
          <Group>
            <Rating value={rating} fractions={2} readOnly />
            <Text>({rating}/5) 76 Ratings</Text>
          </Group>
          <Group mt="">
            <SocialMedia />
          </Group>
          <Text>{description}</Text>
        </div>
      </div>
      <div className="my-8">
        <Text ta="justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odit
          illo esse voluptatum sint fugiat laudantium nihil quisquam excepturi,
          cumque provident temporibus asperiores obcaecati reprehenderit laborum
          suscipit repellat numquam. Doloribus ipsam similique accusantium odit
          laborum nesciunt, eum reprehenderit repellendus. Veniam cum molestiae,
          velit necessitatibus voluptate quis perspiciatis quod culpa eligendi
          temporibus amet, in vero ut rerum sint quia. Vitae dolor commodi eaque
          totam tenetur, voluptates numquam tempora delectus eos inventore
          cumque consequatur autem nihil, atque ipsum. Voluptatem magni aut
          possimus incidunt ipsum, cupiditate ut. Dolorum autem, incidunt quas
          blanditiis perspiciatis, nulla in facilis nesciunt, hic iure quos
          dolorem nam repellat!
        </Text>
      </div>
    </Box>
  );
};

export default FoodDetailsHero;
