import axios from "axios";
import AppConfig from "../config/AppConfig";


import UserService from "../services/User";

export async function createBid(data)
{
    const userService= new UserService();
    const user = await userService.getUser();

    const {bidURL} = AppConfig;
 
    data.token= user.token;
    const promise = await axios({
        method: "POST",
        url:bidURL,
        data
    });
    return promise;
}