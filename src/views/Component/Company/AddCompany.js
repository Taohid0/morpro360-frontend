import React, {Component} from "react";
import AddCompanyForm from "../../Forms/Company/AddCompanyForm";

export default class AddCompany extends Component{

    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
           <AddCompanyForm/>
        )
    }
}