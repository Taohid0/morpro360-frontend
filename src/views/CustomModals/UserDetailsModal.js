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
import LoadingOverlay from "react-loading-overlay";
import { activateUser } from "../../ApiCalls/user";
import validateInput from "../../validation/input";
import { createBid } from "../../ApiCalls/bid";
import { getCompanyDrivers } from "../../ApiCalls/driver";
import { timingSafeEqual } from "crypto";

import SuccessModal from "./SuccessModal";

export default class UserDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: "",
      isSuccessModalVisible: false,
      successModalTitle: "Sucessful",
      modalSuccessMessage: "",
      loading:false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSuccessModal = this.toggleSuccessModal.bind(this);
  }
  //this.props.goToDashboard();
  //this will be added later

  componentWillMount() {}
  toggleSuccessModal() {
    this.setState((state, props) => ({
      isSuccessModalVisible: !state.isSuccessModalVisible
    }));
  }

  async handleSubmit(e, id) {
    e.preventDefault();
    this.setState({loading:true});
    try {
      const response = await activateUser(id);
      console.log(response);
      const data = response.data;
      console.log(data);
      if (data.status) {
        this.props.toggleModal();
        const modalSuccessMessage = "Successfully company activated";
        this.setState({ modalSuccessMessage, rate: "", isBidPressed: false });
        // this.toggleSuccessModal();
        alert(this.state.modalSuccessMessage);
        this.props.reloadPendingUsers();
      } else {
        const errormessage = data.errors.join("\n");
        this.setState({ errors: errormessage });
      }
    } catch (err) {
      console.log(err);
      const response = err.response;
      if (response && response.status === 401) {
        const errorMessage = "Session expired, please login to continue";
        alert(errorMessage);
        this.userService.clearData();
        this.props.history.push("/login");
      } else {
        const errormessage = "Something wrong, please try again later";
        this.setState({ errors: errormessage });
        this.toggleDangerModal();
      }
    }
    this.setState({loading:false});
  }

  render() {
    const user = this.props.userDetails;
    return (
      <Modal
        isOpen={this.props.isVisible}
        toggle={this.toggleSuccess}
        className={"modal-lg " + this.props.className}
      >
        {/* <SuccessModal
          isVisible={this.state.isSuccessModalVisible}
          errors={this.state.modalSuccessMessage}
          toggleModal={this.toggleSuccessModal}
          title={this.state.successModalTitle}
          goToDashboard={() => this.props.history.push("/dashboard")}
        /> */}
        <ModalHeader toggle={this.toggleSuccess}>
          Name : {user.name}
        </ModalHeader>
        <ModalBody>
        <LoadingOverlay
          active={this.state.loading}
          styles={{
            spinner: base => ({
              ...base,
              width: "250px",
              background: "rgba(0, 0, 0, 0.2)"
            })
          }}
          spinner
          text=""
        />
          <pre>
            Phone : {user.phone}
            <br />
            Email : {user.email}
            <br />
            MC# : {user.MC}
            <br />
            DOT# : {user.DOT}
            <br />
            Description : {user.description}
            <br />
          </pre>
          <br />
        </ModalBody>
        <ModalFooter>
          <Button
            color="btn btn-danger"
            onClick={() => {
              this.props.toggleModal();
            }}
          >
            Close
          </Button>
          <Button
            color="success"
            onClick={e => {
              this.handleSubmit(e, user.id);
            }}
          >
            Activate this company
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
