import React, {Component} from "react";
import {
    Badge,
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
  } from 'reactstrap';

export default class AddDriverForm  extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            name:"",
            phone:"",
            "state":"",
            "city":"",
            address:"",
            "companyId":"",
            "license":"",
            isErrorModalVisible:false,
            modalErrorMessage:"",
            isSuccessfulModalVisible:false,
            modalSuccessMessage:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit(e)
    {
        e.preventDefault();
    }

    render()
    {
        return(
            <Card>
            <CardHeader>
              <strong>Driver</strong>
              <small> Form</small>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label htmlFor="driver">Name</Label>
                <Input type="text" id="name" placeholder="Enter driver name" name="name" value={this.state.name} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Phone</Label>
                <Input type="phone" id="phone" placeholder="xxxxxxxxx" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="state">State</Label>
                <Input type="text" id="state" placeholder="Enter driver's state" name="state" value={this.state.state} onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                    <Label htmlFor="city">City</Label>
                    <Input type="text" id="city" placeholder="Enter driver's city" name="city" value={this.state.city} onChange={this.handleChange}/>
              </FormGroup>
               <FormGroup>
                    <Label htmlFor="address">Address</Label>
                    <Input type="text" id="address" placeholder="Enter driver's address" name="address" value={this.state.address} onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                    <Label htmlFor="license">License Number</Label>
                    <Input type="text" id="license" placeholder="Enter driver's license" name="license" value={this.state.license} onChange={this.handleChange}/>
              </FormGroup>
             
              <FormGroup>
                <Label htmlFor="company">Select Company</Label>
                <Input type="select" name="company" id="company">
                  {/* name value onChange need to be updated */}
                  <option>My First Company</option>
                  <option>My Second Company</option>
                  <option>My Third Company</option>
                </Input>
              </FormGroup>
            </CardBody>
            
            {/* <Row className="align-items-right">
              <Col  md="3" xs="1" className="">
                <Button block color="success">Success</Button>
              </Col>
            </Row> */}
         
            <Button onClick={this.handleSubmit} className="btn btn-success col-6 align-self-center"><i className="fa fa-dot-circle-o"></i> Create Driver</Button>
            <br/>
            <br/>
          </Card>

        )
    }
}