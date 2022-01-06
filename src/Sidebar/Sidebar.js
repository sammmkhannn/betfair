import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import './Sidebar.css'
import MainPortion from '../MainPortion/MainPortion';


const Sidebar = () => {
    return (
        
        <div className='center'>

          
            <ProSidebar className="Sidebarrrr" style={{width: "100%",boxSizing:"border-box"}}>

                <Menu iconShape="square">
                    <SubMenu   title="My market" icon={<AiOutlineStar style={{marginLeft: "20px" , backgroundColor: "white"}} />} style={{fontSize : "12px"  ,height: "50px"}}>
                      <MenuItem  style={{color: "white" , }}>Sports</MenuItem>
                        <div className='Scroll'>
                            <MenuItem  class="overflow-hidden ListItems">American Football</MenuItem>
                            <MenuItem class="overflow-hidden ListItems">Australian</MenuItem>
                            <MenuItem class="overflow-hidden ListItems">Baseball</MenuItem>
                            <MenuItem class="overflow-hidden">Basketball</MenuItem>
                            <MenuItem class="overflow-hidden">Boxing</MenuItem>
                            <MenuItem class="overflow-hidden">Cricket</MenuItem>
                            <MenuItem class="overflow-hidden">Cycling</MenuItem>
                            <MenuItem class="overflow-hidden">Darts</MenuItem>
                            <MenuItem class="overflow-hidden">Football</MenuItem>
                            <MenuItem class="overflow-hidden">Gaelic Game</MenuItem>
                            <MenuItem class="overflow-hidden">Golf</MenuItem>
                            <MenuItem class="overflow-hidden">Greyhound Racing</MenuItem>
                            <MenuItem class="overflow-hidden">Greuhounds-Today's Card</MenuItem>
                            <MenuItem class="overflow-hidden">handball</MenuItem>
                            <MenuItem class="overflow-hidden">Horse Racing</MenuItem>
                            <MenuItem class="overflow-hidden">Horse Racing-Today's Card</MenuItem>
                            <MenuItem class="overflow-hidden">Ice Hockey</MenuItem>
                            <MenuItem class="overflow-hidden">Mixed Martial Arts</MenuItem>
                            <MenuItem class="overflow-hidden">Motor Sport</MenuItem>
                            <MenuItem class="overflow-hidden">Politics</MenuItem>
                            <MenuItem class="overflow-hidden">Rugby League</MenuItem>
                            <MenuItem class="overflow-hidden">Snooker</MenuItem>
                            <MenuItem class="overflow-hidden">Special Bets</MenuItem>
                            <MenuItem class="overflow-hidden">Tennis</MenuItem>
                            <MenuItem class="overflow-hidden">Volleyball</MenuItem>
                            <MenuItem class="overflow-hidden">Winter Sports</MenuItem>
                        </div>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    
    )
}

export default Sidebar
