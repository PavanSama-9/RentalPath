import React from "react";
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import Logout from "./Logout";
let isAuthenticated = false;
let logout = new Logout();
class NavigationBar extends React.Component {
      onLogoutClicked(){  
        logout.handleFBLogout();
     }
     componentDidMount(){
         logout.loadFbLoginApi();
     }
   render() {
        if (localStorage.getItem('userData') != null) {
            isAuthenticated = true;
        }
        const guestLinks = (
            <Nav pullRight>
                <NavItem className="LoginNavBar pull-right" eventKey={6} href="/login">Login</NavItem>
                <NavItem eventKey={2} href="/services">Services</NavItem>
                <NavItem eventKey={3} href="/favourites">Favourites</NavItem>
            </Nav>
        );
        const userLinks = (
            <Nav>
                <NavItem className="LogoutNavBar pull-right" onSelect={() => { this.onLogoutClicked() }} eventKey={8} href="/logout">Logout</NavItem>
                <NavItem eventKey={2} href="/services">Services</NavItem>
                <NavItem eventKey={3} href="/favourites">Favourites</NavItem>
                <NavItem eventKey={7} href="/feedback">Feedback</NavItem>
            </Nav>
        );
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Rental Path</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/">Home</NavItem>
                    <NavItem eventKey={4} href="/mapbox">MapBox</NavItem>
                    <NavItem eventKey={4} href="/contactus">Contact Us</NavItem>
                    {isAuthenticated ? userLinks : guestLinks}
                 </Nav>
            </Navbar>
        );
    }
}
export default NavigationBar;



