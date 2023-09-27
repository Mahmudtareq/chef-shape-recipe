/* eslint-disable no-unused-vars */
import { Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import FoodCard from "../FoodItemCard/FoodItemCard";
import { Carousel } from "@mantine/carousel";

const AllFoodItems = () => {
  const [allFood, setAllFood] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/food");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setAllFood(result);
        // Do something with the result here
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div className="my-14">
      <Text 
        size="xl"
        ta="center"
        fw={400}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 52 }}
      >
        Delicious Taste of
      </Text>
      <Title className="text-center">TODAY RECIPES</Title>
      <div className="mt-5">
        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
        >
          {allFood.slice(0, 10).map((foodItem) => (
            <Carousel.Slide key={foodItem.id}>
              <FoodCard foodItem={foodItem} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AllFoodItems;
