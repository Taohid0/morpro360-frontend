function validateInput(obj,arr)
{
    const errorMessages = {
        "firstName":"Fist name cannot be blank",
        "lastName": "Last name cannot be blank",
        "userName":"Username cannot be blank",
        "email" :"Email cannot be blank",
        "password" : "Password cannot be blank",
    }
    let errors = [];
    for(let field of arr)
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
    console.log(errors);
    return errors;
}
export default validateInput;