import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const ReviewsItem = styled.li`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f7ffee;
  border-radius: 1px solid #2a2a2a;

  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;
export const ReviewsText = styled.p``;
export const ReviewsAuthor = styled.span`
  color: #2a2a2a;
  font-family: none;
  font-size: 28px;
  font-weight: 700;
`;
export const ReviewsValue = styled.span`
  color: #2a2a2a;
  font-family: none;
  font-size: 24px;
  font-weight: 400;
`;
export const ReviewsContent = styled.p`
  color: #2a2a2a;
  font-family: none;
  font-size: 24px;
  font-weight: 400;
  text-align: justify;
`;
