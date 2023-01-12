import styled from '@emotion/styled';

const StyledHeader = styled.header`
  padding: 10px;
  height: 30vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const StyledHeading = styled.h1`
  color: white;
  margin: 0;
`;

export default function Header({ children }) {
  return (
    <StyledHeader>
      <StyledHeading>Perfect Movies to Watch</StyledHeading>
      {children}
    </StyledHeader>
  );
}
