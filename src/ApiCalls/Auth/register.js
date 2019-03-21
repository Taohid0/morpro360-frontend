import axios from "axios";
import AppConfig from "../../config/AppConfig";

async function register(data)
{
    const {userURL} = AppConfig;

    const promise = await axios({
        method: "POST",
        url: userURL,
        data
    });
    return promise;
}
async function login(data){
    const {loginURL} = AppConfig;

    const promise = await axios({
        method: "POST",
        url:loginURL,
        data
    });
    return promise;
}

async function getAllUsers()
{
    const {userURL} = AppConfig;

    const promise = await axios({
        method:"GET",
        url:userURL,
    });
    return promise;
}

async function getSingleUser(id){
    let {userURL} = AppConfig;
    userURL +=id+"/";
    const promise = await axios({
        method:"GET",
        url:userURL
    });
    return promise;
}