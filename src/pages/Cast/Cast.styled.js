import styled from '@emotion/styled';

export const CastList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const CastTextWrapper = styled.div``;

export const CastItem = styled.li`
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.backgroundSection};
  border-radius: 1px solid #2a2a2a;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

export const CastImg = styled.img`
  max-width: 300px;
  margin-bottom: 8px;
`;

export const CastText = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
`;

export const CastName = styled.span`
  color: #2a2a2a;
  font-family: none;
  font-size: 28px;
  font-weight: 700;
`;

export const CastValue = styled.span`
  color: #2a2a2a;
  font-family: none;
  font-size: 24px;
  font-weight: 400;
`;

export const FailureText = styled.p`
  text-align: center;
  color: #2a2a2a;
  font-family: none;
  font-size: 28px;
  font-weight: 500;

  margin-top: 40px;
`;
