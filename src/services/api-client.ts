import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11818600d4c4407e89ae0285b31cd3e6",
  },
});
