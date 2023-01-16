import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;
  height: 40px;
  background-color: #ffefd5;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

export const NavLinkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffdab9;
  padding: 8px 14px;
  text-decoration: none;
  border: 1px solid #bdb76b;
  border-radius: 4px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &:hover {
    background-color: #ffffe0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      -23px 0 20px -23px rgba(0, 0, 0, 0.6),
      23px 0 20px -23px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(0, 0, 0, 0.1);
    border-color: transparent;
  }

  &:focus {
    background-color: #ffffe0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      -23px 0 20px -23px rgba(0, 0, 0, 0.6),
      23px 0 20px -23px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(0, 0, 0, 0.1);
    border-color: transparent;
  }

  &.active {
    background-color: #ffffe0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      -23px 0 20px -23px rgba(0, 0, 0, 0.6),
      23px 0 20px -23px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(0, 0, 0, 0.1);
    border-color: transparent;
  }
`;

export const NavLinkItem = styled(NavLink)`
  color: #8b4513;
  text-decoration: none;
  font-size: large;
  font-family: fantasy;
  letter-spacing: 1.8;
`;
