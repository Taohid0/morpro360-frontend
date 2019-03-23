import React, {Component} from "react";
import AddLoadForm from "../../Forms/Load/AddLoadForm";

export default class AddLoad extends Component{

    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
           <AddLoadForm/>
        )
    }
}