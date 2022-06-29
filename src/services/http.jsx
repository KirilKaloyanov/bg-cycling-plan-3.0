import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const http = { get: axios.get, post: axios.post };
export default http;
