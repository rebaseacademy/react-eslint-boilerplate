import styled from '@emotion/styled';
import { css } from '@emotion/react';

function handleVarient({ varient }) {
  if (varient === 'dark') {
    return css`
      background-color: darkblue;
      color: white;
    `;
  }

  return css`
    background-color: salmon;
    color: black;
  `;
}

const Button = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  height: 40px;
  cursor: pointer;

  ${handleVarient}
`;

export default Button;
