import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _W-6Z0aeFm3SYhoy6YblswMJGsI2H8wh2Var_hLWBbY",
  },
});
