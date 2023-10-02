/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { SiClockify } from "react-icons/si";

const FoodDetails = () => {
  const { id } = useParams();
  const singleFood = useLoaderData();
  const {
    image,
    cook_time,
    food_name,
    instructions,
    preparation_time,
    publish_date,
    rating,
  } = singleFood;
  console.log(singleFood);
  const { user } = useContext(AuthContext);
  return (
    <Container className="w-full lg:mx-24 ">
      <h1>food details :{id}</h1>
      <h2>{user && <p>{user.email}</p>}</h2>
      <Box className="my-8">
        <div className="lg:flex items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image src={image} alt="" />
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
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default FoodDetails;
