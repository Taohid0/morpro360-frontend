import axios from "axios";
import AppConfig from "../config/AppConfig";


import UserService from "../services/User";

export async function createBid(data)
{
    const userService= new UserService();
    const user = await userService.getUser();

    const {bidURL} = AppConfig;
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "POST",
        url:bidURL,
        data
    });
    return promise;
}

export async function getMyBids()
{
    const userService= new UserService();
    const user = await userService.getUser();

    const {myBidsURL} = AppConfig;
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "GEt",
        url:myBidsURL,

    });
    return promise;
}