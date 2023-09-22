import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/slide-hero.png";

import { BackgroundImage, Button } from "@mantine/core";

const HeroSection = () => {
  return (
    <BackgroundImage
      src={heroImage}
      radius="sm"
      className="w-full h-full mt-0 ms-0 bg-center bg-cover"
    >
      <div className=" max-w-2xl  py-32 sm:py-48 lg:py-56 ">
        <div className="text-center">
          <p className="mt-6 text-lg leading-8 text-gray-600 ">
            The Perfect Choice
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Chicken and Mushroom
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600  mx-2">
            Fresh, organic ingredients. Carefully prepared.
          </p>
          <div className="mt-10 ">
            <Button
              variant="filled"
              color="rgba(74, 1, 23, 1)"
              size="xl"
              radius="xl"
              className="hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              <Link to="#" className="no-underline">
                Book A Table
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default HeroSection;
