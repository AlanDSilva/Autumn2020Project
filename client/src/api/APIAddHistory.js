import axios from "axios";
import constants from "../constants.json";
export default function APIAddHistory(data, config) {
  return axios.post(constants.baseAddress + "/api/cart", data, config)
  .then(result => result)
  .catch(error => error);
}