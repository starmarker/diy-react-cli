import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "../../assets/css/test.css";
const FormItem = Form.Item;

class NormalLoginForm extends Component {
  submit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.onSub(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.submit}>
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
              // autoComplete="off"
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
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const MyForm = Form.create()(NormalLoginForm);
// const MyForm = Form.create()(FormContent);
export default MyForm;
