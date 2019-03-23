import axios from "axios";
import AppConfig from "../config/AppConfig";

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
