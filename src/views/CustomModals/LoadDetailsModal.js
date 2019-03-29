import React, {Component} from "react";

import {Button,Modal, ModalFooter, ModalHeader,ModalBody} from "reactstrap";


export default class LoadDetailsModal extends Component{
    constructor(props)
    {
      super(props);
      this.state = {
        okButtonTitle:"Bid on this load",
      }
    }
    //this.props.goToDashboard();
    //this will be added later
    render()
    {
      const load = this.props.loadDetails;
        return(
     <Modal
                  isOpen={this.props.isVisible}
                  toggle={this.toggleSuccess}
                  className={"modal-info " + this.props.className}
                >
                  <ModalHeader toggle={this.toggleSuccess}>
                    {load.name}
                  </ModalHeader>
                  <ModalBody>
                  <pre>
                  Product : {load.productDetails}<br/>
                  Weight : {load.weight} lb<br/>
                  Distance :{load.distance} Miles<br/>
                  Minimunm bid Rate : ${load.rate}<br/>
                  <br/>
                  Pick Up State : {load.pickUpState}<br/>
                  Pick Up City : {load.pickUpCity}<br/>
                  Pick Up Date : {load.pickUpDate}<br/>
                  <br/>
                  Drop Off State : {load.dropOffState}<br/>
                  Drop Off City : {load.dropOffCity}<br/>
                  Drop Off Date : {load.dropOffDate}<br/>
                  </pre>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="info" onClick={()=>{this.props.toggleModal();}}>
                      Close
                    </Button>
                    <Button color="success" onClick={()=>{this.props.toggleModal();}}>
                      {this.state.okButtonTitle}
                    </Button>
                  </ModalFooter>
                </Modal>
        )
    }

}
