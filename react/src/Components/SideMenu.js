import React, { Component } from "react";
import { Menu, Segment } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

import './SideMenu.css';

export default class SideMenu extends Component {
  state = { activeItem: this.props.namepage }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

  };
  render() {
    const { activeItem } = this.state;


    return (
      <div>
        <Menu pointing vertical className="menu">
        {this.props.redirectto !== 2 &&
          <div>
        <Menu.Item
          name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleOne}> 
        <a href="/"> ورود </a>
        </Menu.Item>

        <Menu.Item
          name='Register'
          active={activeItem === 'Register'}
          onClick={this.handleTwo}
        >
      
        <a href="/SignUp"> اکانت جدید</a>
        </Menu.Item>
        <Menu.Item
          name='Posts'
          active={activeItem === 'Posts'}
          onClick={this.handleTwo}
        >

        <a href="/Posts"> پست واگذاری</a>
        </Menu.Item>
        </div>
      }
        <Menu.Item
          name='Forum'
          active={activeItem === 'Forum'}
          onClick={this.handleTwo}
        >

        <a href="/Forum"> بحث</a>
        </Menu.Item>
        {this.props.redirectto !== 1 &&
        <Menu.Item
          name={this.props.redirectto === 2 ? 'hidden' : 'logout'}
          active={activeItem === 'Logout'}
          className={this.props.redirectto === 2 ? 'hidden' : ''}
        >

        <a href="/Logout" > خروج </a>
        </Menu.Item>
      }
        {false && <p> {this.props.redirectto} </p> }
      </Menu>

      </div>
    )
  }
}

        // <a href="/"> {this.props.redirectto === 2 ? 'hidden' : 'logout'}</a>