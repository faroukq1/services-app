import axios from "axios";

const useFetchHook = axios.create({
  baseURL: "http://192.168.1.7:3000/",
});

export default useFetchHook;
