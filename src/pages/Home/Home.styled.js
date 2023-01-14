import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  color: #2a2a2a;
  font-size: 34px;
  font-family: none;
`;

export const HomeList = styled.ul`
  margin: 0;
`;
export const HomeListItem = styled.li`
  color: #2a2a2a;
  font-size: 24px;
  font-family: none;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
`;
