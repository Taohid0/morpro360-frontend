function validateInput(obj,arr)
{
    const errorMessages = {
        "firstName":"Fist name cannot be blank",
        "lastName": "Last name cannot be blank",
        "userName":"Username cannot be blank",
        "email" :"Email cannot blank",
        "password" : "Password cannot be blank",
    }
    let errors = [];
    for(let field in arr)
    {
        if(!obj[field])
        {
            errors.push(errorMessages[field]);
        }
    }
    if (errors.length===0)
    {
        return false;
    }
    return errors;
}
export default validateInput;