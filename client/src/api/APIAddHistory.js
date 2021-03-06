import axios from "axios";
import constants from "../constants.json";
export default function APIAddHistory(data) {
  return axios.post(constants.baseAddress + "/api/history", data)
  .then(result => result)
  .catch(error => error);
}