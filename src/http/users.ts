import axios from "@/utils/axios";
export const fetchAllUsers = (Source: any) =>
  axios.get("/user/fetch-users", { cancelToken: Source.token });
