import React, { Component } from "react";
// import ReactDom from 'react-dom';
import Axios from "axios";
import { Form, Icon, Input, Button, Checkbox } from "antd";

const FormItem = Form.Item;

class FormContent extends Component {
  constructor(props) {
    super(props);
    this.submit.bind(this);
    this.state = {
      form: {
        userName: "",
        password: ""
      }
    };
  }
  submit(e) {
    // this.props.form.validateFields((err, values) => {
    //     if (!err) {
    console.log("Received values of form: ", this);
    //     }
    //   });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form>
        <FormItem
          label="用户名"
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem label="密码" labelCol={{ span: 3 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.submit}>
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}
const MyForm = Form.create()(FormContent);
export default MyForm;
