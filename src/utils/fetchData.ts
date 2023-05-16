import axios from "axios";

export const fetchData = async () => {
  const url = "https://api.rawg.io/api/games";
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  const response = await axios.get(url, {
    params: {
      key: API_KEY,
      page_size: 39, // max per per page!'
      // const DATES = "2016-09-01,2022-09-30";
      // Replace with your desired date range
    },
  });
  console.log(response.data);
  return response.data.results;
};
