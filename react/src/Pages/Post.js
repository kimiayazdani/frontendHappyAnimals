import React, { Component } from "react";
import axios from "axios"; 
import {Logger, ConsoleLogger} from 'react-console-logger';
import SideMenu from './../Components/SideMenu';
import './Notfound.css';
import { Divider, Image } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import "./Posts.css";

class Post extends Component {




  state = {
    title: this.props.title,
    labels : this.props.labels,
    image:this.props.image,
    description:this.props.description,
  };

  handleSubmit = (e) => { 
      e.preventDefault(); 

      axios 
          .post("http://localhost:8000/api/v1/post/overview", {
              title: this.state.title,
              image: this.state.image,
              labels: this.state.labels,
              description: this.state.description,
          })
          .then((res) => { 
              this.setState({ 
                  title: "",
                  image: "",
                  labels: "",
                  description: "",
              });
          }) 
          .catch((err) => {}); 
  }; 
  render() {
    return (
      <div className="App">
       <Grid textAlign="center" verticalAlign="top">
          <Grid.Column style={{ maxWidth: 700 }}>
            <Form size="large">
              <Segment>
                  <div>
                      <div className="header" > { this.state.title }</div>
                      <Image src={ this.state.image } className={"ui small circular image centered"} />{""}
                      <div>
                          <a className="ui blue image label">{ this.state.labels[0] }</a>
                          <a className="ui teal image label">{ this.state.labels[1] }</a>
                          <a className="ui yellow image label">{ this.state.labels[2] }</a></div>
                      {this.props.hideit !== 1 &&
                      <div className="ui aligned container">
                          <p>{ this.state.description }</p>

                      </div>
                    }
                      {this.props.hideit !== 1 &&
                      <div className="ui compact menu horizental labeled icon center" >
                          <a className="item"><i className="like icon"></i> پسندیدم </a>
                          <a className="item"> <i className="add icon"></i> تحت نظر </a>
                          <a className="item"> <i className="user circle icon"></i>مشاهده کاربر </a>
                      </div>
                    }
                    

                  </div>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Post;

