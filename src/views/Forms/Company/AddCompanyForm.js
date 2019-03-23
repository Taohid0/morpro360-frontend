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
                <Input type="text" id="company" placeholder="Enter company name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="myawesomecompany@mymail.com" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="street">Phone</Label>
                <Input type="text" id="phone" placeholder="Enter company phone number" />
              </FormGroup>
              <FormGroup>
                  <FormGroup>
                    <Label htmlFor="city">Description</Label>
                    <Input type="text" id="description" placeholder="Enter company description" />
                  </FormGroup>
              </FormGroup>
            </CardBody>
            
            {/* <Row className="align-items-right">
              <Col  md="3" xs="1" className="">
                <Button block color="success">Success</Button>
              </Col>
            </Row> */}
         
            <Button className="btn btn-success col-6 align-self-center"><i className="fa fa-dot-circle-o"></i> Create Company</Button>
            <br/>
            <br/>
          </Card>

        )
    }
}