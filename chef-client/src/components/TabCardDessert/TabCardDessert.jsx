import {
  Button,
  Grid,
  Image,
  List,
  Rating,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import tabImage3 from "../../assets/images/tab-img3.png";
import { BiCheck } from "react-icons/bi";

const TabCardDessert = () => {
  return (
    <div className="bg-[#293e6b] px-1 py-6 rounded-md">
      <Grid className="p-6">
        <Grid.Col span={{ base: 12, xs: 7 }}>
          <div className="text-white">
            <Title order={2} mb={4}>
              Taste Lime Slime Garnished
            </Title>
            <Text mb="lg" mt="lg" className="flex items-center gap-2 flex-wrap">
              <Rating defaultValue={5} />
              <Text>Recipe by: James Smith</Text>
            </Text>
          </div>
          <div>
            <Title order={2} mt="xl" className="text-white ">
              Ingredients
            </Title>
            <List
              size="md"
              center
              mt="xl"
              mb="lg"
              className="text-white flex flex-wrap items-center gap-x-11 "
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <BiCheck size="1rem" />
                </ThemeIcon>
              }
            >
              <div className="space-y-3 mb-3 lg:mb-0">
                <List.Item>1 tsp. granulated sugar</List.Item>
                <List.Item>Black pepper</List.Item>
                <List.Item>1/2 small red onion</List.Item>
              </div>
              <div className="space-y-3">
                <List.Item>5 cloves garlic</List.Item>
                <List.Item>1 cup butter, melted</List.Item>
                <List.Item>thinly sliced</List.Item>
              </div>
            </List>
            <Button
              variant="filled"
              color="rgba(27, 196, 12, 1)"
              size="xl"
              radius="xl"
              mt="xl"
              mb="lg"
            >
              I made It
            </Button>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 5 }} className="rounded-md py-2">
          <Image src={tabImage3} radius="xl" fit="contain" />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default TabCardDessert;
