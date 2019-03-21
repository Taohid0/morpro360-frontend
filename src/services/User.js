export default class User{
    KEY = "@morpro:user";
    async clearData()
    {
        window.localStorage.clear();
    }

   async getUser()  
    {
        try{
            const userDataString = window.localStorage.getItem(this.KEY);
            if (!userDataString)
            {
                return false;
            }
            const user = JSON.parse(userDataString);
            return user;
        }
        catch (error) {
            return false;
        }
    }

    async storeUser(user)
    {
        const userData = JSON.stringify(user);
        window.localStorage.setItem(this.KEY, userData);
    }

}