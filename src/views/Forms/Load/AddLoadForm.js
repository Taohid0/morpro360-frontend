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
            <Col  col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="name">Load Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name of Load"
                  required
                />
              </FormGroup>
            </Col>
            <Col  col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="company">Select Company</Label>
                <Input type="select" name="company" id="company">
                  <option>My First Company</option>
                  <option>My Second Company</option>
                  <option>My Third Company</option>
                </Input>
              </FormGroup>
            </Col>
            <Col  col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input type="text" id="phone" placeholder="Phone" required />
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
                />
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
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              {/* <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="loadNumber">Load Number</Label>
                <Input
                  type="text"
                  id="loadNumber"
                  placeholder="Enter load number"
                  required
                />
              </FormGroup>
            </Col> */}
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
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <FormGroup>
                <Label htmlFor="budget">Budget</Label>
                <Input
                  type="number"
                  id="budget"
                  placeholder="Enter your budget"
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
                />
              </FormGroup>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0" />
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
