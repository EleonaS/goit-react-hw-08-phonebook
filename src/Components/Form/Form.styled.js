import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 40px;
`;

const Label = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  height: 40px;
  padding-left: 10px;
  border: 1px;
  border-bottom: 1px solid green;
  font-size: 20px;
  color: black;
  background-color: transparent;
`;

const Button = styled.button`
  align-items: center;
  width: 200px;
  padding: 5px 10px;
  cursor: pointer;
  border: 2px solid green;
  border-radius: 7px;
  font-size: 18px;
  text-transform: uppercase;
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

export { Label, Input, Button, Form };
