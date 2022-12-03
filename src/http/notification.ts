import axios from "@/utils/axios";

export const getNotification = (Source: any) =>
  axios.get("/notification", { cancelToken: Source.token });

export const createNotification = (body: any) =>
  axios.post("/notification", { ...body });
