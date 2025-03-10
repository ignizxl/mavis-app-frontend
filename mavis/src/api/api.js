import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

const api = axios.create({
  baseURL: `${API_URL}/api`, 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const publicRoutes = ["/login", "/users"];
  const requiresAuth = !publicRoutes.some(route => 
    config.url.endsWith(route)
  );

  if (requiresAuth) {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
