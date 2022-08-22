import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  text-align: center;
  background-color: rgb(160, 196, 189);
  /* background-color: rgb(151, 235, 285); */
  min-width: 500px;
  border-radius: 6px;
  border: 1px solid #c2c2c2;
  padding: 20px;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  text-shadow: 2px 2px 2px gray;
`;
