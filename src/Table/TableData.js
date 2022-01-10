import React from 'react'
import './table.css'
import { IoMdInformation } from 'react-icons/io'
import { Table } from 'react-bootstrap'
import {AiFillYoutube } from 'react-icons/ai'
const TableData = () => {
  return (
    <div className='Table'>

      <div className='SportsHighlights'>
        <p>Sports Highlights</p>
      </div>
      <Table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}  >
        <thead>
          <tr className='TableHeader'>
            <th>Football</th>
            <th></th>
            <th >Matched</th>

            <th colSpan={2}>1</th>

            <th colSpan={2}>X</th>

            <th colSpan={2}>2</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='Date'>today <br /> 18:00</td>
            <td className='TableSidebar'>Estorli Praia <br /> Porto</td>
            <td>€ 171,042</td>
            <td className='Tblue' > 25 <br />€5</td>
            <td className='TPink' > 28 <br />€2</td>
            <td className='Tblue' > 10.5<br />€27</td>
            <td className='TPink' > 11<br />€43</td>
            <td className='Tblue'  > 1.15<br />€912</td>
            <td className='TPink' > 1.16<br />€850</td>
            <td> <span className='infoIcons'><IoMdInformation style={{}} /></span></td>
          </tr>

          <tr>
            <td>Sun <br /> 14:00</td>
            <td className='TableSidebar'> Liverpool <br /> Shrewsbury</td>
            <td  >€ 80,913</td>
            <td className='Tblue'  > 1.24<br />€24</td>
            <td className='TPink' > 1.25<br />€125</td>
            <td className='Tblue' > 8<br />€6</td>
            <td className='TPink'  > 9 <br />€27</td>
            <td className='Tblue'  > 12.5<br />€43</td>
            <td className='TPink' > 15<br />€18</td>
            <td> <span className='infoIcons'><IoMdInformation /></span></td>

          </tr>

          <tr>
            <td>jan 12 <br /> 19:45</td>
            <td className='TableSidebar'> West ham <br /> Norwich</td>
            <td>€ 57,276</td>
            <td className='Tblue' > 1.31<br />€6208</td>
            <td className='TPink' > 1.31 <br />€1501</td>
            <td className='Tblue' > 6<br />€93</td>
            <td className='TPink' > 6.2<br />€295</td>
            <td className='Tblue'  > 13.5<br />€16</td>
            <td className='TPink' > 14<br />€55</td>
            <td> <span className='infoIcons'><IoMdInformation /></span></td>

          </tr>

          <tr>
            <td>today <br /> 17:30</td>
            <td className='TableSidebar'> Eintract Frankfurt <br /> Dortmund</td>
            <td>€ 54,298</td>
            <td className='Tblue' > 3.8 <br />€192</td>
            <td className='TPink'> 3.85 <br />€93</td>
            <td className='Tblue' > 4.1<br />€1548</td>
            <td className='TPink' > 4.2<br />€176</td>
            <td className='Tblue'  > 2<br />€9183</td>
            <td className='TPink' > 2.02<br />€1008</td>
            <td> <span className='infoIcons'><IoMdInformation /></span></td>

          </tr>

          <tr>
            <td>today <br /> 13:00</td>
            <td className='TableSidebar'> Levante <br /> Mallorca</td>
            <td>€ 59,583</td>
            <td className='Tblue' > 2.3 <br />€908</td>
            <td className='TPink' > 2.32 <br />€1548</td>
            <td className='Tblue' > 3.4<br />€5061</td>
            <td className='TPink' > 3.45<br />€257</td>
            <td className='Tblue'  > 3.6<br />€211</td>
            <td className='TPink' > 3.65<br />€167</td>
            <td> <span className='infoIcons'><IoMdInformation /></span></td>

          </tr>



        </tbody>
      </Table>



      {/* /* ------------------------  SECOND TABLE START HERE TENNIS */}

      <Table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}  >
        <thead>
          <tr className='TableHeader'>
            <th>Tennis</th>
            <th></th>
            <th></th>

            <th></th>
            <th >Matched</th>


            <th colSpan={2}>1</th>

            <th colSpan={2}>2</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='Date'>today <br /> 18:00</td>
            <td className='TableSidebar'>Markel Dellien <br /> Facundo Diaz 
            Acosta</td>
            <td  >  <br /></td>
            <td  >  <br /></td>
            <td>€ 171,042 <AiFillYoutube  className='youtube'/></td>
            <td className='Tblue' > 10.5<br />€27</td>
            <td className='TPink' > 11<br />€43</td>
            <td className='Tblue'  > 1.15<br />€912</td>
            <td className='TPink' > 1.16<br />€850</td>
            <td> <span className='infoIcons'><IoMdInformation style={{}} /></span></td>
          </tr>

          <tr>
            <td>Sun <br /> 14:00</td>
            <td className='TableSidebar'> Roberto Bautista Agut <br />  Felix Auger-Aliassime</td>
            <td > <br /></td>
            <td > <br /></td>
            <td  >€ 80,913 <AiFillYoutube   className='youtube'  /></td>
            <td className='Tblue' > 8<br />€6</td>
            <td className='TPink'  > 9 <br />€27</td>
            <td className='Tblue'  > 12.5<br />€43</td>
            <td className='TPink' > 15<br />€18</td>
            <td> <span className='infoIcons'><IoMdInformation /></span></td>

          </tr>
        </tbody>
      </Table>


          {/* ------------------------- third Snoocker Table ---------------------- */}
          <Table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}  >
        <thead>
          <tr className='TableHeader'>
            <th>Snoocker</th>
            <th></th>
            <th></th>

            <th></th>
            <th >Matched</th>


            <th colSpan={2}>1</th>

            <th colSpan={2}>2</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='IN-PLAY'> In-Play</td>
            <td className='TableSidebar'>Lu Ning <br /> Scott Donaldson
            Acosta</td>
            <td  >  <br /></td>
            <td  >  <br /></td>
            <td>€ 171,042 <AiFillYoutube  className='youtube'/></td>
            <td className='Tblue' > 10.5<br />€27</td>
            <td className='TPink' > 11<br />€43</td>
            <td className='Tblue'  > 1.15<br />€912</td>
            <td className='TPink' > 1.16<br />€850</td>
            <td> <span className='infoIcons'><IoMdInformation style={{}} /></span></td>
          </tr>

      </tbody>
      </Table>

      {/* ----------------------------- Cricket Table  ---------------------------- */}

      <Table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}  >
        <thead>
          <tr className='TableHeader'>
            <th>Cricket</th>
            <th></th>
            <th >Matched</th>

            <th colSpan={2}>1</th>

            <th colSpan={2}>X</th>

            <th colSpan={2}>2</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='Date'> 349/1 <br /> - </td>
            <td className='TableSidebar'>New Zealand  <br /> Bangladesh</td>
            <td>€ 11904,865</td>
            <td className='Tblue' > 1.17 <br />€49167</td>
            <td className='TPink' > 1.18 <br />€2130</td>
            <td className='Tblue' > 7<br />€3149</td>
            <td className='TPink' > 7.2<br />€51</td>
            <td className='Tblue'  > 90<br />€3</td>
            <td className='TPink' > 95<br />€56</td>
            <td> <span className='infoIcons'><IoMdInformation style={{}} /></span></td>
          </tr>

          <tr>
            <td>Sun <br /> 14:00</td>
            <td className='TableSidebar'> Melbourne Stars <br /> Adelaide Strickers </td>
            <td  >€ 86,301</td>
            <td className='Tblue'  > 1.7<br />€33</td>
            <td className='TPink' > 1.72<br />€63</td>
            <td className='Tblue' > - <br /></td>
            <td className='TPink'  > - <br /> </td>
            <td className='Tblue'  > 2.38<br />€58</td>
            <td className='TPink' > 2.42<br />€11</td>
            <td> <span className='infoIcons'><IoMdInformation /></span></td>

          </tr>

          </tbody>
          </Table>

            {/* ---------------------------- Rugby Union ------------------------- */}

            <Table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}  >
        <thead>
          <tr className='TableSidebar'>
            <th>Rugby Union </th>
            <th></th>
            <th >Matched</th>

            <th colSpan={2}>1</th>

            <th colSpan={2}>X</th>

            <th colSpan={2}>2</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='Date'> Today  <br /> 15:00 </td>
            <td className='TableSidebar'> Wasps  <br /> Leicester</td>
            <td>€ 20,622</td>
            <td className='Tblue' > 3.35 <br />€20</td>
            <td className='TPink' > 3.5 <br />€25</td>
            <td className='Tblue' > 25<br />€4</td>
            <td className='TPink' > 40<br />€4</td>
            <td className='Tblue'  > 1.48<br />€66</td>
            <td className='TPink' > 2.28<br />€147</td>
            <td> <span className='infoIcons'><IoMdInformation style={{}} /></span></td>
          </tr>
          </tbody>
          </Table>

            {/* ------------------------- AMERICAN FOOTBALL ---------------------------- */}

            <Table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}  >
        <thead>
          <tr className='TableSidebar'>
            <th>American Football</th>
            <th></th>
            <th></th>

            <th></th>
            <th >Matched</th>


            <th colSpan={2}>1</th>

            <th colSpan={2}>2</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='Date'> Jan !1 <br /> 01:05</td>
            <td className='TableSidebar'>Gerogia  <br /> Alabama 
            Acosta</td>
            <td  >  <br /></td>
            <td  >  <br /></td>
            <td>€ 56,096 <AiFillYoutube  className='youtube'/></td>
            <td className='Tblue' > 1.79<br />€93</td>
            <td className='TPink' > 1.8 <br />€21</td>
            <td className='Tblue'  > 2.24<br />€4083</td>
            <td className='TPink' > 2.28<br />€121</td>
            <td> <span className='infoIcons'><IoMdInformation style={{}} /></span></td>
          </tr>

          
        </tbody>
      </Table>


    </div>
  )
}

export default TableData
