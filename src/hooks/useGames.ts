import { useState, useEffect } from "react";
import apiClient from "../utils/apiClient";

interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  platforms: { platform: { id: number; name: string } }[];
}
interface FetchGamesRes {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesRes>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
    console.log(games);
  }, []);
  return { games, error };
};

export default useGames;

// I set the state with response.data.results instead of just response.data. This is because the data object returned by the RAWG.io API contains additional metadata about the API response, such as the number of total results and the current page number. The actual game data is nested within the results key of the data object.

// By setting the state with response.data.results, we are only storing the actual game data in the state, rather than including all the metadata as well. This can make it easier to work with the data in our React component, and can also help reduce memory usage by only storing the necessary data.

// If we were to set the state with response.data instead, our games state would contain all the metadata as well, which could make it harder to work with and could also increase memory usage unnecessarily.
