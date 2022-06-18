import { useQuery } from "react-query";
import axios from "axios";

const fetcherFunction = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const onSuccess = (data) => {
  console.log("hi i am from on sucess", data);
};

const onError = (err) => {
  console.log("hi iam from on error ", err);
};

const RQSuperheroes = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    "super-heroes",
    fetcherFunction,
    {
      onSuccess,
      onError,
    }
  );

  if (isLoading || isFetching) {
    console.log("isLoading");
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperheroes</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperheroes;
