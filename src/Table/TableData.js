import React from 'react'
import './table.css'
import {IoMdInformation} from 'react-icons/io'
import { Table } from 'react-bootstrap'
const TableData = () => {
  return (
    <div className='Table'>


      { <Table  striped bordered hover>
        <thead>
          <tr>
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
            <td>today <br /> 18:00</td>
            <td className='TableSidebar'>Estorli Praia Porto</td>
            <td>€ 171,042</td>
            <td className='Tblue' > 25 <br />€5</td>
            <td className='TPink' > 28 <br />€2</td>
            <td className='Tblue' > 10.5<br />€27</td>
            <td className='TPink' > 11<br />€43</td>
            <td className='Tblue'  > 1.15<br />€912</td>
            <td className='TPink' > 1.16<br />€850</td>
            <td> <span className='infoIcons'><IoMdInformation/></span></td>
          </tr>

          <tr>
            <td>Sun <br /> 14:00</td>
            <td  className='TableSidebar'> Liverpool Shrewsbury</td>
            <td  >€ 80,913</td>
            <td className='Tblue'  > 1.24<br />€24</td>
            <td className='TPink' > 1.25<br />€125</td>
            <td className='Tblue' > 8<br />€6</td>
            <td className='TPink'  > 9 <br />€27</td>
            <td className='Tblue'  > 12.5<br />€43</td>
            <td className='TPink' > 15<br />€18</td>
            <td> <span className='infoIcons'><IoMdInformation/></span></td>

          </tr>

          <tr>
            <td>jan 12 <br /> 19:45</td>
            <td className='TableSidebar'> West ham Norwich</td>
            <td>€ 57,276</td>
            <td className='Tblue' > 1.31<br />€6208</td>
            <td className='TPink' > 1.31 <br />€1501</td>
            <td className='Tblue' > 6<br />€93</td>
            <td className='TPink' > 6.2<br />€295</td>
            <td className='Tblue'  > 13.5<br />€16</td>
            <td className='TPink' > 14<br />€55</td>
            <td> <span className='infoIcons'><IoMdInformation/></span></td>

          </tr>

          <tr>
            <td>today <br /> 17:30</td>
            <td className='TableSidebar'> Eintract Frankfurt Dortmund</td>
            <td>€ 54,298</td>
            <td className='Tblue' > 3.8 <br />€192</td>
            <td  className='TPink'> 3.85 <br />€93</td>
            <td className='Tblue' > 4.1<br />€1548</td>
            <td className='TPink' > 4.2<br />€176</td>
            <td className='Tblue'  > 2<br />€9183</td>
            <td className='TPink' > 2.02<br />€1008</td>
            <td> <span className='infoIcons'><IoMdInformation/></span></td>

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
            <td> <span className='infoIcons'><IoMdInformation/></span></td>

          </tr>

          
         
        </tbody>
      </Table> 

     /* ------------------------  SECOND TABLE START HERE TENNIS */
/* 
     <Table striped bordered hover>
        <thead>
          <tr>
            <th>TENNIS</th>
            <th></th>
            <th colSpan={3} >Matched</th>

            <th colSpan={2}>1</th>

            <th colSpan={2}>X</th>

            <th colSpan={2}>2</th>



          </tr>
        </thead>
        <tbody>
          <tr>
            <td>today <br /> 18:00</td>
            <td >Estorli Praia Porto</td>
            <td>€ 171,042</td>
            <td  > <br /></td>
            <td  > 28 <br />€2</td>
            <td  > 10.5<br />€27</td>
            <td  > 11<br />€43</td>
            <td  > 1.15<br />€912</td>
            <td  > 1.16<br />€850</td>
            <td></td>
          </tr>

          <tr>
            <td>Sun <br /> 14:00</td>
            <td >Liverpool Shrewsbury</td>
            <td>€ 80,913</td>
            <td  > 1.24<br />€24</td>
            <td  > 1.25<br />€125</td>
            <td  > 8<br />€6</td>
            <td  > 9 <br />€27</td>
            <td  > 12.5<br />€43</td>
            <td  > 15<br />€18</td>
            <td></td>
          </tr>

          <tr>
            <td>jan 12 <br /> 19:45</td>
            <td >West ham Norwich</td>
            <td>€ 57,276</td>
            <td  > 1.31<br />€6208</td>
            <td  > 1.31 <br />€1501</td>
            <td  > 6<br />€93</td>
            <td  > 6.2<br />€295</td>
            <td  > 13.5<br />€16</td>
            <td  > 14<br />€55</td>
            <td></td>
          </tr>

          <tr>
            <td>today <br /> 17:30</td>
            <td >Eintract Frankfurt Dortmund</td>
            <td>€ 54,298</td>
            <td  > 3.8 <br />€192</td>
            <td  > 3.85 <br />€93</td>
            <td  > 4.1<br />€1548</td>
            <td  > 4.2<br />€176</td>
            <td  > 2<br />€9183</td>
            <td  > 2.02<br />€1008</td>
            <td></td>
          </tr>

          <tr>
            <td>today <br /> 13:00</td>
            <td >Levante <br /> Mallorca</td>
            <td>€ 59,583</td>
            <td  > 2.3 <br />€908</td>
            <td  > 2.32 <br />€1548</td>
            <td  > 3.4<br />€5061</td>
            <td  > 3.45<br />€257</td>
            <td  > 3.6<br />€211</td>
            <td  > 3.65<br />€167</td>
            <td></td>
          </tr>

          
         
        </tbody>
      </Table> */}
    </div>
  )
}

export default TableData
