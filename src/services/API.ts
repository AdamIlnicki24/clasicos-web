import { auth } from "@/firebase";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 20000,
});

api.interceptors.request.use(async (config) => {
  if (!config.headers) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    config.headers = {};
  }

  const user = (await auth.currentUser?.getIdTokenResult()) as unknown as {
    token: string | null;
  };
  console.log("user", user);

  // set auth token
  if (user && user.token) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }

  config.headers["x-api-version"] = 1;

  return config;
});

export { api };
