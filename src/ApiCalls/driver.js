import axios from "axios";
import AppConfig from "../config/AppConfig";

import UserService from "../services/User";

export async function createDriver(data)
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {driverURL} = AppConfig;

    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "POST",
        url:driverURL,
        data
    });
    return promise;
}