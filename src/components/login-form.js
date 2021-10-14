 import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import login from '../images/login.gif'
class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
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
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                alert('Incorrect login credentials. Please try again')
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className = "bg-gray-50 grid place-items-center h-screen w-screen">
                    <div className = "text-center p-12 bg-white shadow-lg rounded text-black">
                    <h4>Application Login</h4>
                    <img src ={login} className = "ml-6" height = "150px" width = "210px" alt = 'webmeet'/>
                    <form className="flex flex-col ">
                        <div className="form-group">
                            <div className="col-3 col-mr-auto">
                                <input className="px-10 py-2 border border-gray-300 rounded text-center	"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-3 col-mr-auto">
                                <input className="px-10 py-2 border border-gray-300 rounded text-center	"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="mt-2 bg-gray-100 py-2 px-16 pointer hover:bg-gray-200"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                    </div>
                </div>
            )
        }
    }
}

export default LoginForm
