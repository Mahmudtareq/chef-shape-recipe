import { Box, Button, Group, List, Text, Title } from "@mantine/core";
import recipe from "../../assets/images/recipe1.png";

const RecipeLists = () => {
  return (
    <Box className="my-8">
      <div className="lg:flex items-center gap-20 rounded-lg bg-gray-300 p-4 ">
        <div className="mb-5 lg:mb-0">
          <img src={recipe} className="lg:w-[200px] w-full" />
        </div>
        <div className="">
          <div className="space-y-2">
            <Title order={3}>Stuffed Chicken Breast</Title>
            <Text fw={400}>BY GINO ACAMPO</Text>
          </div>

          <div>
            <List size="md" center>
              <List.Item>
                <Group>
                  {" "}
                  <Text fw={500}>Preparation time:</Text>
                  <Text fw={700}>30 mins</Text>{" "}
                </Group>
              </List.Item>
              <List.Item>
                <Group>
                  {" "}
                  <Text fw={500}>Cooking time:</Text>{" "}
                  <Text fw={700}>10 to 30 mins</Text>{" "}
                </Group>
              </List.Item>
              <List.Item>
                <Group>
                  {" "}
                  <Text fw={500}>Serves :</Text>{" "}
                  <Text fw={700}> 4 Persons</Text>{" "}
                </Group>
              </List.Item>
            </List>
          </div>
        </div>
        <Group  mt="lg">
          <Button>Favorite</Button>
          <Button>Details</Button>
        </Group>
      </div>
    </Box>
  );
};

export default RecipeLists;
