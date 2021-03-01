import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
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
import logo1 from '../../assets/logo1.png';

const IndexNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const deleteCred = () => {
    localStorage.removeItem('creds');
    window.location.assign('/');
  }

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
  
const creds=JSON.parse(localStorage.getItem("creds"));
const [uu,setuu] =useState();

// console.log(uu);

const handle="/profile/"+uu;

useEffect(() => {
  if(creds)
  {
    setuu(creds.username);
  }
},[])

if(creds){
  return(
    <div>
      <Navbar id="navbar" color="light" light expand="md" style={{background:'transparent !important', paddingLeft: '6%', paddingRight: '6% '}}>
        <NavbarBrand href="/"><img src={logo1} id="BrandLogo"/>CODEDIGGER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem>
              <NavLink href="/problems">Problems</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Upsolve
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <NavLink href="/upsolve/codeforces">Codeforces</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/upsolve/codechef">Codechef</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/upsolve/atcoder">Atcoder</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ladders
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <NavLink href="/topicwise/ladder">Topicwise</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/levelwise/ladder">Levelwise</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Practice
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <NavLink href="/topicwise/practice">Topicwise</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/levelwise/practice">Levelwise</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavItem>
              <NavLink href="/profile">Hello, {creds.username}</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 Hello, {creds.username}
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <NavLink href={handle}>Profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/updateProfile">Edit Profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href={`/change_password_request`}>Edit Password</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href={`/list/${uu}`}>Lists</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink onClick={deleteCred}>Log Out</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>   
        </Collapse>
      </Navbar>

    </div>
    )
}else

  return (
    <div>
      <Navbar id="navbar" color="light" light expand="md">
        <NavbarBrand href="/">CODEDIGGER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem>
              <NavLink href="/problems">Problems</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Upsolve
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <NavLink href="/upsolve/codeforces">Codeforces</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/upsolve/codechef">Codechef</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/upsolve/atcoder">Atcoder</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ladders
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <NavLink href="/topicwise/ladder">Topicwise</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/levelwise/ladder">Levelwise</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Practice
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <NavLink href="/topicwise/practice">Topicwise</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/levelwise/practice">Levelwise</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/login">Login/Register</NavLink>
            </NavItem>
          </Nav>   
        </Collapse>
      </Navbar>
      {/* <br/>
      <br/>
      <br/>  */}

    </div>

  );
}

export default IndexNavbar;