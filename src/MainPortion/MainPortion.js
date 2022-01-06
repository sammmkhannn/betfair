import React from 'react'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import { Container, Nav } from 'react-bootstrap'

import './MainPortion.css'
const MainPortion = () => {
    return (
        <div className='MainContainer'>
            <Container >

                <div className='MainBody'>
                    <div className='ImagesDiv '>

                        <div className='ThreeImg'>
                            <div className='imagesBody'>
                                <img src={img1} alt="image1" />
                                <div className='imgText'>
                                    <span className='ImgHeading' ><p>Explore the great selection  </p>   </span>
                                    <span className='ImgPara'>    <p>New game every week</p>  </span>
                                    <div className='NavLinkss'>
                                        {/* <Nav.Link href="Prize pinball"> Prize Pinball</Nav.Link>
                                        <Nav.Link href="Prize pinball">New on Betfair</Nav.Link>
                                        <Nav.Link href="Prize pinball">Try out our Game Show</Nav.Link> */}

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
                                        {/* <Nav.Link href="Prize pinball"> Daily article and tips</Nav.Link>
                                        <Nav.Link href="Prize pinball">Get the latest on Football</Nav.Link>
                                        <Nav.Link href="Prize pinball">Get the latest on Tennis</Nav.Link> */}

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
                                        {/* <Nav.Link href="Prize pinball"> Play Beat the Drop for free</Nav.Link>
                                        <Nav.Link href="Prize pinball">One free token per day</Nav.Link>
                                        <Nav.Link href="Prize pinball">Terms and conditions apply</Nav.Link> */}

                                        <p href="Prize pinball"> Play Beat the Drop for free</p>
                                        <p href="Prize pinball">One free token per day</p>
                                        <p href="Prize pinball">Terms and conditions apply</p>


                                    </div>

                                </div>


                            </div>
                        </div>



                    </div>


                </div>
            </Container>

        </div>
    )
}

export default MainPortion
