import axios from "axios";
import AppConfig from "../config/AppConfig";

import UserService from "../services/User";

export async function createLoad(data)
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {loadURL} = AppConfig;
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "POST",
        url:loadURL,
        data
    });
    return promise;
}