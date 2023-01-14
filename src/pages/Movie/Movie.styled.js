import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  outline: none;
  padding: 8px 14px;
  border: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchMovieList = styled.ul`
  margin: 0;
`;
export const SearchMovieListItem = styled.li`
  color: #2a2a2a;
  font-size: 24px;
  font-family: none;
`;

export const NavLinkSearchMovie = styled(NavLink)`
  text-decoration: none;
`;
