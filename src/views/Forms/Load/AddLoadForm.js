import React, { Component } from "react";
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
  Row
} from "reactstrap";

export default class AddLoadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isErrorModalVisible: false,
      modalErrorMessage: "",
      isSuccessfulModalVisible: false,
      modalSuccessMessage: "",
      name: "",
      pickUpTime: "",
      dropOffTime: "",
      weight: "",
      rate: "",
      productDetails: "",
      pickUpAddress: "",
      pickUpCity: "",
      dropOffAddress: "",
      dropOffCity: "",
      dropOffZipCode: "",
      dropOffState: "",
      distance: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <strong>Load</strong>
          <small> Form</small>
        </CardHeader>
        <CardBody>
          <Row>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="name">Load Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name of Load"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="company">Select Company</Label>
                <Input type="select" name="company" id="company">
                  {/* name value onChange need to be updated */}
                  <option>My First Company</option>
                  <option>My Second Company</option>
                  <option>My Third Company</option>
                </Input>
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="weight">weight</Label>
                <Input
                  type="text"
                  id="weight"
                  placeholder="Weight of Load"
                  required
                  name="weight"
                  value={this.state.weight}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            {" "}
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="productDetails">Product Details</Label>
                <Input
                  type="textarea"
                  id="productDetails"
                  placeholder="Enter product information"
                  required
                  name="productDetails"
                  value={this.state.productDetails}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="distance">Distance</Label>
                <Input
                  type="number"
                  id="distance"
                  placeholder="Enter distance"
                  name="distance"
                  value={this.state.distance}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="rate">Rate</Label>
                <Input
                  type="number"
                  id="rate"
                  placeholder="Enter your rate"
                  name="rate"
                  value={this.state.rate}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="pickUpState">Pick Up State</Label>
                <Input
                  type="text"
                  id="pickUpState"
                  placeholder="Enter pick up state"
                  name="pickUpState"
                  value={this.state.pickUpState}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="pickUpCity">Pick Up City</Label>
                <Input
                  type="text"
                  id="pickUpCity"
                  placeholder="Enter pick up City"
                  name="pickUpCity"
                  value={this.state.pickUpCity}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="pickUpZipCode">Pick Up Zip Code</Label>
                <Input
                  type="text"
                  id="pickUpZipCode"
                  placeholder="Enter pick up Zip Code"
                  name="pickUpZipCode"
                  value={this.state.pickUpZipCode}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="pickUpAddress">Pick Up Address</Label>
                <Input
                  type="textarea"
                  id="pickUpAddress"
                  placeholder="Enter pick up Address"
                  name="pickUpAddress"
                  value={this.state.pickUpAddress}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>

            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="pickUpDate">Pick Up Date</Label>
                <Input
                  type="date"
                  id="pickUpDate"
                  placeholder="Enter pick up Date"
                  name="pickUpDate"
                  value={this.state.pickUpDate}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup />
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="dropOffState">Drop Off State</Label>
                <Input
                  type="text"
                  id="dropOffState"
                  placeholder="Enter drop off state"
                  name="dropOffState"
                  value={this.state.dropOffState}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="dropOffCity">Drop Off City</Label>
                <Input
                  type="text"
                  id="dropOffCity"
                  placeholder="Enter drop off City"
                  name="dropOffCity"
                  value={this.state.dropOffCity}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="dropOffZipCode">dropOff Zip Code</Label>
                <Input
                  type="text"
                  id="dropOffZipCode"
                  placeholder="Enter drop off Zip Code"
                  name="dropOffZipCode"
                  value={this.state.dropOffZipCode}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="dropOffAddress">Drop Off Address</Label>
                <Input
                  type="textarea"
                  id="dropOffAddress"
                  placeholder="Enter Drop Off Address"
                  name="dropOffAddress"
                  value={this.state.dropOffAddress}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>

            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="dropOffDate">Drop Off Date</Label>
                <Input
                  type="date"
                  id="dropOffDate"
                  placeholder="Enter Drop Off Date"
                  name="dropOffDate"
                  value={this.state.dropOffDate}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0" />
          </Row>
        </CardBody>

        <Button className="btn btn-success col-6 align-self-center">
          <i className="fa fa-dot-circle-o" /> Create Load
        </Button>
        <br />
        <br />
      </Card>
    );
  }
}
