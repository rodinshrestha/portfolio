import axios from "@/utils/axios";
const auth = (Source: any) =>
  axios.get("/user/auth", { cancelToken: Source.token });

export default auth;
