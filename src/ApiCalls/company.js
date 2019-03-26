import axios from "axios";
import AppConfig from "../config/AppConfig";


import UserService from "../services/User";

export async function createCompany(data)
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {companyURL} = AppConfig;
 
    data.token=  user.token;
    const promise = await axios({
        method: "POST",
        url:companyURL,
        data
    });
    return promise;
}