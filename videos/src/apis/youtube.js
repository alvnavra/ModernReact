import axios from "axios";
const KEY = "AIzaSyC5Xj-YwIQFfROqEYCsPiRe2_vQWvsBZbw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
