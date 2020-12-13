import axios from "axios";
import constants from "../constants.json";
export default function APILogin(username, password) {
  return axios.post(constants.baseAddress + "/api/login",  { username, password })
  .then(result => result)
  .catch(error => error);
}