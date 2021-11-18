import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../css/login-style.css';


class LoginPage extends Component {


    

onFinish =(value)=> {
    console.log('Received values of form: ', value);
    const url =  "https://vcentry.herokuapp.com/api/login"
    axios.post(url,value)
.then((response)=>{
    console.log(response)
    this.props.history.push("/home")
})
.catch((error) => {
    console.log(error)
})
    
}
    render() {
        
        
        return (
            <div className="align">
                <h1>Login Page</h1>
                <div className="align-form">
                <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
    >
      <Form.Item
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email IDS!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
                </div>
               <div> <NavLink to="/Signup">go to signup page</NavLink></div>
               
            </div>
        );
    }
}
  

export default LoginPage ;