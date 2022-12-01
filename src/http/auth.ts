import axios from "@/utils/axios";
const auth = () => axios.get("/user/auth");

export default auth;
