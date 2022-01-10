import React from 'react'
import {BiPlusMedical} from 'react-icons/bi'
import './Footer.css'
const Footer = () => {
    return (
        <div className='FooterContainer'>
            <p> <b>Warning: </b> Although the current score, time elapsed, video and other data provided on this site is sourced from "live" feeds provided by third parties, you should be aware that this data may be subject to a time delay and/or be inaccurate.  Please also be aware that other Betfair customers may have access to data that is faster and/or more accurate than the data shown on the Betfair site. If you rely on this data to place bets, you do so entirely at your own risk. Betfair provides this data AS IS with no warranty as to the accuracy, completeness or timeliness of such data and accepts no responsibility for any loss (direct or indirect) suffered by you as a result of your reliance on it.</p>
            <div className='FooterData'>
                <ul>
                    <li>Safer Gambling  <BiPlusMedical style={{margin: "4px"}}/></li>
                    <li>About Betfair  <BiPlusMedical style={{margin: "4px"}} /> </li>
                    <li> Privacy Policy</li>
                    <li> Cookies</li>
                   
                    <li > Help</li>
                    <li> Rule & Regulations</li>
                    <li> Terms & conditions </li>
                    <li> Developers</li>
                    
                </ul>

            </div>
        </div>
    )
}

export default Footer
