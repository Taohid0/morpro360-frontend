import axios from "axios";
import AppConfig from "../config/AppConfig";

export async function createCompany(data)
{
    const {companyURL} = AppConfig;

    const promise = await axios({
        method: "POST",
        url:companyURL,
        data
    });
    return promise;
}