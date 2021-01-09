import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledButtonDropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge, 
  Button
} from 'reactstrap';
// import { Button } from '@material-ui/core'
import VKM_Logo from './img/VKM_logo_v1.png';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!dropdownOpen);

  return (
    <div>
      <Navbar color="secondary" dark expand="md" sticky>
        <NavbarBrand><img src={VKM_Logo} alt="logo" height="54" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><Button variant="primary" className="mr-0 ml-0">Skills</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Button outline color="primary">Experience</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Button outline color="primary">Education</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Button outline color="primary">Info</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Button outline color="primary">Contact</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap"><Button outline color="primary">GitHub</Button></NavLink>
            </NavItem>
            <ButtonDropdown nav inNavbar isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret outline color="primary" style={{ height: '38px', marginTop: '8px'}}>
                Live demo
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  pCOWeb - HVAC Control
                </DropdownItem>
                <DropdownItem>
                  Water boiler control
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Piranha Music Shop
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Nav>
          <NavbarText><Badge color="primary"><h5 style={{ verticalAlign: 'middle'}}>Portfolio</h5></Badge></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;