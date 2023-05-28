import axios from "axios";

export const calculationAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CALCULATION_URL,
});
