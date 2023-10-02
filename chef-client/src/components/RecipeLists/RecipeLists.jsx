/* eslint-disable react/prop-types */
import { Box, Button, Group, List, Text, Title, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
// import recipe from "../../assets/images/recipe1.png";

const RecipeLists = ({ item }) => {
  const { food_name, preparation_time, image, id } = item;
  console.log(item);
  return (
    <Box className="rounded-lg bg-blue-100 p-4 mt-5">
      <div className="lg:flex items-center gap-4 ">
        <div className="mb-5 lg:mb-0">
          <img src={image} className="lg:w-[150px] w-full" />
        </div>
        <div className="">
          <div className="space-y-2">
            <Title order={3}>{food_name}</Title>
            <Text fw={400}>BY GINO ACAMPO</Text>
          </div>

          <div>
            <List size="md" center>
              <List.Item>
                <Group>
                  {" "}
                  <Text fw={500}>Preparation time:</Text>
                  <Text fw={700}>{preparation_time} </Text>{" "}
                </Group>
              </List.Item>
              <List.Item>
                <Group>
                  {" "}
                  <Text fw={500}>Cooking time:</Text>{" "}
                  <Text fw={700}>10 to 30 mins</Text>{" "}
                </Group>
              </List.Item>
            </List>
          </div>
        </div>
      </div>
      <Group justify="flex-end" mt="lg">
        <Tooltip label="Add To Favorite" color="rgba(53, 64, 150, 1)">
          <Button variant="outline" color="gray" radius="md">
            <BsHeart className="text-[18px]"/>
          </Button>
        </Tooltip>

        <Link className="no-underline" to={`/food/${id}`}>
          <Tooltip label="Go Details" color="rgba(53, 64, 150, 1)">
            <Button variant="outline" color="gray" radius="md">
              <AiOutlineArrowRight className="text-[18px]"/>
            </Button>
          </Tooltip>
        </Link>
      </Group>
    </Box>
  );
};

export default RecipeLists;
