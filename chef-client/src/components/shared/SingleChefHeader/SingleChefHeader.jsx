/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import {
  Box,
  Group,
  Image,
  Loader,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import mainChef from "../../../assets/images/main-chef.png";
import { BiSolidLike } from "react-icons/bi";

import SocialMedia from "../SocialMedia/SocialMedia";

const SingleChefHeader = ({ chef }) => {
  const { loading } = useContext(AuthContext);
  console.log(chef);
  const {
    chef_description,
    experience_years,
    name,
    number_of_recipes,
    likes,
    rating,
  } = chef;
  if (loading) {
    return <Loader />;
  }
  return (
    <Box className="bg-gray-200 p-4 shadow-sm rounded-md">
      <div className="lg:flex items-center gap-20 p-3">
        <div className="lg:mb-0 mb-3">
          <Image src={mainChef} radius="md" h={220} w="auto" />
        </div>
        <Box className="space-y-1">
          <Text
            size="lg"
            fw={600}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
          >
            {number_of_recipes} Recipe
          </Text>
          <Title order={3}>{name}</Title>
          <Group>
            <Text
              size="lg"
              fw={600}
              variant="gradient"
              gradient={{ from: "gray", to: "rgba(13, 0, 0, 1)", deg: 90 }}
            >
              Experience :
            </Text>
            <Text
              size="lg"
              fw={600}
              variant="gradient"
              gradient={{ from: "gray", to: "rgba(13, 0, 0, 1)", deg: 90 }}
            >
              {experience_years} Years
            </Text>
          </Group>
          <Group gap="md">
            <Text
              size="lg"
              fw={600}
              variant="gradient"
              gradient={{ from: "gray", to: "rgba(13, 0, 0, 1)", deg: 90 }}
            >
              {likes} <BiSolidLike className="text-blue-600 text-xl" />
            </Text>
            <Text
              size="lg"
              fw={600}
              variant="gradient"
              gradient={{ from: "gray", to: "rgba(13, 0, 0, 1)", deg: 90 }}
            >
              <Rating
                value={rating}
                fractions={2}
                readOnly
                color="rgba(242, 91, 61, 1)"
              />
            </Text>
          </Group>
          <Text lineClamp={4} ta="justify">
            {chef_description}
          </Text>
         <SocialMedia/>
        </Box>
      </div>
    </Box>
  );
};

export default SingleChefHeader;
