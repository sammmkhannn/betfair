import React from 'react'
import './Right.css'
import { Container } from 'react-bootstrap'
import { IoMdFootball,IoMdBasketball } from 'react-icons/io'
import {MdOutlineSportsRugby} from 'react-icons/md'
import {HiOutlineStar} from 'react-icons/hi'
import {IoIosArrowForward} from 'react-icons/io'


const Right = () => {
    return (
        <div className='RightContainer'>
            <Container fluid>


                <div className='RightSidebar'>
                    <div className='Items'>
                        <ul className='itemsul'>
                            <li style={{ color: "white", background: "black", padding: "4px", fontWeight: "bold" }}>Quick Links</li>
                            <li className='playNow'>  <span > <span className="li31"> 31</span> <span className='inPlay'> In-play Now    </span>  </span>       <IoIosArrowForward className='Arrow'/> </li>
                            <li><span>  <IoMdFootball /> Premier League </span>  <IoIosArrowForward className='Arrow'/>  </li>
                            <li> <span> <IoMdFootball /> La Liga </span>  <IoIosArrowForward className='Arrow'/>  </li>
                            <li><span> <IoMdFootball /> Serie A </span>  <IoIosArrowForward className='Arrow'/> </li>
                            <li> <span><IoMdFootball /> Bundesliga </span>  <IoIosArrowForward className='Arrow'/> </li>
                            <li> <span> <IoMdFootball /> Ligue 1  </span> <IoIosArrowForward className='Arrow'/></li>
                            <li> <span> <IoMdBasketball/> NBA  </span> <IoIosArrowForward className='Arrow'/></li>
                            <li>  <span>  <MdOutlineSportsRugby/> NFL  </span> <IoIosArrowForward className='Arrow'/></li>
                            <li> <span> <IoMdFootball /> Beat The Drop  </span> <IoIosArrowForward className='Arrow'/></li>
                            <li> <span> <HiOutlineStar/>Lay betting calculator</span> <IoIosArrowForward className='Arrow'/> </li>
                            <li> <span> <HiOutlineStar/>  Exchange Education   </span> <IoIosArrowForward className='Arrow'/></li>
                            <li> <span><HiOutlineStar/> Safer Gambling tools  </span> <IoIosArrowForward className='Arrow'/> </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Right
