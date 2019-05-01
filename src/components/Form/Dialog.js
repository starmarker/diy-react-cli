import React, { Component } from "react";
import MyForm from "./Form";
import { Modal, Button } from 'antd';
import "../../assets/css/test.css";

class ModalForm extends Component {
    constructor(props){
        super(props)
    };    
    submit = values => {
        console.log(values);
      };    
    render() {
        // const { visible, confirmLoading} = this.state;
        return (
          <div>
            {/* <Button type="primary" onClick={this.showModal}>
              Open Modal with async logic
            </Button> */}
            <Modal
              title={this.props.title}
              visible={this.props.visible}
              onOk={this.props.onOk}
              confirmLoading={this.props.confirmLoading}
              onCancel={this.props.onCancel}
            >
              <MyForm onSub={this.props.onSub} />
            </Modal>
          </div>
        );
      }    
}
export {ModalForm};