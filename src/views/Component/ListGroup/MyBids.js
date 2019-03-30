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

import { getMyBids } from "../../../ApiCalls/bid";
import {loadDetails} from "../../../ApiCalls/load";
import UserService from "../../../services/User";
import validateInput from "../../../validation/input";

import { getOwnedCompanies } from "../../../ApiCalls/company";
import DangerModal from "../../CustomModals/DangerModal";
import SuccessModal from "../../CustomModals/SuccessModal";
import MyBidDetails from "../../CustomModals/MyBidDetails";

export default class MyBids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bids :[],
      bidDetails:{},
      isErrorModalVisible:false,
      modalErrorMessage:"",
      isSuccessModalVisible:false,
      successModalTitle:"Sucessful",
      modalSuccessMessage:"",
      isLoadDetailsModalVisible:false,
      loadDetails:{},
      companyDropdown:[],
      loadId:"",
    };
    this.getAvailableLoad = this.getAvailableLoad.bind(this);
    this.userService = new UserService();

  
    this.toggleLoadDetaildModal = this.toggleLoadDetaildModal.bind(this);
    this.getLoadDetails = this.getLoadDetails.bind(this);

  }
  componentWillMount()
  {
    this.getAvailableLoad();
  }
  async getLoadDetails(id)
  {
    const promise = await loadDetails(id);
    const data = promise.data.data;
    console.log(data);
    this.setState({loadDetails:data});
  }

  async getAvailableLoad()
  {
    const promise = await getMyBids();
    const data = promise.data.data;
    console.log(data);
    const tempbids=[];
    for (let load of data)
    {
      tempbids.push(load);
    }
    this.setState({bids:tempbids});
  }

  toggleLoadDetaildModal()
  {
    this.setState((state, props) => ({
      isLoadDetailsModalVisible: !state.isLoadDetailsModalVisible
    }));
  }
 

  handleChange(e)
  {
      this.setState({[e.target.name]:e.target.value});
  }
  async handleSubmit(e)
  {
      e.preventDefault();
  }
  render() {
    return (
      <div className="animated fadeIn">
       <MyBidDetails
          isVisible={this.state.isLoadDetailsModalVisible}
          errors={this.state.loadDetailsInfo}
          toggleModal={this.toggleLoadDetaildModal}
          //title = {this.state.successModalTitle}
          bidDetails={this.state.bidDetails}
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
                {this.state.bids.map(bid=>{
                  return (
                     <ListGroupItem action key={bid.load.id}>
                    <ListGroupItemHeading>
                      {bid.load.name}
                    </ListGroupItemHeading>
                    <ListGroupItemText className="row">
                      {/* <div class="">
                        <div class="row"> */}
                        <b  className="col-sm">From : {bid.load.pickUpCity}, {bid.load.pickUpState}</b>
                        <b  className="col-sm">To: {bid.load.dropOffCity}, {bid.load.dropOffState}</b>
                        <b  className="col-sm">Distance : {bid.load.distance}</b>
                        <b  className="col-sm">Weight : {bid.load.weight}</b>
                        <b  className="col-sm">Driver : {bid.driver.name}</b>

                        <Button className="col-sm btn btn-info" onClick={()=>{
                        this.toggleLoadDetaildModal();
                        this.setState({bidDetails:bid})}}>See Details</Button>
                    </ListGroupItemText>
                  </ListGroupItem>
                  )
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
