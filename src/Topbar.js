import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Dropdown,
} from "react-bootstrap";
import { MdOutlineRefresh } from "react-icons/md";
import Flag from "react-world-flags";

const Topbar = () => {
  return (
    <Navbar
      className="background"
      collapseOnSelect
      expand="lg"
      bg=""
      variant=""
    >
      <Container className="overall">
        <Navbar.Brand className="betfair">betfair</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="help text-dark">help</Nav.Link>
          </Nav>
          {/* .....................firstdropdown................. */}
          <Nav>
            <NavDropdown
              className="account"
              title="My Account"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Veljo123</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                My Betfair Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                My Poker Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Refer Friends
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Contact Preferences
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Safer Gambling Tools
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Log Out</NavDropdown.Item>
            </NavDropdown>
            <div className="button_main">
              <Button
                className="deposit text-dark"
                variant=""
                style={{ display: "flex", alignItems: "center" }}
              >
                Deposit
              </Button>
            </div>
            {/* ..................second dropdown............................. */}

            <div className="secondDrop">
              <Dropdown>
                <Dropdown.Toggle
                  variant="#2B2B2B"
                  id="dropdown-basic"
                  className="DropDownButton"
                >
                  Main <span> €0.02 </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="DropdownMenuButton">
                  <div className="cashBalance">
                    <Dropdown.Item href="#/action-1 ">
                      
                      <h6 style={{ fontWeight: "bold"}}>
                        €0.02 Cash Balance
                      </h6>
                      <button>Hide balance</button>
                    </Dropdown.Item>
                  </div>
                  <Dropdown.Item href="#/action-2">
                    
                    <h6 style={{ fontWeight: "bold" }}>
                      
                      €0.02 Main Wallet
                    </h6>
                    <span className="Deposit">
                      
                      <span className="Sportbook">
                        (Sportbook, exchange, Bingo, Casino)
                      </span>
                      <button>Deposit</button> | <button>WithDraw</button>
                    </span>
                  </Dropdown.Item>
                  <div className="BonusBalance">
                    <Dropdown.Item href="#/action-3">
                      
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
                      
                      <span style={{ fontWeight: "bold" }}>€0.00 </span>Free
                      Bets
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
                      
                      <span style={{ fontWeight: "bold" }}>€0.00 </span>Free
                      Bets
                    </p>
                  </Dropdown.Item>
                  <div></div>
                  <Dropdown.Item href="#/action-6">
                    <p style={{ fontSize: "12px" }}>
                      
                      <span style={{ fontWeight: "bold" }}>€0.00 </span>Pending
                      winning - awaiting bet settlement
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-7">
                    <p style={{ fontSize: "12px" }}>
                      
                      <span style={{ fontWeight: "bold" }}>0 </span>Odds Boosts
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-8">
                    <h6 style={{ fontWeight: "bold" }}>€0.00 Casino Bonus</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-9">
                    
                    <h6 style={{ fontWeight: "bold" }}>
                      €0.00 Exchange Game Bonus
                    </h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-9">
                    
                    see full detailed in Account Summary
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
             
            </div>
            <div className="refresh">
                <MdOutlineRefresh />
              </div>
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

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
