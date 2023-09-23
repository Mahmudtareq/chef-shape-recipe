import { Container } from "@mantine/core";
import { useLoaderData, useParams } from "react-router-dom";

const SingleChef = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);

  return (
    <Container>
      {id && (
        <h1 className="fs-4 text-start mt-3 mb-3">
          This category News :{data.length}
        </h1>
      )}
    </Container>
  );
};

export default SingleChef;
