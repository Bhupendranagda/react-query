import { useQuery } from "react-query";
import axios from "axios";

const fetcherFunction = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetcherFunction, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroes = data.data.map((d) => d.name);
    //   return superHeroes;
    // },
  });
};
