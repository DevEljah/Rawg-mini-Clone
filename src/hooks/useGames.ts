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
