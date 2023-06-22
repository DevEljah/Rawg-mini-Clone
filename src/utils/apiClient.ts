import axios from "axios";

const baseURL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export default axios.create({
  baseURL: baseURL,
  params: {
    key: API_KEY,
    page_size: 39, // max per per page!'
    // const DATES = "2016-09-01,2022-09-30";
    // Replace with your desired date range
  },
});
