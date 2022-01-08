import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div className="BodyContainer">
        <div className="Container">
          <div className="SubContainer">
            <div className="ContainerChild_1">
              <div className="Child_1_Title">Betting History</div>

              <div className="Child_1_Dropdown_Container">
                <div className="sports-dropdown">
                  <label className="sporttype">Sport Type:</label>
                  <select className="select-all">
                    <option selected value="All">
                      All
                    </option>
                    <option value="Soccer">Soccer</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Golf">Golf</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Rugby Union">Rugby Union</option>
                    <option value="Boxing">Boxing</option>
                    <option value="Horse Racing">Horse Racing</option>
                    <option value="Motor Sport">Motor Sport</option>
                    <option value="Special Bets">Special Bets</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Rowing">Rowing</option>
                    <option value="Rugby League">Rugby League</option>
                    <option value="Darts">Darts</option>
                    <option value="Athletics">Athletics</option>
                    <option value="Greyhound Racing">Greyhound Racing</option>
                    <option value="Financial Bets">Financial Bets</option>
                    <option value="Snooker">Snooker</option>
                    <option value="american football">American Football</option>
                    <option value="baseball">Baseball</option>
                    <option value="basketball">Basketball</option>
                    <option value="hockey">Hockey</option>
                    <option value="ice hockey">Ice Hockey</option>
                    <option value="sumo wrestling">Sumo Wrestling</option>
                    <option value="australian rules">Australian Rules</option>
                    <option value="gaelic football">Gaelic Football</option>
                    <option value="hurling">Hurling</option>
                    <option value="pool">Pool</option>
                    <option value="testonly">Test Only</option>
                    <option value="chess">Chess</option>
                    <option value="Trotting">Trotting</option>
                    <option value="Commonwealth Games">
                      Commonwealth Games
                    </option>
                    <option value="Poker">Poker</option>
                    <option value="Winter Sports">Winter Sports</option>
                    <option value="Handball">Handball</option>
                    <option value="Netball">Netball</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Badminton">Badminton</option>
                    <option value="International Rules">
                      International Rules
                    </option>
                    <option value="Bridge">Bridge</option>
                    <option value="Yachting">Yachting</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Bowls">Bowls</option>
                    <option value="Bandy">Bandy</option>
                    <option value="Floorball">Floorball</option>
                    <option value="Exchange Poker">Exchange Poker</option>
                    <option value="Exchange Blackjack">
                      Exchange Blackjack
                    </option>
                    <option value="Exchange Baccarat">Exchange Baccarat</option>
                    <option value="Exchange Hi Lo">Exchange Hi Lo</option>
                    <option value="Exchange Omaha Hi">Exchange Omaha Hi</option>
                    <option value="exchange card racing">
                      Exchange Card Racing
                    </option>
                    <option value="casino">Casino</option>
                    <option value="exchange roulette">Exchange Roulette</option>
                    <option value="exchange bullseye roulette">
                      Exchange Bullseye Roulette
                    </option>
                    <option value="backgammon">Backgammon</option>
                    <option value="gaelic games">Gaelic Games</option>
                    <option value="internal markets">Internal Markets</option>
                    <option value="politics">Politics</option>
                    <option value="table tennis">Table Tennis</option>
                    <option value="beach voleyball">Beach Volleyball</option>
                    <option value="canoeing">Canoeing</option>
                    <option value="water polo">Water Polo</option>
                    <option value="polo">Polo</option>
                    <option value="fishing">Fishing</option>
                    <option value="roller hockey">Roller Hockey</option>
                    <option value="cross sport accumulators">
                      Cross Sport Accumulators
                    </option>
                    <option value="squash">Squash</option>
                    <option value="surfing">Surfing</option>
                    <option value="combat sports">Combat Sports</option>
                    <option value="ten pin bowling">Ten Pin Bowling</option>
                    <option value="futsal">Futsal</option>
                    <option value="mixed martial arts">
                      Mixed Martial Arts
                    </option>
                    <option value="triathlon">Triathlon</option>
                    <option value="current affairs">Current Affairs</option>
                    <option value="virtual sports">Virtual Sports</option>
                    <option value="e-sports">E-Sports</option>
                    <option value="wrestling">Wrestling</option>
                    <option value="olympics">Olympics</option>
                  </select>
                </div>

                <div className="status_dropdown">
                  <label className="bet_status">Bet Status:</label>
                  <select className="unmatched">
                    <option value="unmatched">Unmatched</option>
                    <option value="sp placed">SP Placed</option>
                    <option value="matched">Matched</option>
                    <option value="settled">Settled</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="voided-open markets">
                      Voided-Open Markets{" "}
                    </option>
                    <option value="Voided-Open Markets">
                      Voided-Close Markets
                    </option>
                    <option value="Lapsed">Lapsed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="periodContainer">
              <label className="period">Period:</label>

              <select className="last_hour">
                <option value="last 3 hours">Last 3 Hours</option>
                <option value="last 6 hours">Last 6 Hours</option>
                <option value="Just for Today">Just for Today</option>
                <option value="From Yesterday">From Yesterday</option>
                <option value="Last 7 Days">Last 7 Days</option>
                <option value="Last 30 Days">Last 30 Days </option>
                <option value="Last 3 Months">Last 3 Months</option>
              </select>
              <p className="period_para">(relates to bet placement date)</p>

              <div className="DateContainer">
                <div className="DateContainer_1">
                  <input
                    className="Input_Date1"
                    type="text"
                    name="startDate"
                    placeholder="2022-01-08 00:00"
                    value="2022-01-08 00:00"
                  />
                  <p className="Data_para1">(yyyy-mm-dd hh:mm)</p>
                </div>
                <span className="to_text">to</span>
                <div className="DateContainer_2">
                  <input
                    className="Input_Date2"
                    type="text"
                    name="startDate"
                    placeholder="2022-01-08 00:00"
                    value="2022-01-08 17:49"
                   
                  />
                  
                  <p className="Data_para2">(yyyy-mm-dd hh:mm)</p>
                </div>
              </div>
            </div>

            <div className="btn_Container">
              <button>Get History</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
