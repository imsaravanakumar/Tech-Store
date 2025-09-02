import axios from "axios";

const BASE_URL = "https://tech-store-eied.onrender.com/api/auth";

export const signup = (data) => axios.post(`${BASE_URL}/signup`, data);

export const login = (data) => axios.post(`${BASE_URL}/login`, data);
