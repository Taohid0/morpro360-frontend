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
        return(
     <Modal
                  isOpen={this.props.isVisible}
                  toggle={this.toggleSuccess}
                  className={"modal-info " + this.props.className}
                >
                  <ModalHeader toggle={this.toggleSuccess}>
                    {/* {this.props.title} */}
                  </ModalHeader>
                  <ModalBody>
                  {/* <pre>{this.props.errors}</pre> */}
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
