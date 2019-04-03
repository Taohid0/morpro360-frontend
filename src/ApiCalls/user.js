import axios from "axios";
import AppConfig from "../config/AppConfig";
import UserService from "../services/User";

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


export async function getPendingUsers()
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {pendingUsersURL} = AppConfig;
   
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "GET",
        url:pendingUsersURL,
    });
    console.log(promise);
    return promise;
}
export async function activateUser(id)
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {activateUserURL} = AppConfig;
   
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "POST",
        url:activateUserURL,
        data:{id}
    });
    console.log(promise);
    return promise;
}

export async function deactivateUser(id)
{
    const userService= new UserService();
    const user = await userService.getUser()

    const {deactivateUserURL} = AppConfig;
   
 
    const promise = await axios({
        headers:{
            "Authorization":user.token,
        },
        method: "POST",
        url:deactivateUserURL,
        data:{id}
    });
    console.log(promise);
    return promise;
}