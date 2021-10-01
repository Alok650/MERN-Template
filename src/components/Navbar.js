import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from 'react-router-dom'
import '../App.css';
import axios from 'axios'

class Navigationbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
            window.location.href='/login'
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

    return (
        <>
        <nav className="flex justify-between sticky top-0 items-center h-12 text-white bg-black bg-opacity-95 shadow-sm font-sherif">
             <div className="ml-2 flex items-center flex-grow sm:flex-grow-0">
                    <img
                        src="https://bit.ly/3kKWA4T"
                        width={80}
                        height={10}
                        objectFit="contain"
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/';
                            }}
                    />
                    </div>
            <div className='flex items-center sm:w-2/3 md:w-1/3 lg:w-1/3 text-gray-600 p-2 rounded-sm bg-white h-8 '>
                <div className='flex items-center'>
                <SearchIcon className = 'hover:animate-pulse cursor-pointer '/>
                <input type="text" placeholder='Search...' className='outline-none border-none text-gray-600 p-2 rounded-sm'/>
                </div>
            </div>
            <div className='px-4 cursor-pointer md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </div>
            <div>
            {loggedIn ? (
                            <section className="navbar-section">
                                <Link to ='/dashboard' style={{ textDecoration: 'none', color: 'white' }} className="p-4">Home</Link>
                                <Link to ='/about' style={{ textDecoration: 'none', color: 'white' }} className="p-4">About</Link>
                                <Link to ='/' style={{ textDecoration: 'none', color: 'white' }} className="p-4">More</Link>
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">Logout</span></Link>
                            </section>
                        ) : (
            <div className="text-sm mb-2 pr-8 md:block hidden">
                <Link to ='/' style={{ textDecoration: 'none', color: 'white' }} className="p-4">Menu</Link>
                <Link to ='/' style={{ textDecoration: 'none', color: 'white' }} className="p-4">About</Link>
                <Link to ='/' style={{ textDecoration: 'none', color: 'white' }} className="p-4">More</Link>
                <Link to ='/login' style={{ textDecoration: 'none', color: 'white' }} className="p-4">Login</Link>
                <Link to ='/signup' style={{ textDecoration: 'none', color: 'black' }} className="inline-flex  ml-12 mt-2 bg-white border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 text-base">Sign up</Link>
            </div>
            )}
        </div>
        </nav>
        </>                        
    )
}}
export default Navigationbar;