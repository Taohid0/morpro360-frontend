import axios from "axios";
import AppConfig from "../config/AppConfig";

import UserService from "../services/User";
export async function login(data) {
  const { loginURL } = AppConfig;

  try {
    const promise = await axios({
      method: "POST",
      url: loginURL,
      data
    });
    return promise;
  } catch (err) {
    return err.response;
  }
}
export async function logout()
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {logoutURL} = AppConfig;

    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "POST",
        url:logoutURL
    });
    return promise;
}