import React, { Component } from "react";
import axios from "axios"; 
import {Logger, ConsoleLogger} from 'react-console-logger';
import SideMenu from './../Components/SideMenu';

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import "./SignUp.css";

class SignUp extends Component {

  state = {
    user:"",
    pass:"",
    number:"",
    name:"",
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
          .post("http://localhost:8000/api/v1/account/register/", { 
              user: this.state.user, 
              pass: this.state.pass, 
              name: this.state.name,
              number: this.state.number,
          }) 
          .then((res) => { 
              this.setState({ 
                  user: "", 
                  pass: "", 
                  name: "",
                  number: "",
              }); 
          }) 
          .catch((err) => {}); 
  }; 
  render() {
    return (
      <div className="test">
      <SideMenu redirectto={3} namepage={'Register'}/>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <img src="/static/images/HappyAnimals.png" alt="logo" className="image" />{" "}
              اکانت جدید بسازید
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="address book"
                  iconPosition="left"
                  placeholder="نام و نام خانوادگی"
                  name = "name"
                  value={this.state.name}
                  onChange = {this.handleInput}
                />
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
                  icon="phone"
                  iconPosition="left"
                  placeholder="شماره تماس"
                  name = "number"
                  value={this.state.number}
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
                  اکانت خود را بسازید
                </Button>
              </Segment>
            </Form>
            <Message>
              اکانت دارید؟ <a href="/">وارد شوید</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignUp;
