import React from 'react'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillYoutube } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'

import Flag from 'react-world-flags'

import './MainPortion.css'
import TableData from '../Table/TableData'
import GamesTable from '../GamesTable/GamesTable'
import Footer from '../Footer/Footer'
const MainPortion = () => {
    return (
        <div className='MainContainer'>
            <Container fluid  >

                <div className='MainBody'>
                    <div className='ImagesDiv '>

                        <div className='ThreeImg'>
                            <div className='imagesBody'>
                                <img src={img1} alt="image1" />
                                <div className='imgText'>
                                    <span className='ImgHeading' ><p>Explore the great selection  </p>   </span>
                                    <span className='ImgPara'>    <p>New game every week</p>  </span>
                                    <div className='NavLinkss'>
                                        <p href="Prize pinball"> Prize Pinball</p>
                                        <p href="Prize pinball">New on Betfair</p>
                                        <p href="Prize pinball">Try out our Game Show</p>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='ThreeImg'>
                            <div className='imagesBody'>
                                <img src={img2} alt="image2" />
                                <div className='imgText'>
                                    <span className='ImgHeading' ><p>Betting.betfair</p>   </span>
                                    <span className='ImgPara'>    <p> Insights the betting tips</p>  </span>
                                    <div className='NavLinkss'>
                                        <p href="Prize pinball"> Daily article and tips</p>
                                        <p href="Prize pinball">Get the latest on Football</p>
                                        <p href="Prize pinball">Get the latest on Tennis</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='ThreeImg'>
                            <div className='imagesBody'>
                                <img src={img3} alt="image3" />
                                <div className='imgText'>
                                    <span className='ImgHeading' ><p>Beat the Drop</p>   </span>
                                    <span className='ImgPara'> <p> Chance of winning € 1,000 daily</p>  </span>
                                    <div className='NavLinkss'>
                                        <p href="Prize pinball"> Play Beat the Drop for free</p>
                                        <p href="Prize pinball">One free token per day</p>
                                        <p href="Prize pinball">Terms and conditions apply</p>
                                    </div>

                                </div>


                            </div>
                        </div>





                    </div>



                </div>
                {/* -------------------------- Next RacesPRocess -------------------- */}
                <div className='NextRaces'>
                    <div className='NEXTCONTENT'>
                        <h6> Next Races</h6>
                        <div className='TWOBUTTONS'>
                            <button style={{ background: "white" }}>GB & Ireland</button>
                            <button>All Races</button>
                        </div>
                    </div>

                    <div className='RacePart2'>
                        <div className='part1'>
                            <div className="left">
                                <div className="flag">
                                    <p><Flag code="pk" height="13" /></p>
                                </div>
                                <div className="content">
                                    <p>15:50 Lingfield</p>
                                    <p>€ 355,435 <AiFillYoutube /> </p>
                                </div>
                            </div>
                            <div className="right">
                                <p>Starting in <IoIosArrowForward /> </p>
                            </div>
                        </div>
                        <div className='part2'>
                            <div className="left">
                                <div className="flag">
                                    <p><Flag code="pk" height="13" /></p>
                                </div>
                                <div className="content">
                                    <p>16:15 Dundalk</p>
                                    <p>€ 12,651  <AiFillYoutube /></p>
                                </div>
                            </div>
                            <div className="right">
                                    <p>Starting in  <IoIosArrowForward />  </p>
                            </div>

                        </div>
                    </div>


                    {/* ------------------------ TableData Portion ------------------------------------- */}
                    <TableData/>

                    {/* ------------------------------------  Games table -------------------- */}
                        <GamesTable/>

                    {/* ----------------------------- Footer ------------------------------------------ */}
                    <Footer />
                </div>
            </Container>

        </div>
    )
}

export default MainPortion
