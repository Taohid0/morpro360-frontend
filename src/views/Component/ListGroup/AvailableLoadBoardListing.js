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
  TabPane
} from "reactstrap";

import { availableLoad, loadDetails } from "../../../ApiCalls/load";
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
    this.getAvailableLoad = this.getAvailableLoad.bind(this);
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
    this.getAvailableLoad();
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

  async getAvailableLoad() {
    const promise = await availableLoad();
    const data = promise.data.data;
    const tempLoads = [];
    for (let load of data) {
      tempLoads.push(load);
    }
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
        <LoadDetailsModal
          loadId={this.state.loadId}
          isVisible={this.state.isLoadDetailsModalVisible}
          errors={this.state.loadDetailsInfo}
          toggleModal={this.toggleLoadDetaildModal}
          //title = {this.state.successModalTitle}
          loadDetails={this.state.loadDetails}
          reloadAvailableLoads={this.getAvailableLoad}
          goToDashboard={() => this.props.history.push("/dashboard")}
        />
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Available Load Boards</strong>
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
