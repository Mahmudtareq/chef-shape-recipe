import { useLoaderData, useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();
  const singleFood = useLoaderData();
  console.log(singleFood);
  return (
    <div>
      <h1>food details :{id}</h1>
    </div>
  );
};

export default FoodDetails;
