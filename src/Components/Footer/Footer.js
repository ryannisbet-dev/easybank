import React, { Component } from 'react';
import './Footer.scss'
import Logo from '../../Assets/Branding/logo-white.svg'

import Facebook from '../../Assets/Icons/icon-facebook.svg'
import YouTube from '../../Assets/Icons/icon-youtube.svg'
import Twitter from '../../Assets/Icons/icon-twitter.svg'
import Pinterest from '../../Assets/Icons/icon-pinterest.svg'
import Instagram from '../../Assets/Icons/icon-instagram.svg'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="FooterSection1">
                    <img src = {Logo} alt = "Easy Bank logo"/>

                    <div className="Socials">
                        <img src = {Facebook} alt = "Facebook Icon"/>
                        <img src = {YouTube} alt = "TouTube Icon"/>
                        <img src = {Twitter} alt = "Twitter Icon"/>
                        <img src = {Pinterest} alt = "Pinterest Icon"/>
                        <img src = {Instagram} alt = "Instagram Icon"/>
                    </div>
                </div>

                <div className="FooterSection2">
                    <table>
                        <tr>
                            <td> About Us</td>
                            <td> Careers</td>
                        </tr>

                        <tr>
                            <td> Contact</td>
                            <td> Support</td>
                        </tr>

                        <tr>
                            <td> Blog </td>
                            <td> Privacy Policy </td>
                        </tr>
                    </table>
                </div>

                <div className="FooterSection3">
                    <button> Request Invite</button>
                    <p> Website developed by <a href= "https://ryannisbet.dev"> Ryan Nisbet </a><br/>
                        Design by <a href= "https://ryannisbet.dev"> Frontend Mentor </a>
                    </p>
                </div>
            </footer>
        )
    }
}
