// import React ,{Component} from 'react'

// export default class Practice extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-expand-xl navbar-side" aria-label="Side Navigation">
//                 <div className={`navbar-toggler ${this.state.notification ? 'has-notification' : ''}`} data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle side navigation">
//                     Menu
//                 </div>
//                 <div className="collapse navbar-collapse" id="sidebarCollapse">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-user">
//                             <div className="profile-pic">
//                                 <i className="fa fa-lg fa-user mt-1" />
//                             </div>
//                             <i><span>{this.state.authenticatedUser.first_name} {this.state.authenticatedUser.last_name}</span><br />{this.state.authenticatedUser.job_title}</i>
//                         </li>
//                         <Navbar />
//                     </ul>
//                 </div>
//             </nav>
//         )
//     }
// }



import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Practice.css'
const practice = () => {
    return (
        <div>
            {/* <select name='menu'>
                <option value='1'>first item</option>
                <option value='2'>second item</option>
                <option value='3'>third item</option>
                <option value='4'>fourth item</option>
                <option value='5'>fifth item</option>
                <option value='1'>first item</option>
                <option value='2'>second item</option>
                <option value='3'>third item</option>
                <option value='4'>fourth item</option>
                <option value='5'>fifth item</option>
                <option value='1'>first item</option>
                <option value='2'>second item</option>
                <option value='3'>third item</option>
                <option value='4'>fourth item</option>
                <option value='5'>fifth item</option>
                <option value='1'>first item</option>
                <option value='2'>second item</option>
                <option value='3'>third item</option>
                <option value='4'>fourth item</option>
                <option value='5'>fifth item</option>
                <option value='5'>fifth item</option>
                <option value='1'>first item</option>
                <option value='2'>second item</option>
                <option value='3'>third item</option>
                <option value='4'>fourth item</option>
                <option value='5'>fifth item</option>
            </select> */}

            <Container fluid>
                <Row className='RowCon'>
                    <Col>1 of 3</Col>
                    <Col lg={8}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
               
            </Container>
        </div>
    )
}

export default practice
