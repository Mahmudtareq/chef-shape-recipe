/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Container } from "@mantine/core";
import FoodDetailsHero from "../shared/FoodDetailsHero/FoodDetailsHero";
import FoodDetailsIngredients from "../shared/FoodDetailsIngredients/FoodDetailsIngredients";
import FoodDetailsInstructions from "../shared/FoodDetailsInstructions/FoodDetailsInstructions";

const FoodDetails = () => {
  const singleFood = useLoaderData();
  const { id } = useParams();
  return (
    <Container mt="lg">
      <FoodDetailsHero singleFood={singleFood} />
      <FoodDetailsIngredients singleFood={singleFood} />
      <FoodDetailsInstructions singleFood={singleFood} />
    </Container>
  );
};

export default FoodDetails;
