import React from 'react';
import { Nav, NavLink } from 'react-bootstrap'; // Import Nav and NavLink from react-bootstrap

function Filter() {
  return (
    <Nav variant="tabs" defaultActiveKey="all">
      <NavLink href="#">Tất cả</NavLink>
      <NavLink href="#">Chưa hoàn thành</NavLink>
      <NavLink href="#">Hoàn thành</NavLink>
    </Nav>
  );
};

export default Filter;