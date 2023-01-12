import styled from '@emotion/styled';
import Button from './Button';

const StyledDescription = styled.p`
  position: absolute;
  top: 100%;
  opacity: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fa807291;
  color: white;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  transition: top 0.3s linear, opacity 0.5s linear;
`;

const StyledWrapper = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: bottom;
  width: 450px;
  height: 200px;
  position: relative;
  overflow: hidden;

  &:hover > p {
    top: 0;
    opacity: 1;
  }
`;

const StyledTitle = styled.h4`
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
  color: white;
  padding: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
`;

export default function Movie({ title, description, image }) {
  return (
    <StyledWrapper image={image}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>
        {description}
        <Button varient="dark">View More</Button>
      </StyledDescription>
    </StyledWrapper>
  );
}
