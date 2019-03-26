import React, {Component} from "react";
import AddCompanyForm from "../../Forms/Company/AddCompanyForm";

import UserService from "../../../services/User";

export default class AddCompany extends Component{

    constructor(props)
    {
        super(props);
        this.userService = new UserService();
        this.loadUserOrRedirect = this.loadUserOrRedirect.bind(this);
    }

    componentWillMount()
    {
        this.loadUserOrRedirect();
    }

    async loadUserOrRedirect()
    {
      const user = await this.userService.getUser();
  
      if(user)
      {
        this.props.history.push("/dashboard");
      }
      
    }
    
    render()
    {
        return(
           <AddCompanyForm/>
        )
    }
}