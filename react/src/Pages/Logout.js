import React, { Component } from "react";
import axios from "axios"; 
import {Logger, ConsoleLogger} from 'react-console-logger';
import SideMenu from './../Components/SideMenu';
import './Notfound.css'

export default class Logout extends Component {
	render() {
		return (
			<div className="App">
			<SideMenu redirectto={1} namepage={'Logout'}/>
			<h1 className='notfound'> 404 Logout Not Found </h1>
			</div>
		)
	}
}