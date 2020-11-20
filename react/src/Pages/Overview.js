import React, { Component } from "react";
import axios from "axios"; 
import {Logger, ConsoleLogger} from 'react-console-logger';
import SideMenu from './../Components/SideMenu';
import './Notfound.css';
import { Divider, Image } from 'semantic-ui-react'
import { Redirect } from 'react-router';

import "semantic-ui-css/semantic.min.css";
import Post from './Post'

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import "./Posts.css";

class overview extends Component {


  state = {
    list: [{
    title:"واگذاری سگ هاسکی",
    labels : ["سگ","نر","هاسکی"],
    image:"/static/images/wolf.jpg",
    description:"کاملا آموزش دیدست و جای دست‌شوییشو بلده، خیلی مهربونه و به محبت نیاز داره خیلی شیطونه و\n" +
        "                              همش بپر بپر میکنه اما بچه‌ی مودبیه و وقتی خونه نیستیم پارس نمیکنه. به همراه قلاده و پت\n" +
        "                              کریر و اسباب بازی‌های مورد علاقش واگذار میشه",
      },
      {
        title:"گربه‌ی پرشین",
    labels : ["گربه","ماده","پرشین"],
    image:"./../static/images/HappyAnimals.png",
    description:"کاملا آموزش دیدست و جای دست‌شوییشو بلده، خیلی مهربونه و به محبت نیاز داره خیلی شیطونه و\n" +
        "                              همش بپر بپر میکنه اما بچه‌ی مودبیه و وقتی خونه نیستیم پارس نمیکنه. به همراه قلاده و پت\n" +
        "                              کریر و اسباب بازی‌های مورد علاقش واگذار میشه",
      }],
      redirect: false,
      topass: 0,

  };


        redirectHandler = (i) => {
            this.setState({ redirect: true })
            this.setState({ topass: i.target.value})
            this.renderRedirect();
        }
        renderRedirect = () => {
            if (this.state.redirect) {
                return <Redirect to={{
                  pathname: "/Post",
                  state: {
                    title: this.state.list[this.state.topass].title,
                    labels: this.state.list[this.state.topass].labels,
                    image: this.state.list[this.state.topass].image,
                    description: this.state.list[this.state.topass].description,
                  }
                }} />
            }
        }

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
    var indents = [];
  for (var i = 0; i < this.state.list.length; i++) {
      indents.push(<div> 
        <Grid.Row>
        <Post hideit={1} title={this.state.list[i].title} labels={this.state.list[i].labels} 
        image={this.state.list[i].image} description={this.state.list[i].description} />
        <Button class="ui button" color="teal" value={i} fluid size="small" onClick={value => this.redirectHandler(value)}> مشاهده‌ی پست
         </Button>
         {this.renderRedirect()}
        </Grid.Row>
         </div>);
  }
    return (
      <div className="App">
      <SideMenu redirectto={1} namepage={'Posts'}/>
       <Grid textAlign="center" verticalAlign="top">
          <Grid.Column style={{ maxWidth: 700 }}>
        {indents}
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default overview;
