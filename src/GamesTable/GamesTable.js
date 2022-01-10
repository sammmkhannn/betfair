import React from "react";
import "./GameTable.css";
import { IoIosArrowForward } from "react-icons/io";
import { Button, NavLink, Table } from "react-bootstrap";
const GamesTable = () => {
  return (
    <div className="GamesTableContainer">
     

      {/* -----------------------Football Tennis Cricket --------------------------------*/}

      <div className="Hockey">
        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " }}>
          <thead className="GameHeadings" >
            <th className="Pointer">Football</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timing">Today <br />  19:55</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Man Utd  <br /> Aston Villa </td>
            </tr>

            <tr>
              <td className="Timing">Jan <br />  19:45</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>West Ham  <br /> Norwich</td>
            </tr>

            <tr>
              <td className="Timing"> Today <br /> 13:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Senegal <br /> Zimbabwe </td>
            </tr>

            <tr>
              <td className="Timing">Jan <br />  19:45</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Tottenham <br /> Chelsea</td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  16:00</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Torino <br />Fiorentina</td>
            </tr>

            <tr>
              <td></td>
              <td className="hockeyButtons">view all Ice Cricket<IoIosArrowForward style={{ paddingBottom: "2px" }} /></td>
            </tr>

          </tbody>
        </Table>


        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " }}>
          <thead className="GameHeadings" >
            <th className="Pointer">Cricket</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timings">Ft <br />  140/5 <br /> 139/5 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Melbourne Star <br /> Adelaide Striker</td>
            </tr>

            <tr>
              <td className="Timings">521/- <br />  126/-</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> New Zealand <br /> Bangladesh</td>
            </tr>

            <tr>
              <td className="Timing">Today <br />  23:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Australia <br /> England </td>
            </tr>

            <tr>
              <td className="Timing">Jan <br />  22:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> South Africa  <br /> India </td>
            </tr>

            <tr>
              <td className="IN-PLAY">In-play <br />  16:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Bangladesh U19 <br /> Pakistan U19</td>
            </tr>

            <tr>
              <td style={{    cursor: "auto"}}></td>
              <td className="hockeyButtons">view all Basketball <IoIosArrowForward style={{ paddingBottom: "2px" }} /></td>
            </tr>


          </tbody>
        </Table>



        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " }}>
          <thead className="GameHeadings" >
            <th className="Pointer">Tennis</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timing">Today<br />  13:15 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Jhon Higgins <br /> Zhao Xintong </td>
            </tr>

            <tr>
              <td className="Timing">Jan 12<br />  13:15 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Aldin  Setkic <br /> Calvin Hemery </td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  19:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Michael Geerts<br /> Adrain Andereev </td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  19:00</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> A Carrilo Marin <br /> N Ugrelidze  </td>
            </tr>

            <tr>
              <td className="IN-PLAY">Today<br />  13:15 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>  Saville/Smith<br /> Bonzi/Nys </td>
            </tr>

            <tr>
              <td style={{    cursor: "auto"}}></td>
              <td className="hockeyButtons">view all Snooker <IoIosArrowForward style={{ paddingBottom: "2px" }} /></td>
            </tr>

          </tbody>

        </Table>
      </div>






      {/* ----------------------------- Ice Hockey Football Snooker ---------------------- */}
      <div className="Hockey">
        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " }}>
          <thead className="GameHeadings" >
            <th className="Pointer">Ice Hockey</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timing">Jan <br />  22:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Hc red star Kunlun <br /> </td>
            </tr>

            <tr>
              <td className="Timing">Feb  19<br />  22:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Farjestads BK  <br /> Beynas If</td>
            </tr>

            <tr>
              <td className="IN-PLAY">In-play </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>aMUR khabarovsk <br /> Sibir Novosibirsk  </td>
            </tr>

            <tr>
              <td className="Timing">Tue  <br />  16 :00</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Torpedo N. Novgorod<br /> HC Barys</td>
            </tr>

            <tr>
              <td className="Timing">Tue <br />  16:00</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>HPK Hameenlinna<br /> Jukurit Mikkeli</td>
            </tr>

            <tr >
              <td style={{    cursor: "auto"}}></td>
              <td className="hockeyButtons">view all Ice Hockey<IoIosArrowForward style={{ paddingBottom: "2px" }} /></td>
            </tr>

          </tbody>
        </Table>


        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " }}>
          <thead className="GameHeadings" >
            <th className="Pointer">Basketball</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timing">Today <br />  11:35 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Melbourne Star <br /> Nanjing Toxi Monkey  </td>
            </tr>

            <tr>
              <td className="Timing">Tue <br />  00:10</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Milwaukee Bucks  <br /> Charlotte Hornets </td>
            </tr>

            <tr>
              <td className="Timing">Today <br />  23:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Goyang Orion Orions <br /> Suwon KT sonicborn </td>
            </tr>

            <tr>
              <td className="Timing">Feb  19<br />  22:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Corinthans <br /> Caxias do Sul </td>
            </tr>

            <tr>
              <td className="Timing">Today <br />  16:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Pasvalio Pienp Zvaig... <br /> Kedainiai Nevezis </td>
            </tr>

            <tr>
              <td style={{    cursor: "auto"}}></td>
              <td className="hockeyButtons">view all Basketball <IoIosArrowForward style={{ paddingBottom: "2px" }} /></td>
            </tr>


          </tbody>
        </Table>



        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " }}>
          <thead className="GameHeadings" >
            <th className="Pointer">Snooker</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timing">Today<br />  13:15 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Jhon Higgins <br /> Zhao Xintong </td>
            </tr>

            <tr>
              <td className="Timing">Jan 12<br />  13:15 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Judd Trump<br />Mark Alien </td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  19:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Shaun Murphy  <br /> Barry Hawkins </td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  19:00</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Mark Selby <br /> Stephen Maguire </td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  13:15 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Ronnie O'Sullivan<br /> Jack Lisowski </td>
            </tr>

            <tr>
              <td style={{    cursor: "auto"}}></td>
              <td className="hockeyButtons">view all Snooker <IoIosArrowForward style={{ paddingBottom: "2px" }} /></td>
            </tr>

          </tbody>

        </Table>
      </div>


      {/* ----------------------Boxing Ruby Union American Football ------------------------/ */}
      <div className="Hockey">
        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " }}>
          <thead className="GameHeadings" >
            <th className="Pointer">Boxing</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timing">Feb 19<br />  22:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Kellb Brook  <br />Amir Khan </td>
            </tr>

            <tr>
              <td className="Timing">Feb  12<br />  22:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Daniel Jacobs  <br /> John Ryder </td>
            </tr>

            <tr>
              <td className="Timing"> Feb 6 <br /> 02:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Liam Smith<br /> Jessie Vargas  </td>
            </tr>

            <tr>
              <td className="Timing">Mar 6  <br />  02:00</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Juan Francisco Estra<br /> Roman Gonzalez </td>
            </tr>

            <tr>
              <td className="Timing">Mar 6<br /> 3:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Kiko Martinez <br /> Josh Warrington</td>
            </tr>

            <tr>
              <td style={{    cursor: "auto"}}></td>
              <td className="hockeyButtonsss">view all Ice Boxing<IoIosArrowForward style={{ margin: "3px" }} /></td>
            </tr>

          </tbody>
        </Table>


        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " , cursor: "pointer"}}>
          <thead className="GameHeadings" >
              
            <th colSpan={2} className="Pointer">Rugby Union</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timing">Feb 5 <br />  16:45 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Scotland <br /> England </td>
            </tr>

            <tr>
              <td className="Timing">Tue <br />  00:10</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> France  <br /> Italy </td>
            </tr>

            <tr>
              <td className="Timing">Today <br />  23:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Ireland <br /> Wales </td>
            </tr>

             
              <tr   className="Rug"  >
                <td className="Timing"> Tue <br />  23:00 </td>
                <td style={{ textAlign: "left", fontWeight: "bold" }}>  Ireland  <br /> Wales   </td>
              </tr>
              
              <tr className="Rug">
                <td className="Timing"> Wales  <br />   Wales  </td>
                <td style={{ textAlign: "left", fontWeight: "bold" }}> sdfasddfasdf </td>
              </tr>

           

            <tr className="RugbyUnions">
              
              <td   colSpan={2}  className="hockeyButtonsss">view all Rugby Union <IoIosArrowForward style={{ margin: "3px" }} /></td>
            </tr>


          </tbody>
        </Table>



        <Table hover style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', background: "white " }}>
          <thead className="GameHeadings" >

            <th colSpan={2} className="Pointer">American Football</th>
            <th className="GameHeadings"></th>

          </thead>
          <tbody>

            <tr>
              <td className="Timing">Tue<br />  01:05</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Georgia <br /> Alabama </td>
            </tr>

            <tr>
              <td className="Timing">Jan 12<br />  13:15 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> Pittsburgh Steelers <br /> Kansas City Chiefs </td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  19:00 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}> LAs Vegas Raiders <br /> Cincinnati Bangals </td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  19:00</td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>Philadelphia Eagles <br /> Tampa Bay Buccaneers</td>
            </tr>

            <tr>
              <td className="Timing">Today<br />  13:15 </td>
              <td style={{ textAlign: "left", fontWeight: "bold" }}>  Arizona Cardinals <br /> Los Angles Rams  </td>
            </tr>

            <tr>
              <td style={{    cursor: "auto"}}></td>
              <td className="hockeyButtonsss">view all Football <IoIosArrowForward style={{ margin: "3px" }} /></td>
            </tr>

          </tbody>

        </Table>
      </div>
      

    </div>
  );
};

export default GamesTable;
