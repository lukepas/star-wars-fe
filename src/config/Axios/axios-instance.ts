import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL || "https://swapi.dev/api/",
});

export default instance;
