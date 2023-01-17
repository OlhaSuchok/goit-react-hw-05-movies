import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.backgroundSection};
  border-radius: 1px solid #2a2a2a;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

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

export const NavLinkPopularFilms = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: #8b4513;
  }
`;
