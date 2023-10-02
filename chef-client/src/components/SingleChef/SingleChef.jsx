import { Container } from "@mantine/core";
import { useLoaderData, useParams } from "react-router-dom";
// import FoodCard from "../shared/FoodCard/FoodCard";
import { useEffect, useState } from "react";
import SingleChefHeader from "../shared/SingleChefHeader/SingleChefHeader";
import RecipeLists from "../RecipeLists/RecipeLists";

const SingleChef = () => {
  const [chef, setChef] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/chef");
        if (response.ok) {
          const singleChefData = await response.json();
          const singleChef = singleChefData.find(
            (item) => parseInt(item.id) === parseInt(id)
          );
          setChef(singleChef);
        } else {
          // Handle errors if the response status is not OK
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <Container className="my-8">
      <div className="my-5">
        <SingleChefHeader chef={chef} />
      </div>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div> */}
      <div className="grid md:grid-cols-2  grid-cols-1 gap-6">
        {data.map((item) => (
          <RecipeLists key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default SingleChef;
