import styled from 'styled-components';

const Label = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 400px;
  display: block;
  margin-bottom: 20px;
  height: 40px;
  padding-left: 10px;
  border: 1px;
  border-bottom: 1px solid green;
  font-size: 20px;
  color: black;
  background-color: transparent;
`;

export { Label, Input };
