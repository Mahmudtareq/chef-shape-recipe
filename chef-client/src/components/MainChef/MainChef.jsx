import { Box, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const MainChef = () => {
  const [topChef, setTopChef] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setTopChef(data));
  }, []);
  return (
    <Box className="my-4">
      <Text
        fw={500}
        variant="gradient"
        gradient={{ from: "blue", to: "lime", deg: 90 }}
        className=" text-orange-800 "
        ta="center"
        size="xl"
      >
        Expert and Professional
      </Text>
      <Title className="text-center text-orange-800">TOP CHEF’S RECIPS</Title>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5">
        {topChef.slice(0, 6).map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </Box>
  );
};

export default MainChef;
