// import React, {Component} from 'react'

// class NavBar extends Component {

//     constructor(props) {
//         super(props);
    
//         this.state = {
//             auth: false,
//             slide: 0,  // How much should the Navbar slide up or down
//             lastScrollY: 0,  // Keep track of current position in state
//         }
//     }
    
//     componentWillMount() {
//         let navbar = document.getElementById('navbar-div');
//         navbar.addEventListener('scroll', this.handleScroll);
//     }
    
//     componentWillUnmount() {
//         let navbar = document.getElementById('navbar-div');
//         navbar.removeEventListener('scroll', this.handleScroll);
//     }
    
//     handleScroll = () => {
//         let navbar = document.getElementById('navbar-div');
//         const { lastScrollY } = this.state; 
//         const currentScrollY = navbar.scrollY;
    
//         if (currentScrollY > lastScrollY) {
//           this.setState({ slide: '-48px' });
//         } else {
//           this.setState({ slide: '0px' });
//         }
//         this.setState({ lastScrollY: currentScrollY });
//     };
    
//     render() {
//         return (
//             <div className="navbar-div" id="navbar-div">
//                 {this.adminMenu()}
//                 {this.usersMenu()}
//             </div>
//         );
//     }
    
//     }