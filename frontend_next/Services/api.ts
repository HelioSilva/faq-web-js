import axios from "axios";

const api = axios.create({
  //baseURL: "http://3.91.230.251:3333",
  baseURL: "http://faqcomputek.tk",
  headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "https://www.faqcomputek.tk",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  },
});

// api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default api;
