import { useState } from "react";
import { useSuperHeroesData } from "../hook/useSuperHeroesData";

const RQSuperheroes = () => {
  const [reFetchInterval, setreFetchInterval] = useState(2000);

  const onSuccess = (data) => {
    setreFetchInterval(false);
    console.log("hi i am from on sucess", data);
  };

  const onError = (err) => {
    setreFetchInterval(false);
    console.log("hi iam from on error ", err);
  };

  const { data, isLoading, isError, error, refetch, isFetching } =
    useSuperHeroesData(onSuccess, onError);

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
      <button onClick={refetch}>Refetch Data</button>
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {data.map((hero) => {
        return <div key={hero}>{hero}</div>;
      })}
    </>
  );
};

export default RQSuperheroes;
