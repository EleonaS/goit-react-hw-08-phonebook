import styled from 'styled-components';

////////
const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  margin-right: 10px;
  border-radius: 50%;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const StyledText = styled.span`
  margin-right: 15px;
  color: grey;
  font-weight: 600;
`;

const StyledName = styled.span`
  composes: name;
  color: blue;
`;

const StyledButton = styled.button`
  padding: 5px 10px;
  border: 1px solid red;
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: white;
    border-color: whitesmoke;
    color: #764fa8;
  }
`;

export {
  StyledBox,
  StyledImg,
  StyledWrapper,
  StyledText,
  StyledName,
  StyledButton,
};
