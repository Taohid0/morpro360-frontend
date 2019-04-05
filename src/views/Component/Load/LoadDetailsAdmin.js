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
  Input
} from "reactstrap";

import {
  allLoadAdmin,
  loadDetails,
  relatedBids,
  changeLoadStatus
} from "../../../ApiCalls/load";
import { assignBid } from "../../../ApiCalls/bid";
import UserService from "../../../services/User";
import validateInput from "../../../validation/input";

import { getOwnedCompanies } from "../../../ApiCalls/company";
import DangerModal from "../../CustomModals/DangerModal";
import SuccessModal from "../../CustomModals/SuccessModal";
import LoadDetailsModal from "../../CustomModals/LoadDetailsModal";

export default class LoadDetailsAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loads: [],
      status: "",
      isErrorModalVisible: false,
      modalErrorMessage: "",
      isSuccessModalVisible: false,
      successModalTitle: "Sucessful",
      modalSuccessMessage: "",
      isLoadDetailsModalVisible: false,
      loadDetails: null,
      companyDropdown: [],
      loadId: "",
      relatedBids: []
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
    this.renderLoadDetails = this.renderLoadDetails.bind(this);
    this.renderBids = this.renderBids.bind(this);
    this.loadRelatedBids = this.loadRelatedBids.bind(this);
    this.renderChangeStatusForm = this.renderChangeStatusForm.bind(this);
    this.makeStatusChange = this.makeStatusChange.bind(this);
  }
  componentDidMount() {
    const locationState = this.props.location.state;
    if (locationState && locationState.load) {
      this.setState({
        loadDetails: locationState.load,
        status: locationState.load.status
      });
      console.log("load", locationState.load);

      this.loadRelatedBids(locationState.load.id);
    }

    this.getLoads();
    this.loadUserOrRedirect();
  }
  async getLoadDetails(id) {
    const promise = await loadDetails(id);
    const data = promise.data.data;
    this.setState({ loadDetails: data });
  }
  async loadRelatedBids(id) {
    const promise = await relatedBids(id);
    this.setState({ relatedBids: promise.data.data });
    console.log(promise.data.data);
  }

  async loadUserOrRedirect() {
    const user = await this.userService.getUser();

    if (!user) {
      this.props.history.push("/login");
    }
  }
  async makeStatusChange() {
    console.log(this.state.loadDetails.id,this.state.status);
    const promise = await changeLoadStatus(
      this.state.loadDetails.id,
      this.state.status
    );
    if (promise.data.status) {
      const modalSuccessMessage = "Successfully load board status updated";
      this.setState({ modalSuccessMessage });
      this.toggleSuccessModal();
    } else {
      const modalErrorMessage = promise.data.errors.join("\n");
      this.setState({ modalErrorMessage });
      this.toggleDangerModal();
    }
  }

  async handleSubmit(bidId, loadId, rate, name) {
    const isConfirm = window.confirm(
      "Do you really want to assign this load to " +
        name +
        " for $" +
        rate +
        " ?"
    );
    if (!isConfirm) {
      return;
    }

    const promise = await assignBid(bidId, loadId);
    console.log(promise);
    const status = promise.data.status;
    if (!status) {
      const modalErrorMessage = promise.data.errors.join("\n");
      this.setState({ modalErrorMessage });
      this.toggleDangerModal();
    } else {
      const modalSuccessMessage =
        "Successfully " + this.state.loadDetails.name + " load boad assigned";
      this.setState({ modalSuccessMessage });
      this.toggleSuccessModal();
      // this.props.history.push("/all-loads-admin");
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

  renderChangeStatusForm() {
    const view = (
      <div className="row" style={{ paddingTop: "10px" }}>
        <div className="col-md-2">
          <h3>Change status </h3>
        </div>
        <div className="col-md-2">
          <Input
            type="select"
            name="status"
            id="status"
            value={this.state.status}
            onChange={this.handleChange}
          >
            <option key="A" value="A">
              Available
            </option>
            <option key="P" value="P">
              Picked Up
            </option>
            <option key="I" value="I">
              Inroute
            </option>
            <option key="D" value="D">
              Delivered
            </option>
          </Input>
        </div>
        <div className="col-md-2">
          <button className="btn btn-info" onClick={this.makeStatusChange}>
            Submit
          </button>
        </div>
      </div>
    );
    if (this.state.loadDetails.status !== "A") {
      return view;
    }
    return "";
  }

  renderLoadDetails() {
    if (!this.state.loadDetails) {
      return "Nothing here now";
    }
    const load = this.state.loadDetails;
    const admin = load.admin;
    const role = admin.Role;

    const view = (
      <div>
        <h5>Load Name :{load.name}</h5>

        <div>Product Details : {load.productDetails}</div>
        <div className="row">
          <div className="col-md-3">Weight : {load.weight}</div>
          <div className="col-md-3">Distance : {load.distance}</div>
          <div className="col-md-3">Rate : {load.rate}</div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">Pick Up State : {load.pickUpState}</div>
          <div className="col-md-3">Pick Up City : {load.pickUpCity}</div>
          <div className="col-md-3">
            Pick Up Zip Code : {load.pickUpZipCode}
          </div>
          <div className="col-md-3">Pick Up Date : {load.pickUpDate}</div>
        </div>
        <div>Pick Up Address : {load.pickUpAddress}</div>
        <br />
        <div className="row">
          <div className="col-md-3">Drop Off State : {load.dropOffState}</div>
          <div className="col-md-3">Drop Off City : {load.dropOffCity}</div>
          <div className="col-md-3">
            Drop Off Zip Code : {load.dropOffZipCode}
          </div>
          <div className="col-md-3">Drop Off Date : {load.dropOffDate}</div>
        </div>
        <div>Drop Off Address : {load.dropOffAddress}</div>
        <br />
        <h3>This load board is added by : </h3>
        <div>
          Name : {admin.firstName} {admin.lastName} ({role.name})
        </div>
        <div>Email : {admin.email} </div>
        <div>Phone : {admin.phone}</div>

        {this.renderChangeStatusForm()}
      </div>
    );

    return view;
  }

  renderBids() {
    if (!this.state.relatedBids) {
      return "Nothing here now";
    }
    const bids = this.state.relatedBids.map(bid => {
      const view = (
        <Card key={bid.id}>
          {bid.isAssigned ? (
            <CardHeader style={{ backgroundColor: "#3a8e40" }}>
              <i className="fa fa-align-justify" />
              <strong>
                Bidder : {bid.bidder.name} (MC# : {bid.bidder.MC}, DOT#:
                {bid.bidder.DOT}) (WINNER)
              </strong>
            </CardHeader>
          ) : (
            <CardHeader>
              <i className="fa fa-align-justify" />
              <strong>
                Bidder : {bid.bidder.name} (MC# : {bid.bidder.MC}, DOT#:
                {bid.bidder.DOT})
              </strong>
            </CardHeader>
          )}

          <CardBody>
            <div key={bid.id}>
              <div className="row">
                <div className="col-md-3">Proposed rate : ${bid.rate}</div>
                <div className="col-md-3">Email : {bid.bidder.email}</div>
                <div className="col-md-3">Phone : {bid.bidder.phone}</div>
              </div>
              <div>{bid.note ? "Additional Note :" + bid.note : ""}</div>
              <h5>Driver Information</h5>
              <div className="row">
                <div className="col-md-3">Name : {bid.driver.name}</div>
                <div className="col-md-3">Phone : {bid.driver.phone}</div>
                <div className="col-md-3">Email : {bid.driver.email}</div>
                <div className="col-md-3">License : {bid.driver.license}</div>
              </div>
              <br />
              {this.state.loadDetails.status === "A" ? (
                <button
                  className="btn btn-success"
                  onClick={() =>
                    this.handleSubmit(
                      bid.id,
                      bid.loadId,
                      bid.rate,
                      bid.bidder.name
                    )
                  }
                >
                  Assign this load this bidder
                </button>
              ) : (
                ""
              )}
            </div>
          </CardBody>
        </Card>
      );
      return view;
    });
    return bids;
  }
  render() {
    return (
      <div className="animated fadeIn">
        <DangerModal
          isVisible={this.state.isErrorModalVisible}
          errors={this.state.modalErrorMessage}
          toggleModal={this.toggleDangerModal}
        />
        <SuccessModal
          isVisible={this.state.isSuccessModalVisible}
          errors={this.state.modalSuccessMessage}
          toggleModal={this.toggleSuccessModal}
          title={this.state.successModalTitle}
          goToDashboard={() => this.props.history.push("/all-loads-admin")}
        />
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Load Board Details</strong>
              </CardHeader>
              <CardBody>{this.renderLoadDetails()}</CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Bids for this load</strong>
              </CardHeader>
              <CardBody>{this.renderBids()}</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
