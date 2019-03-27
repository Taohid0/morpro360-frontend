import axios from "axios";
import AppConfig from "../config/AppConfig";


import UserService from "../services/User";

export async function createCompany(data)
{
    const userService= new UserService();
    const user = await userService.getUser();

    const {companyURL} = AppConfig;
 
    data.token= user.token;
    const promise = await axios({
        method: "POST",
        url:companyURL,
        data
    });
    return promise;
}

export async function getOwnedCompanies()
{
    const userService = new UserService();
    const user = await userService.getUser();

    const {ownedCompanyURL} = AppConfig;

    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method :"GET",
        url:ownedCompanyURL,
    });
    return promise;
}