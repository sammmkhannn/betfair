import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="My market" icon={<AiOutlineStar />}>
                        <PerfectScrollbar className='sajid'>
                            <MenuItem>American Football</MenuItem>
                            <MenuItem>Australian</MenuItem>
                            <MenuItem>Baseball</MenuItem>
                            <MenuItem>Basketball</MenuItem>
                            <MenuItem>Boxing</MenuItem>
                            <MenuItem>Cricket</MenuItem>
                            <MenuItem>Cycling</MenuItem>
                            <MenuItem>Darts</MenuItem>
                            <MenuItem>Football</MenuItem>
                            <MenuItem>Gaelic Game</MenuItem>
                            <MenuItem>Golf</MenuItem>
                            <MenuItem>Greyhound Racing</MenuItem>
                            <MenuItem>Greuhounds-Today's Card</MenuItem>
                            <MenuItem>handball</MenuItem>
                            <MenuItem>Horse Racing</MenuItem>
                            <MenuItem>Horse Racing-Today's Card</MenuItem>
                            <MenuItem>Ice Hockey</MenuItem>
                            <MenuItem>Mixed Martial Arts</MenuItem>
                            <MenuItem>Motor Sport</MenuItem>
                            <MenuItem>Politics</MenuItem>
                            <MenuItem>Rugby League</MenuItem>
                            <MenuItem>Snooker</MenuItem>
                            <MenuItem>Special Bets</MenuItem>
                            <MenuItem>Tennis</MenuItem>
                            <MenuItem>Volleyball</MenuItem>
                            <MenuItem>Winter Sports</MenuItem>
                        </PerfectScrollbar>
                    </SubMenu>
                </Menu>
            </ProSidebar>;
        </div>
    )
}

export default Sidebar
