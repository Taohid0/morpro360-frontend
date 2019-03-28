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

import UserService from "../../../services/User";
import validateInput from "../../../validation/input";
import { createCompany } from "../../../ApiCalls/company";
import DangerModal from "../../CustomModals/DangerModal";
import SuccessModal from "../../CustomModals/SuccessModal";

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
            isSuccessModalVisible:false,
            successModalTitle:"Sucessful",
            modalSuccessMessage:""
        }
        this.userService = new UserService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleDangerModal = this.toggleDangerModal.bind(this);
        this.toggleSuccessModal = this.toggleSuccessModal.bind(this);

    }


    toggleDangerModal() {
      this.setState((state, props) => ({
        isErrorModalVisible: !state.isErrorModalVisible
      }));
    }
    toggleSuccessModal() {
      this.setState((state, props) => ({
        isSuccessModalVisible: !state.isSuccessModalVisible
      }));
    }
    handleChange(e)
    {    
        this.setState({[e.target.name]:e.target.value});
    }
    async handleSubmit(e)
    {
        e.preventDefault();
        const{isErrorModalVisible,modalErrorMessage,isSuccessModalVisible,
        modalSuccessMessage,successModalTitle, ...stateData} = this.state;
        const validationErrors= validateInput(stateData,["name","email","phone","description"]);
          
          if(validationErrors)
          {
            const errormessage = validationErrors.join("\n");
            this.setState({ modalErrorMessage: errormessage });
            this.toggleDangerModal();
      
            return;
          }


          try {
            const response = await createCompany(stateData);
            const data = response.data;
            if (data.status) {
              const modalSuccessMessage = "Successfully new company added";
              this.setState({modalSuccessMessage});
              this.toggleSuccessModal();

            } else {
              const errormessage = data.errors.join("\n");
              this.setState({ modalErrorMessage: errormessage });
              this.toggleDangerModal();
            }
          } catch (err) {
            console.log(err);
            const errormessage = "Something wrong, please try again later";
            this.setState({ modalErrorMessage: errormessage });
            this.toggleDangerModal();
          }
    }

    render()
    {
        return(
          <div>
           <DangerModal
          isVisible={this.state.isErrorModalVisible}
          errors={this.state.modalErrorMessage}
          toggleModal={this.toggleDangerModal}
        />
           <SuccessModal
          isVisible={this.state.isSuccessModalVisible}
          errors={this.state.modalSuccessMessage}
          toggleModal={this.toggleSuccessModal}
          title = {this.state.successModalTitle}
          goToDashboard = {()=>this.props.history.push("/dashboard")}
        />

            <Card>
            <CardHeader>
              <strong>Company</strong>
              <small> Form</small>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label htmlFor="company">Company</Label>
                <Input type="text" id="name" placeholder="Enter company name" name="name" value={this.state.company} onChange={this.handleChange} />
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
          </div>

        )
    }
}