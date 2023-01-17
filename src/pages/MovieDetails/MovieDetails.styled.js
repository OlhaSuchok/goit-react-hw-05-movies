import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieDetailsTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
  margin-left: 16px;
  color: #2a2a2a;
  font-size: 34px;
  font-family: none;
  text-align: center;
`;

export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 0;
  background-color: #e9fcfc;
  padding: 4px 8px;
  text-decoration: none;
  border: 1px solid #bdb76b;
  border-radius: 4px;
  cursor: pointer;

  color: white;
  background-color: #b0c4de;
  text-decoration: none;
  font-size: medium;
  font-family: system-ui;
  letter-spacing: 1.2;
  font-weight: 500;

  &:hover,
  focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      -23px 0 20px -23px rgba(0, 0, 0, 0.6),
      23px 0 20px -23px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(0, 0, 0, 0.1);
    border-color: transparent;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const GoBackButtonWrapper = styled.div`
  display: flex;
  align-items: self-end;
`;

export const MovieImg = styled.img`
  max-width: 400px;
  margin-bottom: 20px;
`;

export const NavLinks = styled(NavLink)`
  &:hover,
  focus {
    color: #8b4513;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    color: #8b4513;
  }
`;

export const DetailName = styled.span`
  color: #2a2a2a;
  font-family: none;
  font-size: 28px;
  font-weight: 700;
`;

export const DetailValue = styled.span`
  color: #2a2a2a;
  font-family: none;
  font-size: 24px;
  font-weight: 400;
`;

export const MovieTextDetails = styled.p`
  margin-top: 0;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MovieAdditionalItile = styled.h2`
  margin-top: 20px;
  margin-bottom: 8px;
  color: #2a2a2a;
  font-size: 30px;
  font-family: none;
`;

export const NavLinkItem = styled.li`
  margin-top: 0;
  margin-bottom: 8px;

  color: #4682b4;
  font-family: none;
  font-size: 24px;
  font-weight: 400;
`;

export const MovieImageWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.backgroundSection};
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

export const MovieTextDetailsWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.backgroundSection};
  margin-bottom: 20px;
  border-radius: 1px solid #2a2a2a;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

export const MovieAdditionalWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.backgroundSection};
  border-radius: 1px solid #2a2a2a;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

export const MovieDetailsWrapper = styled.div``;
