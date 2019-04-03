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

import { getPendingUsers } from "../../../ApiCalls/user";
import UserService from "../../../services/User";
import validateInput from "../../../validation/input";

import { getOwnedCompanies } from "../../../ApiCalls/company";
import DangerModal from "../../CustomModals/DangerModal";
import SuccessModal from "../../CustomModals/SuccessModal";
import UserDetailsModal from "../../CustomModals/UserDetailsModal";

export default class PendingUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isErrorModalVisible: false,
      modalErrorMessage: "",
      isSuccessModalVisible: false,
      successModalTitle: "Sucessful",
      modalSuccessMessage: "",
      isLoadDetailsModalVisible: false,
      userDetails: {},
      userId: "",
      user:{},
    };

    this.userService = new UserService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDangerModal = this.toggleDangerModal.bind(this);
    this.toggleSuccessModal = this.toggleSuccessModal.bind(this);
    this.toggleLoadDetaildModal = this.toggleLoadDetaildModal.bind(this);
    this.loadUserOrRedirect = this.loadUserOrRedirect.bind(this);
    this.loadPendingUsers = this.loadPendingUsers.bind(this);
  }
  componentWillMount() {
    this.loadUserOrRedirect();
    this.loadPendingUsers();
  }
  async loadPendingUsers() {
    const promise = await getPendingUsers();
    const data = promise.data.data;
    console.log(data);
    this.setState({ users: data });
  }

  async loadUserOrRedirect() {
    const user = await this.userService.getUser();

    if (!user) {
      this.props.history.push("/login");
    }
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
        <UserDetailsModal
          isVisible={this.state.isLoadDetailsModalVisible}
          errors={this.state.loadDetailsInfo}
          toggleModal={this.toggleLoadDetaildModal}
          //title = {this.state.successModalTitle}
          userDetails={this.state.user}
          reloadPendingUsers={this.loadPendingUsers}
        />
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Pending Companies</strong>
                {/* <small> custom content</small> */}
              </CardHeader>
              <CardBody>
                <ListGroup>
                  {this.state.users.map(user => {
                    return (
                      <ListGroupItem action key={user.id}>
                        <ListGroupItemHeading>{user.name}</ListGroupItemHeading>
                        <ListGroupItemText className="row">
                          {/* <div class="">
                        <div class="row"> */}
                          <b className="col-sm">
                            Phone : {user.phone}
                          </b>
                          <b className="col-sm">Email : {user.email}</b>
                          <b className="col-sm">MC# : {user.MC}</b>
                          <b className="col-sm">DOT# : {user.DOT}</b>
                          <Button
                            className="col-sm btn btn-info"
                            onClick={() => {
                              this.toggleLoadDetaildModal();
                              this.setState({ user:user });
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
