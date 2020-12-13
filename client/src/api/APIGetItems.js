import axios from "axios";
import constants from "../constants.json";
export default function APIGetItems() {
  return axios.get(constants.baseAddress + "/api/items")
  .then(result => result)
  .catch(error => error);
}