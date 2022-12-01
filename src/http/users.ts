import axios from "@/utils/axios";
export const fetchAllUsers = () => axios.get("/user/fetch-users");
