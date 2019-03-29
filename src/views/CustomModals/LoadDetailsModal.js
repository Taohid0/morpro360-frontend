import React, { Component } from "react";

import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Badge,
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
  Row
} from "reactstrap";

import { getOwnedCompanies } from "../../ApiCalls/company";
import validateInput from "../../validation/input";
import {createBid} from "../../ApiCalls/bid";
import { getCompanyDrivers } from "../../ApiCalls/driver";
import { timingSafeEqual } from "crypto";
export default class LoadDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBidPressed: false,
      okButtonTitle: "Bid on this load",
      rate: "",
      offererCompanyId: "",
      companyDropdown: [],
      driverDropdown: [],
      note: "",
      driverId: ""
    };
    this.allCompanies = [];
    this.allDrivers = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillUpCompany = this.fillUpCompany.bind(this);
    this.showBiddingFields = this.showBiddingFields.bind(this);
    this.fillUpDrivers = this.fillUpDrivers.bind(this);
  }
  //this.props.goToDashboard();
  //this will be added later

  componentWillMount() {
    // this.fillUpCompany();
      this.fillUpDrivers();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const{isErrorModalVisible,modalErrorMessage,isSuccessModalVisible,
      modalSuccessMessage,successModalTitle,companyDropdown,
      isBidPressed,okButtonTitle,driverDropdown, ...stateData} = this.state;
      const validationErrors= validateInput(stateData,["rate","offererCompanyId","driverId","note"]);
        
        if(validationErrors)
        {
          // const errormessage = validationErrors.join("\n");
          // this.setState({ modalErrorMessage: errormessage });
          // this.toggleDangerModal();
    
          return;
        }


        try {
          const response = await createBid(stateData);
          console.log(response);
          const data = response.data;
          console.log(data);
          if (data.status) {
            // const modalSuccessMessage = "Successfully new driver added";
            // this.setState({modalSuccessMessage});
            // this.toggleSuccessModal();

          } else {
            // const errormessage = data.errors.join("\n");
            // this.setState({ modalErrorMessage: errormessage });
            // this.toggleDangerModal();
          }
        } catch (err) {
          // console.log(err);
          // const errormessage = "Something wrong, please try again later";
          // this.setState({ modalErrorMessage: errormessage });
          // this.toggleDangerModal();
        }
  }

  async fillUpCompany() {
    const promise = await getOwnedCompanies();
    const data = promise.data.data;
    const companies = data.companies;
    const drivers = data.drivers;

    this.allCompanies = companies;
    this.allDrivers = drivers;

    console.log("company", data);
    const tempCompany = [];

    for (let company of companies) {
      tempCompany.push(
        <option key={company.id} value={company.id}>
          {company.name}
        </option>
      );
    }

    this.setState({ companyDropdown: tempCompany });

    if (tempCompany.length > 0) {
      this.setState({ offererCompanyId: companies[0].id }, this.filterDriver);

      // const driverPromise = await getCompanyDrivers(data[0].id);
      // console.log(driverPromise);
    }
  }

  async fillUpDrivers() {
    const promise = await getCompanyDrivers();
    const data = promise.data.data;

    const tempDrivers = [];

    for (let driver of data) {
      console.log(driver.companyId);
        tempDrivers.push(
          <option key={driver.id} value={driver.id}>
            {driver.name} ({driver.license})
          </option>
        );
      
    }
    if (tempDrivers.length > 0) {
      this.setState({ driverDropdown: tempDrivers,
      driverId:tempDrivers[0].id});
    }
   

    // const driverPromise = await getCompanyDrivers(data[0].id);
    // console.log(driverPromise);
  }

  showBiddingFields() {
    if (this.state.isBidPressed) {
      return (
        <Card>
          <CardHeader>
            <strong>Load</strong>
            <small> Form</small>
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="rate">Your proposed rate</Label>
                  <Input
                    type="number"
                    id="rate"
                    placeholder="Enter you rate"
                    required
                    name="rate"
                    value={this.state.rate}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="offererCompanyId">Select Company</Label>
                  <Input
                    type="select"
                    name="offererCompanyId"
                    id="offererCompanyId"
                    value={this.state.offererCompanyId}
                    onChange={()=>{this.handleChange();}}
                  >
                    {this.state.companyDropdown}
                  </Input>
                </FormGroup>
              </Col>
            </Row> */}
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="driverId">Select Driver</Label>
                  <Input
                    type="select"
                    name="driverId"
                    id="driverId"
                    value={this.state.offererCompanyId}
                    onChange={this.handleChange}
                  >
                    {this.state.driverDropdown}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="note">
                    Enter additional note (optional)
                  </Label>
                  <Input
                    type="textarea"
                    id="note"
                    placeholder="Enter additional note (optional)"
                    required
                    name="note"
                    value={this.state.note}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      );
    }
    return "";
  }

  render() {
    const load = this.props.loadDetails;
    return (
      <Modal
        isOpen={this.props.isVisible}
        toggle={this.toggleSuccess}
        className={"modal-lg " + this.props.className}
      >
        <ModalHeader toggle={this.toggleSuccess}>{load.name}</ModalHeader>
        <ModalBody>
          <pre>
            Product : {load.productDetails}
            <br />
            Weight : {load.weight} lb
            <br />
            Distance :{load.distance} Miles
            <br />
            Minimunm bid Rate : ${load.rate}
            <br />
            <br />
            Pick Up State : {load.pickUpState}
            <br />
            Pick Up City : {load.pickUpCity}
            <br />
            Pick Up Date : {load.pickUpDate}
            <br />
            <br />
            Drop Off State : {load.dropOffState}
            <br />
            Drop Off City : {load.dropOffCity}
            <br />
            Drop Off Date : {load.dropOffDate}
            <br />
          </pre>
          <br />
          {this.showBiddingFields()}
        </ModalBody>
        <ModalFooter>
          <Button
            color="btn btn-danger"
            onClick={() => {
              this.props.toggleModal();
              this.setState({
                isBidPressed: false,
                okButtonTitle: "Bid on this load"
              });
            }}
          >
            Close
          </Button>
          <Button
            color="success"
            onClick={(e) => {
              //this.props.toggleModal();
              if(this.state.isBidPressed)
              {
                this.handleSubmit(e);
              }
              this.setState({
                isBidPressed: true,
                okButtonTitle: "Confirm Bid"
              });
            }}
          >
            {this.state.okButtonTitle}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
