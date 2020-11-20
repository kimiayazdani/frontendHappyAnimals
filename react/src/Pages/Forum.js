import React, { Component } from "react";
import axios from "axios"; 
import {Logger, ConsoleLogger} from 'react-console-logger';
import SideMenu from './../Components/SideMenu';
import './Notfound.css';

export default class Forum extends Component {
	render() {
		return (
			<div className="App">
			<SideMenu redirectto={1} namepage={'Forum'}/>
			<h1 className="notfound"> 404 Forum Not Found </h1>
			</div>
		)
	}
}