import React, {Component} from "react";
import AddDriverForm from "../../Forms/Driver/AddDriverForm";

export default class AddDriver extends Component{

    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
           <AddDriverForm/>
        )
    }
}