import styled from '@emotion/styled';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  padding: 10px;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
  cursor: pointer;
  width: 100px;
  font-size: 15px;
  &:hover,
  &:focus {
    background-color: lightgrey;
    transform: scale(1.05);
  }
`;
