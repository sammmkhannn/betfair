import React from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import "./Topbar2.css";
import { HiOutlineHome } from "react-icons/hi";
import {FaAngleLeft} from "react-icons/fa";
const Topbar2 = () => {
  return (
    <>
      {/* ............................secondNavbar.......................................... */}
      <div className="secondContainer">
        <div className="secondNavbar">
          <Navbar className="styling" bg="" variant="">
            <Container fluid style={{ padding: 0, margin: 0 }}>
              {/* <Navbar.Brand href="#home">Exchange</Navbar.Brand> */}
              <Nav className="Exchange me-auto">
                <Nav.Link className="secondNavLink" href="#Exchange">
                  Exchange
                </Nav.Link>
                <Nav.Link className="secondNavLink" href="#Sportbook">
                  Sporksbook
                </Nav.Link>
                <Nav.Link className="secondNavLink" href="#Casino">
                  Casino
                </Nav.Link>
                <Nav.Link className="secondNavLink" href="#slots">
                  slots
                </Nav.Link>
                <Nav.Link className="secondNavLink" href="#Live casino">
                  Live Casino
                </Nav.Link>
                <Nav.Link className="secondNavLink" href="#Poker">
                  Poker
                </Nav.Link>
                <Nav.Link className="secondNavLink" href="#Exchange Game">
                  Exchange Games
                </Nav.Link>
                <Nav.Link className="secondNavLink" href="#Bingo">
                  Bingo
                </Nav.Link>
                <Nav.Link className="secondNavLink" href="#Virtula sports">
                  Virtual sports
                </Nav.Link>
              </Nav>
            </Container>
            <Nav.Link className="Sgambling" href="#Virtula sports">
                  Safer Gambling
                </Nav.Link>
          </Navbar>
        </div>
      </div>

      {/* .....................................thirdNavbar.................... */}
      <div className="ThirdContainer">
        <div className="ThirdNavbar">
          <Navbar bg="" variant="">
            <Container fluid   >
              {/* <Navbar.Brand href="#home">Exchange</Navbar.Brand> */}
              <Nav className="ExchangeThird me-auto">
                <Nav.Link className="back-to-bating" href="#Back to betting">
                  <FaAngleLeft style={{marginTop:"-3px", fontSize:"13px"}}/> Back to betting
                </Nav.Link>
                <Nav.Link className="summery" href="#summery">
                  <HiOutlineHome style={{width:"40px",height:"3vh"}} />
                </Nav.Link>
                <Nav.Link className="ThirdNavLink" href="#Payments">


                  <Dropdown> 
                    <Dropdown.Toggle className="dropdown1">

                      Payments
                      <Dropdown.Menu className="dropdown2" variant="">
                        <Dropdown.Item className="DropdownItems" href="#/action-1">Deposit</Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-2">
                          Withdraw
                        </Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-3">
                          Transfer
                        </Dropdown.Item>
                        {/* <Dropdown.Divider /> */}
                        <Dropdown.Item className="DropdownItems" href="#/action-4">
                          Card Details
                        </Dropdown.Item>
                      </Dropdown.Menu>

                    </Dropdown.Toggle>
                  </Dropdown>


                </Nav.Link>
                <Nav.Link className="ThirdNavLink" href="#Betting Activity">
                <Dropdown>
                    <Dropdown.Toggle className="dropdown3">

                    Betting Activity
                      <Dropdown.Menu className="dropdown4" variant="">
                        <Dropdown.Item className="DropdownItems" href="#/action-1">Sportsbook Bets</Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-2">
                          Exchange Bets
                        </Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" hr className="DropdownItems"ef="#/action-3">
                        Exchange Current Bets
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="DropdownItems" href="#/action-4">
                          Exchange Betting History
                        </Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-4">
                          Exchange Profit & Loss
                        </Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-4">
                          Account Statement
                        </Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-4">
                          Transaction History
                        </Dropdown.Item>
                      </Dropdown.Menu>

                    </Dropdown.Toggle>
                  </Dropdown>
                 
                </Nav.Link>
                <Nav.Link className="ThirdNavLink" href="#My Details">
                <Dropdown>
                    <Dropdown.Toggle className="dropdown5">

                    My Details
                      <Dropdown.Menu className="dropdown6" variant="">
                        <Dropdown.Item className="DropdownItems" href="#/action-1">Account Details</Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-2">
                          Security Settings
                        </Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-3">
                        Document Uploader
                        </Dropdown.Item>
                        {/* <Dropdown.Divider /> */} 
                      </Dropdown.Menu>

                    </Dropdown.Toggle>
                  </Dropdown>
                </Nav.Link>
                <Nav.Link className="ThirdNavLink" href="#Promotions & Rewards">
                <Dropdown>
                    <Dropdown.Toggle className="dropdown7">

                    Promotions & Rewards 
                      <Dropdown.Menu className="dropdown8" variant="">
                        <Dropdown.Item className="DropdownItems" href="#/action-1">Promotions</Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-2">
                          Refer Friends <button className="earnreward">EARN REWARDS</button>
                        </Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-3">
                        My Bonuses
                        </Dropdown.Item>
                        <Dropdown.Item className="DropdownItems" href="#/action-3">
                        Betfair Points
                        </Dropdown.Item>
                        {/* <Dropdown.Divider /> */} 
                      </Dropdown.Menu>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Nav.Link>
                <Nav.Link className="safergambling" href="#Safer Gambling">
                Safer Gambling
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Topbar2;
