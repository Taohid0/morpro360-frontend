import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  TabContent,
  TabPane,
  Input,
  
} from "reactstrap";

import { allLoadAdmin, loadDetails } from "../../../ApiCalls/load";
import UserService from "../../../services/User";
import validateInput from "../../../validation/input";

import { getOwnedCompanies } from "../../../ApiCalls/company";
import DangerModal from "../../CustomModals/DangerModal";
import SuccessModal from "../../CustomModals/SuccessModal";
import LoadDetailsModal from "../../CustomModals/LoadDetailsModal";

export default class AvailableLoadBoardListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loads: [],
      status:"A",
      isErrorModalVisible: false,
      modalErrorMessage: "",
      isSuccessModalVisible: false,
      successModalTitle: "Sucessful",
      modalSuccessMessage: "",
      isLoadDetailsModalVisible: false,
      loadDetails: {},
      companyDropdown: [],
      loadId: ""
    };
    this.getLoads = this.getLoads.bind(this);
    this.userService = new UserService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDangerModal = this.toggleDangerModal.bind(this);
    this.toggleSuccessModal = this.toggleSuccessModal.bind(this);
    this.toggleLoadDetaildModal = this.toggleLoadDetaildModal.bind(this);
    this.getLoadDetails = this.getLoadDetails.bind(this);
    this.getLoadDetails = this.getLoadDetails.bind(this);
    this.loadUserOrRedirect = this.loadUserOrRedirect.bind(this);
  }
  componentWillMount() {
    this.getLoads();
    this.loadUserOrRedirect();
  }
  async getLoadDetails(id) {
    const promise = await loadDetails(id);
    const data = promise.data.data;
    this.setState({ loadDetails: data });
  }

  async loadUserOrRedirect() {
    const user = await this.userService.getUser();

    if (!user) {
      this.props.history.push("/login");
    }
  }

  async getLoads() {
    const promise = await allLoadAdmin(this.state.status);
    console.log(promise);
    if (!promise.data.status) {
      alert(promise.data.errors);
      return;
    }
    const data = promise.data.data;
    console.log(data);
    const tempLoads = [];
    for (let load of data) {
      tempLoads.push(load);
    }
    console.log(tempLoads);
    this.setState({ loads: tempLoads });
  }

  toggleDangerModal() {
    this.setState((state, props) => ({
      isErrorModalVisible: !state.isErrorModalVisible
    }));
  }
  toggleLoadDetaildModal() {
    this.setState((state, props) => ({
      isLoadDetailsModalVisible: !state.isLoadDetailsModalVisible
    }));
  }
  toggleSuccessModal() {
    this.setState((state, props) => ({
      isSuccessModalVisible: !state.isSuccessModalVisible
    }));
  }
  assignLoadId(id) {}

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="animated fadeIn">
        {/* <LoadDetailsModal
          loadId={this.state.loadId}
          isVisible={this.state.isLoadDetailsModalVisible}
          errors={this.state.loadDetailsInfo}
          toggleModal={this.toggleLoadDetaildModal}
          //title = {this.state.successModalTitle}
          loadDetails={this.state.loadDetails}
          reloadAvailableLoads={this.getLoads}
          goToDashboard={() => this.props.history.push("/dashboard")}
        /> */}
      
        <div className="row">
          <div className="col-2">
            <h3>Search by status : </h3>
          </div>
          <div className="col-2">
          <Input
                type="select"
                name="status"
                id="status"
                value={this.state.status}
                onChange={this.handleChange}
              >
              <option key="A" value="A">Available</option>
              <option key="P" value="P">Picked Up</option>
              <option key="I" value="I">Inroute</option>
              <option key="D" value="D">Delivered</option>
            </Input>
          </div>
          <div className="col-2">
            <button className="btn btn-info" onClick={this.getLoads}>Search</button>
          </div>
        </div>
        <br/>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Load Boards</strong>
                {/* <small> custom content</small> */}
              </CardHeader>
              <CardBody>
                <ListGroup>
                  {this.state.loads.map(load => {
                    return (
                      <ListGroupItem action key={load.id}>
                        <ListGroupItemHeading>{load.name}</ListGroupItemHeading>
                        <ListGroupItemText className="row">
                          {/* <div class="">
                        <div class="row"> */}
                          <b className="col-sm">
                            From : {load.pickUpCity}, {load.pickUpState}
                          </b>
                          <b className="col-sm">
                            To: {load.dropOffCity}, {load.dropOffState}
                          </b>
                          <b className="col-sm">Distance : {load.distance}</b>
                          <b className="col-sm">Weight : {load.weight}</b>
                          <b className="col-sm">Minimum Rate : {load.rate}</b>
                          <Button
                            className="col-sm btn btn-info"
                            onClick={() => {
                              this.toggleLoadDetaildModal();
                              this.getLoadDetails(load.id);
                              this.setState({ loadId: load.id });
                            }}
                          >
                            See Details
                          </Button>
                        </ListGroupItemText>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
