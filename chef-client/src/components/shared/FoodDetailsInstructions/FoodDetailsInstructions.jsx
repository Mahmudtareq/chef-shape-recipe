/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, List, Text, ThemeIcon, Title } from "@mantine/core";
import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const FoodDetailsInstructions = ({ singleFood }) => {
  return (
    <Box className="my-8">
      <div className="w-full  mb-5 lg:mb-0 lg:ms-4">
        <Title order={3} mb="lg">
          Instructions
        </Title>

        {singleFood.instructions ? (
          <List
            spacing="xs"
            size="md"
            center
            icon={
              <ThemeIcon color="cyan" size="md" radius="xl">
                <BsArrowReturnRight size="1rem" />
              </ThemeIcon>
            }
          >
            {singleFood.instructions.map((instruction, index) => (
              <List.Item key={index} c="gray">
                {instruction}
              </List.Item>
            ))}
          </List>
        ) : (
          <Text c="red">No ingredients available.</Text>
        )}
      </div>
    </Box>
  );
};

export default FoodDetailsInstructions;
