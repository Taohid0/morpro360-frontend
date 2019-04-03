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

export async function loadDetails(id)
{
    const userService= new UserService();
    const user = await userService.getUser()

    let {loadURL} = AppConfig;
    loadURL += "/"+id;
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "GET",
        url:loadURL,
    });
    console.log(promise);
    return promise;
}

export async function availableLoad()
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {availableLoadURL} = AppConfig;
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "GET",
        url:availableLoadURL,
    });
    return promise;
}

export async function availableLoadAdmin()
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {availableLoadAdminURL} = AppConfig;
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "GET",
        url:availableLoadAdminURL,
    });
    return promise;
}