import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './index.css'
import Header from '../Header/Header'
import MainPortion from '../MainPortion/MainPortion'
import Right from '../RightSidebar/Right'
import {Container,Row,Col} from 'react-bootstrap'
const index = () => {
    return (
        <div className='AllContainer'>
       
            <div className='row'>
                <div className='col-2'>
                    <Sidebar />
                    
                </div>

                <div className='col-7'>
                        <MainPortion />
                </div>

                <div className='col-3'>
                    <Right/>
                   
                </div>
            </div>

          


            

        </div>
    )
}

export default index
