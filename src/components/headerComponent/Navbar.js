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

const IndexNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
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
    </div>
  );
}

export default IndexNavbar;