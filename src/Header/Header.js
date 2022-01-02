import React from "react";
import "./Header.css";
import Flag from 'react-world-flags'
import {
  GoDeviceMobile,
  GoSearch,
  GoArrowUp,
  GoArrowDown,
} from "react-icons/go";
import { TiRefresh } from "react-icons/ti";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import {
  Container,
  Dropdown,
  NavDropdown,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
const Header = () => {
  return (
    <div className="Header-container">
      <div className="headerBody">
        <Container
          fluid
          style={{ margin: 0, padding: 0 }}
          className="containerBody"
        >
          <div className="header">
            <div className="headings">
              <span className="mainSpan">
                <h1>
                  {" "}
                  <span>
                    <GoArrowUp className="ArrowUp" />{" "}
                  </span>{" "}
                  <span>
                    <GoArrowDown className="ArrowDown" />
                  </span>
                  Betfair
                </h1>
              </span>
              {/* <h1 ><img src={LogoO} alt="logo" />  Betfair</h1> */}
            </div>
            <div className="headerUL">
              <ul>
                <li>
                  {" "}
                  <a>My bets</a>
                </li>
                <li>
                  <a>My Bonuses</a>
                </li>
                <li>
                  <a>Help</a>
                </li>
                <li>
                  <a>
                    <GoDeviceMobile className="Mobile" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="inputContainer">
              <div className="inputSearch">
                <form className="InputForm">
                  <input
                    type="search"
                    placeholder="Find teams, competitions, races, and more..."
                    className="searchInput"
                  ></input>
                  <button className="searchIcon">
                    <GoSearch />
                  </button>
                </form>
              </div>
            </div>

            <div className="myAccountDropDown">
              <Dropdown>
                <Dropdown.Toggle
                  variant="#2B2B2B"
                  id="dropdown-basic"
                  className="DropDownButton"
                >
                  My Account
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    My Betfair Account
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Account Statement
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">My Bets</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Betting History
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">
                    Betting Profit & loss
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-6">Refer Friend</Dropdown.Item>
                  <Dropdown.Item href="#/action-7">
                    Contact Preference
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-8">
                    Safer Gambling Tools
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-9">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="DepositButton">
              <Button variant="">Deposit</Button>
            </div>

            {/* ----------------- Second Dropdown ------------------------------- */}
            <div className="secondDrop">
              <Dropdown>
                <Dropdown.Toggle
                  variant="#2B2B2B"
                  id="dropdown-basic"
                  className="DropDownButton4"
                >
                  Main <span> €0.02 </span> <br />
                  Exchange Bonus €0.00
                </Dropdown.Toggle>

                <Dropdown.Menu className="DropdownMenuButton">
                  <div className="cashBalance">
                    <Dropdown.Item href="#/action-1 ">
                      {" "}
                      <h6 style={{ fontWeight: "bold" }}>
                        €0.02 Cash Balance
                      </h6>{" "}
                      <button>Hide balance</button>
                    </Dropdown.Item>
                  </div>
                  <Dropdown.Item href="#/action-2">
                    {" "}
                    <h6 style={{ fontWeight: "bold" }}>
                      {" "}
                      €0.02 Main Wallet{" "}
                    </h6>{" "}
                    <span className="Deposit">
                      {" "}
                      <span className="Sportbook">
                        (Sportbook, exchange, Bingo, Casino)
                      </span>{" "}
                      <button>Deposit</button> | <button>WithDraw</button>
                    </span>{" "}
                  </Dropdown.Item>
                  <div className="BonusBalance">
                    <Dropdown.Item href="#/action-3">
                      {" "}
                      <h6 style={{ fontWeight: "bold" }}>
                        Bonus Balances <span></span> (non-withdrawable)
                      </h6>
                    </Dropdown.Item>
                  </div>

                  <div className="ExchangeBonus">
                    <h5>Exchange Bonus </h5>
                    <div className="ViewDetail">
                      <button>View Details</button>
                    </div>
                  </div>

                  <Dropdown.Item href="#/action-4">
                    <p style={{ fontSize: "12px" }}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>€0.00 </span>Free
                      Bets{" "}
                    </p>
                  </Dropdown.Item>
                  <div className="ExchangeBonus">
                    <h5>Sportsbook Bonus </h5>
                    <div className="ViewDetail">
                      <button>View Details</button>
                    </div>
                  </div>
                  <Dropdown.Item href="#/action-5">
                    <p style={{ fontSize: "12px" }}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>€0.00 </span>Free
                      Bets{" "}
                    </p>
                  </Dropdown.Item>
                  <div></div>
                  <Dropdown.Item href="#/action-6">
                    <p style={{ fontSize: "12px" }}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>€0.00 </span>Pending
                      winning - awaiting bet settlement{" "}
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-7">
                    <p style={{ fontSize: "12px" }}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>0 </span>Odds Boosts{" "}
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-8">
                    <h6 style={{ fontWeight: "bold" }}>€0.00 Casino Bonus</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-9">
                    {" "}
                    <h6 style={{ fontWeight: "bold" }}>
                      €0.00 Exchange Game Bonus
                    </h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-9">
                    {" "}
                    see full detailed in Account Summary
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="RefreshIcons">
              <TiRefresh />

              
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
        <Flag code="pk" height="13" />
            
          </Dropdown.Toggle>

          <Dropdown.Menu  className="sajid">
            <Dropdown.Item href="#/action-1" style={{width: "142px" }} > <Flag code="pk" height="13" /> <span style={{marginTop: "-5px" ,fontSize: "12px"}}>PAKISTAN</span></Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={{width: "142px"}} ><Flag code="de" height="13" />  <span style={{marginTop: "-5px" ,fontSize: "12px"}}>Deustch</span> </Dropdown.Item>
            <Dropdown.Item href="#/action-3"  style={{width: "142px"}}> <Flag code="BR" height="13" /> <span style={{marginTop: "-5px" ,fontSize: "12px"}}>Portaguse</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"  style={{width: "142px"}}> <Flag code="ES" height="13" /> <span style={{marginTop: "-5px" ,fontSize: "12px"}}>Esponal</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"  style={{width: "142px"}}> <Flag code="PY" height="13" /> <span style={{marginTop: "-5px" ,fontSize: "12px"}}>Pyccknn</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"  style={{width: "142px"}}> <Flag code="kp" height="13" /> <span style={{marginTop: "-5px" ,fontSize: "12px"}}>Suomi</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"  style={{width: "142px"}}> <Flag code="Mg" height="13" /> <span style={{marginTop: "-5px" ,fontSize: "12px"}}>Esponal</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"  style={{width: "142px"}}> <Flag code="ES" height="13" /> <span style={{marginTop: "-5px" ,fontSize: "12px"}}>Esponal</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"  style={{width: "142px"}}> <Flag code="ES" height="13" /> <span style={{marginTop: "-5px" ,fontSize: "12px"}}>Esponal</span></Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
        
              {/* <CountryDropdown
                id="1"
                className="CountryFlags"
                preferredCountries={["Uk", "IRE", "De", "Es"]}
                value=""
                handleChange={(e) => console.log(e.target.value)}
              ></CountryDropdown> */}
            </div>
          </div>
          {/* ----------------------------- Second NavBar -------------- */}
          <div className="secondCo  tainer">
            <div className="secondNavbar">
              <Navbar bg="" variant="">
                <Container>
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
                <div className="secondNavLink1">
                  <button>Safer Gambling</button>
                </div>
              </Navbar>
            </div>
          </div>

          {/* --------------------- Third Navbar ----------------- */}
          <div className="ThirdContainer">
            <div className="ThirdNavbar">
              <Navbar bg="" variant="">
                <Container fluid style={{ padding: 0, margin: 0 }}>
                  {/* <Navbar.Brand href="#home">Exchange</Navbar.Brand> */}
                  <Nav className="ExchangeThird me-auto">
                    <Nav.Link className="ThirdNavLink" href="#Home">
                      Home
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#IN-play">
                      in-play
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Cash out">
                      Cash out
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Prommotions">
                      Promotions
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Football">
                      Football
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Tennis">
                      Tennis
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Basketball">
                      Basketball
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Horce Racing">
                      Horce Racing
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#E-sports">
                      E-Sports
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Tip & Preview">
                      Tip & Previews
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Beat The Drop">
                      Beat The Drop
                    </Nav.Link>
                    <Nav.Link className="ThirdNavLink" href="#Education">
                      Education
                    </Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </div>
          </div>
        </Container>
        {/* <Flag code="PK" fallback={ <span>Unknown</span> }/> */}

       

        
      </div>
    </div>
  );
};

export default Header;
