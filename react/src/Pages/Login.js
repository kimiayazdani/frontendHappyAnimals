import React, { Component } from "react";
import axios from "axios"; 
import {Logger, ConsoleLogger} from 'react-console-logger';
import SideMenu from './../Components/SideMenu';
import { Redirect } from 'react-router';

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import "./Login.css";

class Login extends Component {

  state = {
    user:"",
    pass:"",
    logged_in: 0,
    error_message: "",
  };
  handleInput = (e) => { 
        console.log("something")
        this.setState({ 
            [e.target.name]: e.target.value, 
        }); 
  }; 
  handleSubmit = (e) => { 
      e.preventDefault(); 

      axios 
          .post("http://localhost:8000/api/v1/account/login", { 
              user: this.state.user, 
              pass: this.state.pass, 
          }) 
          .then((res) => { 
              this.setState({ 
                  user: "", 
                  pass: "", 
                  logged_in: res.data.logged_in,
                  error_message: res.data.error,
              }); 

          }) 
          .catch((err) => {}); 
  }; 
  render() {
    return (
      <div className="App">
      

        <SideMenu redirectto={2} namepage={'Login'}/>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <img src="/static/images/HappyAnimals.png" alt="logo" className="image" />{" "}
              به حساب کاربری خود وارد شوید.
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="آدرس ایمیل"
                  name = "user"
                  value={this.state.user}
                  onChange = {this.handleInput}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="پسورد"
                  type="password"
                  name = "pass"
                  value = {this.state.pass}
                  onChange = {this.handleInput}
                />
                <Button type="submit" color="teal" fluid size="large">
                  وارد شوید
                </Button>
                {this.state.logged_in === 1 && <Redirect to="/Posts" />}
              </Segment>
            </Form>
            <Message>
              جدیدید؟ <a href="/SignUp">به ما بپیوندید</a>

            </Message>
            <p> logged_in: {this.state.logged_in === 0 ? "NOT LOGGED IN" : "LOGGED IN"} </p>
            <p> error message: {this.state.error_message} </p>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;

