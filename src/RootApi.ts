import axios from "axios";
import { baseRootUrl, newbaseRootUrl } from "./config";

export const RootApi = axios.create({
  baseURL: baseRootUrl,
});

export const NewRootApi = axios.create({
  baseURL: newbaseRootUrl,
});

