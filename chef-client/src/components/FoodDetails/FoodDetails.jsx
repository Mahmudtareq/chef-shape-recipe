import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const FoodDetails = () => {
  const { id } = useParams();
  const singleFood = useLoaderData();
  console.log(singleFood);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>food details :{id}</h1>
      <h2>{user && <p>{user.email}</p>}</h2>
    </div>
  );
};

export default FoodDetails;
