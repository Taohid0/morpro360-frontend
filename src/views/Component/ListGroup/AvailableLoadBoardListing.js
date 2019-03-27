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

export default class AvailableLoadBoardListing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
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
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      Load Board name 1 (Broker: Mr. XYZ)
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      <div class="">
                        <div class="row">
                          <div class="col-sm"><span><b>From : Miami</b></span></div>
                          <div class="col-sm"><span><b>To : California</b></span></div>
                          <div class="col-sm"><span><b>Distance : 500 Miles</b></span></div>
                          <div class="col-sm"><span><b>Weight : 100 lb</b></span></div>
                          <div class="col-sm"><span><b>Lowest bidding rate : $1000</b></span></div>
                          <div className="col-sm"><Button className="btn btn-info">See Details</Button></div>
                        </div>
                      </div>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      Load Board name 2 (Broker: Mr. XYZ)
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      <div class="">
                        <div class="row">
                          <div class="col-sm"><span><b>From : Miami</b></span></div>
                          <div class="col-sm"><span><b>To : California</b></span></div>
                          <div class="col-sm"><span><b>Distance : 500 Miles</b></span></div>
                          <div class="col-sm"><span><b>Weight : 100 lb</b></span></div>
                          <div class="col-sm"><span><b>Lowest bidding rate : $1000</b></span></div>
                          <div className="col-sm"><Button className="btn btn-info">See Details</Button></div>
                        </div>
                      </div>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      Load Board name 3(Broker: Mr. XYZ)
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      <div class="">
                        <div class="row">
                          <div class="col-sm"><span><b>From : Miami</b></span></div>
                          <div class="col-sm"><span><b>To : California</b></span></div>
                          <div class="col-sm"><span><b>Distance : 500 Miles</b></span></div>
                          <div class="col-sm"><span><b>Weight : 100 lb</b></span></div>
                          <div class="col-sm"><span><b>Lowest bidding rate : $1000</b></span></div>
                          <div className="col-sm"><Button className="btn btn-info">See Details</Button></div>
                        </div>
                      </div>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
