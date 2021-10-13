import React, { Component } from 'react'
import axios from 'axios'
import signup from '../images/signup.gif'
import {Link} from 'react-router-dom'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					window.location.href = '/face';
					// this.setState({ //redirect to login page
					// 	redirectTo: '/face'
					// })
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="bg-gray-50 grid place-items-center h-screen w-screen">
			<div className="flex flex-col p-12 bg-white shadow-lg rounded text-black">
			<h4>Sign up to access the exclusive features</h4>
			<center>
			<img src ={signup} className = "ml-6" height = "150px" width = "210px" alt = 'webmeet'/>
			</center>
			<form className="">
				<div className="form-group">
					<div className="flex items-center">
						<input className="px-10 py-2 border border-gray-300 rounded text-center"
							type="text"
							// id="name"
							// name="username"
							placeholder="Full Name"
							// value={this.state.username}
							// onChange={this.handleChange}
						/>
						<input className="ml-2 px-10 py-2 border border-gray-300 rounded text-center"
							placeholder="Email"
							// type="password"
							// name="password"
							// value={this.state.password}
							// onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="flex items-center col-3 col-mr-auto">
						<input className="px-10 py-2 border border-gray-300 rounded text-center"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<input className="ml-2 px-10 py-2 border border-gray-300 rounded text-center"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<button
						to='/face'
						className=" bg-gray-100 py-2 px-20 pointer hover:bg-gray-200"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
			</div>
		</div>

	)
}
}

export default Signup
