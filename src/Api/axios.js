import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://amazon-2026-backend.onrender.com/",
});

export { axiosInstance };
