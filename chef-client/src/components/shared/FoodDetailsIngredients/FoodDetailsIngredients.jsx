/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Image, List, Text, ThemeIcon, Title } from "@mantine/core";
import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import videoImage from "../../../assets/images/vid-img.jpg";

const FoodDetailsIngredients = ({ singleFood }) => {
 
  return (
    <Box className="my-8">
      <div className="lg:flex items-center gap-10 ">
        <div className="w-full lg:w-1/3 mb-5 lg:mb-0 lg:ms-4">
          <Title order={3} mb="lg">
            Ingredients
          </Title>

          {singleFood.ingredients ? (
            <List
              spacing="xs"
              size="md"
              center
              icon={
                <ThemeIcon color="cyan" size="md" radius="xl">
                  <BiArrowFromLeft size="1rem" />
                </ThemeIcon>
              }
            >
              {singleFood.ingredients.map((instruction, index) => (
                <List.Item key={index} c="gray">
                  {instruction}
                </List.Item>
              ))}
            </List>
          ) : (
            <Text c="red">No ingredients available.</Text>
          )}
        </div>
        <div className="w-full lg:w-2/3">
          <Image src={videoImage} h={250} radius="md" />
        </div>
      </div>
    </Box>
  );
};

export default FoodDetailsIngredients;
