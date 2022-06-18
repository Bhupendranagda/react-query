import React from "react";
import { useSuperHeroData } from "../hook/useSuperHeroData";
import { useParams } from "react-router-dom";

export const RQSuperHero = () => {
  // we get useParams from react router it will give us the heroid from params
  // remember the destructured name should be same as app.js name
  const { heroId } = useParams();
  //   To do the query for singe super hero we did this
  const { data, isLoading, error, isError } = useSuperHeroData(heroId);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
