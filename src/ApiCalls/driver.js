import axios from "axios";
import AppConfig from "../config/AppConfig";

import UserService from "../services/User";

export async function createDriver(data)
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {driverURL} = AppConfig;
 
    data.token=  user.token;
    const promise = await axios({
        method: "POST",
        url:driverURL,
        data
    });
    return promise;
}