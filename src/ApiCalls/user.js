import axios from "axios";
import AppConfig from "../config/AppConfig";

export async function createUser(data)
{
    const {userURL} = AppConfig;

    const promise = await axios({
        method: "POST",
        url: userURL,
        data
    });
    return promise;
}

export async function getAllUsers()
{
    const {userURL} = AppConfig;

    const promise = await axios({
        method:"GET",
        url:userURL,
    });
    return promise;
}

export async function getSingleUser(id){
    let {userURL} = AppConfig;
    userURL +=+"/"+id+"/";
    const promise = await axios({
        method:"GET",
        url:userURL
    });
    return promise;
}
