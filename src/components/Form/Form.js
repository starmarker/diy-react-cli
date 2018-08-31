import React, { Component } from "react";
// import ReactDom from 'react-dom';
// import Axios from "axios";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "../../assets/css/test.css";
const FormItem = Form.Item;

class NormalLoginForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.submit.bind(this);
  //   this.state = {
  //     form: {
  //       userName: "",
  //       password: ""
  //     }
  //   };
  // }
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

// class NormalLoginForm extends React.Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <FormItem>
//           {getFieldDecorator('userName', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(
//             <Checkbox>Remember me</Checkbox>
//           )}
//           <a className="login-form-forgot" href="">Forgot password</a>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </FormItem>
//       </Form>
//     );
//   }
// }

const MyForm = Form.create()(NormalLoginForm);
// const MyForm = Form.create()(FormContent);
export default MyForm;
