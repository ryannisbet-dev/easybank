import React, { Component } from 'react'

export default class MobileNavigation extends Component {
    render() {
        return (
            <nav className = "MobileNavigation">
                    <ul>
                       <li><a>  Home </a> </li> 
                       <li><a>  About </a> </li> 
                       <li><a>  Blog </a> </li> 
                       <li><a>  Careers </a> </li> 
                       <li><a>  Contact </a> </li> 
                    </ul>
            </nav>
        )
    }
}
