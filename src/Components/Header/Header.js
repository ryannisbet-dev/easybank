import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../Assets/Branding/logo.png'
import Hamburger from '../../Assets/Icons/icon-hamburger.svg'
import MobileNavigation from './Components/MobileNavigation'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="Logo">
                    <img src ={Logo} alt = "easybank logo"/>
                </div>

                <nav className="DesktopNavigation">
                    <ul>
                       <li><a>  Home </a> </li> 
                       <li><a>  About </a> </li> 
                       <li><a>  Blog </a> </li> 
                       <li><a>  Careers </a> </li> 
                       <li><a>  Contact </a> </li> 
                    </ul>
                </nav>

                <button className = "RequestInvite">
                    Request Invite
                </button>

                <nav className="MobileNavigationIcon"> 
                    <img src = {Hamburger} alt = "Hamburger menu"/>
                </nav>
            </header>
        )
    }
}
