import styled from 'styled-components';

export const MovieDetailsTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
  color: #2a2a2a;
  font-size: 34px;
  font-family: none;
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

  color: #8b4513;
  text-decoration: none;
  font-size: medium;
  font-family: system-ui;
  letter-spacing: 1.2;
  font-weight: 500;

  &:hover,
  focus {
    background-color: #ffffe0;
  }
`;

export const MovieImg = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
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
  background-color: #f7ffee;
  margin-bottom: 20px;
  /* border-radius: 2px solid red; */

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

export const MovieTextDetailsWrapper = styled.div`
  padding: 20px;
  background-color: #f7ffee;
  margin-bottom: 20px;
  border-radius: 1px solid #2a2a2a;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

export const MovieAdditionalWrapper = styled.div`
  padding: 20px;
  background-color: #f7ffee;
  border-radius: 1px solid #2a2a2a;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

export const MovieDetailsWrapper = styled.div`
  /* background-color: #f7ffee; */
`;
