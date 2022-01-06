import styled from 'styled-components';
import { Avatar, Button, TextField } from '@material-ui/core';
//import { Link } from "react-router-dom";

const Form = styled.form`
  margin: 10vh auto;
  padding: 40px;
  max-width: 400px;
  background-color: #e9dfff;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px 5px;
  border-radius: 5px;
`;

const StyledButton = styled(Button)`
  padding: 5px 10px;
  border: 1px solid #b479ff;
  color: black;
  /*background-color: #E9DFFF ;*/
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: white;
    border-color: whitesmoke;
    color: #764fa8;
    font-weight: 700;
  }
`;

const StyledField = styled(TextField)`
  label {
    color: #b479ff;
  }
  svg {
    color: #b479ff;
  }

  .MuiInput-underline::before {
    border-bottom: 2px solid gray;
  }
  .MuiInput-underline:hover::before {
    border-bottom-color: #b479ff;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-bottom: 20px;
  background-color: whitesmoke;
  color: #b479ff;
`;

export { Form, StyledButton, StyledField, StyledAvatar };
