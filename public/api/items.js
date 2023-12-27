import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL || "/data/db.json";

export default axios.create({
  baseURL: baseURL,
});
