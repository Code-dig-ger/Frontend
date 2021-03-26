import React, { useState, useEffect } from 'react';
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
      <Navbar id="navbar" color="dark" light expand="md" style={{background:'transparent !important', paddingRight: '3% '}}>
        <NavbarBrand href="/" light><img src={logo1} id="BrandLogo"/>CODEDIGGER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
          {/* <NavItem style={{color: 'white'}}>
              <NavLink style={{color: 'white'}} href="/problems">Problems</NavLink>
            </NavItem> */}
            

          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'white'}}>
                Practice
              </DropdownToggle>
              <DropdownMenu left className="dropdown_background">
                <DropdownItem>
                <NavLink className="dropdown_link" href="/topicwise/practice">Topicwise</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/levelwise/practice">Levelwise</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'white'}}>
                Ladders
              </DropdownToggle>
              <DropdownMenu left className="dropdown_background">
                <DropdownItem>
                <NavLink className="dropdown_link" href="/topicwise/ladder">Topicwise</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/levelwise/ladder">Levelwise</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'white'}}>
                Upsolve
              </DropdownToggle>
              <DropdownMenu left className="dropdown_background">
                <DropdownItem>
                <NavLink className="dropdown_link" href="/upsolve/codeforces">Codeforces</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/upsolve/codechef">Codechef</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/upsolve/atcoder">Atcoder</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            

            
            {/* <NavItem>
              <NavLink href="/profile">Hello, {creds.username}</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'white'}}>
                 Hello, {creds.username}
              </DropdownToggle>
              <DropdownMenu left className="dropdown_background">
                <DropdownItem>
                <NavLink className="dropdown_link" href={handle}>Profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/updateProfile">Edit Profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href={`/change_password_request`}>Edit Password</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href={`/list/${uu}`}>Problem Lists</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" onClick={deleteCred}>Log Out</NavLink>
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
     <Navbar id="navbar" color="dark" light expand="md" style={{background:'transparent !important', paddingLeft: '3%', paddingRight: '4% '}}>
        <NavbarBrand href="/" light><img src={logo1} id="BrandLogo"/>CODEDIGGER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            {/* <NavItem style={{color: 'white'}}>
              <NavLink style={{color: 'white'}} href="/problems">Problems</NavLink>
            </NavItem> */}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'white'}}>
                Practice
              </DropdownToggle>
              <DropdownMenu left className="dropdown_background">
                <DropdownItem>
                <NavLink className="dropdown_link" href="/topicwise/practice">Topicwise</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/levelwise/practice">Levelwise</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'white'}}>
                Ladders
              </DropdownToggle>
              <DropdownMenu left className="dropdown_background">
                <DropdownItem>
                <NavLink className="dropdown_link" href="/topicwise/ladder">Topicwise</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/levelwise/ladder">Levelwise</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'white'}}>
                Upsolve
              </DropdownToggle>
              <DropdownMenu left className="dropdown_background">
                <DropdownItem>
                <NavLink className="dropdown_link" href="/upsolve/codeforces">Codeforces</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/upsolve/codechef">Codechef</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className="dropdown_link" href="/upsolve/atcoder">Atcoder</NavLink>
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>

            

            
            {/* <NavItem>
              <NavLink href="/profile">Hello, {creds.username}</NavLink>
            </NavItem> */}
            <NavLink style={{color: 'white'}} href="/login">Login/Register</NavLink>
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