import { useState, useEffect } from "react";
import apiClient from "../utils/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  parent_platforms: { platform: { id: number; name: string; slug: string } }[];
  metacritic: number;
}
interface FetchGamesRes {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesRes>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    console.log(games);

    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;

// I set the state with response.data.results instead of just response.data. This is because the data object returned by the RAWG.io API contains additional metadata about the API response, such as the number of total results and the current page number. The actual game data is nested within the results key of the data object.

// By setting the state with response.data.results, we are only storing the actual game data in the state, rather than including all the metadata as well. This can make it easier to work with the data in our React component, and can also help reduce memory usage by only storing the necessary data.

// If we were to set the state with response.data instead, our games state would contain all the metadata as well, which could make it harder to work with and could also increase memory usage unnecessarily.
