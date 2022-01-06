import styled from 'styled-components';

const StyledHeader = styled.header`
  /*position: fixed;*/
  background-color: #c3aeff;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  box-shadow: 1px 20px 20px -20px #333;
`;

const WrapperNav = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Box = styled.div`
  justify-content: space-between;
  /*font-weight: 600;font-size: 20px;*/
  display: flex;
  flex-direction: row;
  border: none;
  /* width: 300px;
  
  color: #000;*/
`;

export { StyledHeader, WrapperNav, Box };
