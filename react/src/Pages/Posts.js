import React, { Component } from "react";
import axios from "axios"; 
import {Logger, ConsoleLogger} from 'react-console-logger';
import SideMenu from './../Components/SideMenu';
import './Notfound.css';
import { Divider, Image } from 'semantic-ui-react';
import Post from './Post';

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

class Posts extends Component {

  state = {
    title: this.props.location.state.title,
    labels : this.props.location.state.labels,
    image: this.props.location.state.image,
    description: this.props.location.state.description
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
      <SideMenu redirectto={1} namepage={'Posts'}/>
      	<Post title={this.state.title} labels={this.state.labels} 
        image={this.state.image} description={this.state.description} />
      </div>
    );
  }
}

export default Posts;

