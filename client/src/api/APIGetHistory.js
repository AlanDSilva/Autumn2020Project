import axios from "axios";
import constants from "../constants.json";
export default function APIGetHistory(token) {
  return axios.post(constants.baseAddress + "/api/history/getHistory", {token})
  .then(result => result)
  .catch(error => error);
}