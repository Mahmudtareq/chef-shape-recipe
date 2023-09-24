import { Container } from "@mantine/core";
import { useLoaderData, useParams } from "react-router-dom";
import FoodCard from "../shared/FoodCard/FoodCard";

const SingleChef = () => {
  const { id } = useParams();
  const data = useLoaderData();

  return (
    <Container className="my-8">
      {id && (
        <h1 className="fs-4 text-start mt-3 mb-3">
          This category Food Item :{data.length}
        </h1>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default SingleChef;
