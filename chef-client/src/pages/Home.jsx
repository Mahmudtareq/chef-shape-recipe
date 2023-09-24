import { Container } from "@mantine/core";
import MainChef from "../components/MainChef/MainChef";
import HeroSection from "../components/shared/HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <MainChef />
      </Container>
    </>
  );
};

export default Home;
