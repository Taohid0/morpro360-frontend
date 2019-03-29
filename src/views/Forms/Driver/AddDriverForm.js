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
import { createDriver } from "../../../ApiCalls/driver";
import { getOwnedCompanies } from "../../../ApiCalls/company";
import DangerModal from "../../CustomModals/DangerModal";
import SuccessModal from "../../CustomModals/SuccessModal";

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
            email:"",
            "companyId":"",
            "license":"",
            isErrorModalVisible:false,
            modalErrorMessage:"",
            isSuccessModalVisible:false,
            successModalTitle:"Sucessful",
            modalSuccessMessage:"",
            companyDropdown:[],
        }
        this.userService = new UserService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleDangerModal = this.toggleDangerModal.bind(this);
        this.toggleSuccessModal = this.toggleSuccessModal.bind(this);
        this.fillUpCompany = this.fillUpCompany.bind(this);
    }

    componentWillMount()
    {
      this.fillUpCompany();
    }
    async fillUpCompany()
    {
      const promise = await getOwnedCompanies();
      const data = promise.data.data;
      const tempCompany = [];

      for(let company of data)
      {
        tempCompany.push(<option key={company.id} value={company.id}>{company.name}</option>)  
      }
      this.setState({companyDropdown:tempCompany}); 

      if(tempCompany.length>0)
      {
        this.setState({companyId:data[0].id});
      }

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
        modalSuccessMessage,successModalTitle,companyDropdown, ...stateData} = this.state;
        const validationErrors= validateInput(stateData,["name","email","phone","state","city","address","license","companyId"]);
          
          if(validationErrors)
          {
            const errormessage = validationErrors.join("\n");
            this.setState({ modalErrorMessage: errormessage });
            this.toggleDangerModal();
      
            return;
          }


          try {
            const response = await createDriver(stateData);
            const data = response.data;
            if (data.status) {
              const modalSuccessMessage = "Successfully new driver added";
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
              <strong>Driver</strong>
              <small> Form</small>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label htmlFor="driver">Name</Label>
                <Input type="text" id="name" placeholder="Enter driver name" name="name" value={this.state.name} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input type="phone" id="phone" placeholder="xxxxxxxxx" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="myawesomemail@mymail.com" name="email" value={this.state.email} onChange={this.handleChange} />
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
             
              {/* <FormGroup>
                <Label htmlFor="companyId">Select Company</Label>
                <Input type="select" name="companyId" id="companyId" value={this.state.companyId} onChange={this.handleChange}>
                   {this.state.companyDropdown}
                </Input>
              </FormGroup> */}
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
          </div>

        )
    }
}