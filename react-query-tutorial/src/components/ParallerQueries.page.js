import axios from "axios";
import { useQuery } from "react-query";

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const ParallerQueries = () => {
  useQuery("super-heroes", fetchSuperHeroes);
  useQuery("friends", fetchFriends);
  return <div>ParallerQueries</div>;
};
