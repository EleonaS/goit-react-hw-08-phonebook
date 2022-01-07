import styled from 'styled-components';

////////
const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  /*border-radius: 50%;*/
  margin-right: 5px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 5px;
`;

const StyledText = styled.span`
  margin-right: 5px;
  color: grey;
  font-weight: 600;
`;

const StyledName = styled.span`
  composes: name;
  color: blue;
`;

const StyledButton = styled.button`
  padding: 5px 5px;
  border: 1px solid blue;
  border-radius: 5px;
  color: grey;
  font-size: 18px;
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
