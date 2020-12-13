import axios from "axios";
import constants from "../constants.json";
export default function APIRegister(formData, config) {
  return axios.post(constants.baseAddress + "/api/users", formData, config)
  .then(result => result)
  .catch(error => error);
}