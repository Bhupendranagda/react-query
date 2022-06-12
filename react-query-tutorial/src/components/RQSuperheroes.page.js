import { useQuery } from "react-query";
import axios from "axios";

const fetcherFunction = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperheroes = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    "super-heroes",
    fetcherFunction,
    {
      //   cacheTime: 5000,
      //   staleTime: 30000,
      //   refetchInterval: 2000,
      enabled: false,
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
      <button onClick={refetch}>Fetch My Heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperheroes;
