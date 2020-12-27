import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './header.css';

const IndexNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

  return (
    <div>
      <Navbar id="navbar" color="light" light expand="md">
        <NavbarBrand href="/">CODEDIGGER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Upsolve
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/upsolve/rated">Rated</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/upsolve/virtual">Virtual</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ladders
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/laddersTopic">Topicwise</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/laddersLevel">Levelwise</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Practice
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/practiceTopic">Topicwise</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/practiceLevel">Levelwise</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/logreg">Login/Register</NavLink>
            </NavItem>
          </Nav>   
        </Collapse>
      </Navbar>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default IndexNavbar;