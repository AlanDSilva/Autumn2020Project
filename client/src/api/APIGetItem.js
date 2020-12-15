import axios from "axios";
import constants from "../constants.json";
export default function APIAddItem(id) {
  return axios.get(constants.baseAddress + "/api/items/"+id)
  .then(result => result)
  .catch(error => error);
}