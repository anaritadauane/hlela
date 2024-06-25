import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const loginApi = (credentials: { email: string; password: string }) => {
  return api.post("/users/login", credentials);
};

export const usersApi = () => {
  return api.get("/users").then((response) => response.data);
};

export const categoriesApi = () => {
  return api
    .get("/categories?include=businesses")
    .then((response) => response.data);
};
