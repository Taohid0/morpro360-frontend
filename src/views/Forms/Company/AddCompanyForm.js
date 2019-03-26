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

export default class AddCompanyForm  extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            name:"",
            email:"",
            phone:"",
            description:"",
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
              <strong>Company</strong>
              <small> Form</small>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label htmlFor="company">Company</Label>
                <Input type="text" id="company" placeholder="Enter company name" name="company" value={this.state.company} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="myawesomecompany@mymail.com" name="email" value={this.state.email} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input type="text" id="phone" placeholder="Enter company phone number" name="phone" value={this.state.phone} onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                  <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input type="text" id="description" placeholder="Enter company description" name="description" value={this.state.description} onChange={this.handleChange}/>
                  </FormGroup>
              </FormGroup>
            </CardBody>
            
            {/* <Row className="align-items-right">
              <Col  md="3" xs="1" className="">
                <Button block color="success">Success</Button>
              </Col>
            </Row> */}
         
            <Button onClick={this.handleSubmit} className="btn btn-success col-6 align-self-center"><i className="fa fa-dot-circle-o"></i> Create Company</Button>
            <br/>
            <br/>
          </Card>

        )
    }
}