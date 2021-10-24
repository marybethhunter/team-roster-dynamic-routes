import React from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';

export default function Navigation() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mary Beth&apos;s Fantasy Team</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/team">Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/new">New</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
