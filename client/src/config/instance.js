import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:5001"
})
export default instance
