import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  margin: 16px 0;
  border: none;
  background: #ff9000;
  padding: 0 16px;
  color: #312e38;
  border-radius: 10px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
