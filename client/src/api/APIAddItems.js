import axios from "axios";
import constants from "../constants.json";
export default function APIAddItems(formData, config) {
  return axios.post(constants.baseAddress + "/api/items", formData, config)
  .then(result => result)
  .catch(error => error);
}