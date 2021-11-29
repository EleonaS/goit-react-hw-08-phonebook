import styled from 'styled-components';
const Button = styled.button`
  margin-left: 20px;
  width: 100px;
  height: 30px;
  vertical-align: text-bottom;
  outline: none;
  border-width: 1px;
  border-radius: 7px;
  background-color: white;
  font-size: 18px;
  padding: 0 9px;
  color: black;
  background-color: transparent;
  transition: all 250ms ease-in-out;
  &:hover {
    border-color: gray;
    color: green;
    font-weight: 600;
    background-color: white;
  }
`;
export { Button };
