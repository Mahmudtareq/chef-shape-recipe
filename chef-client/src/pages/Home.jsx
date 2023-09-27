import { Container } from "@mantine/core";
import MainChef from "../components/MainChef/MainChef";
import HeroSection from "../components/shared/HeroSection/HeroSection";
import AllFoodItems from "../components/AllFoodItems/AllFoodItems";
import TapItems from "../components/TapItems/TapItems";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <MainChef />
        <AllFoodItems />
        <TapItems />
      </Container>
    </>
  );
};

export default Home;
