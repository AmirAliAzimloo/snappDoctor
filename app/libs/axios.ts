import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export default axios.create({
  baseURL: BASE_URL,
});

// axios private instannce
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
