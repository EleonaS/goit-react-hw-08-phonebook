import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';
import {
  StylesProvider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {
  Form,
  StyledButton,
  StyledField,
  StyledAvatar,
} from './RegisterForm.styled';
//import { nanoid } from 'nanoid';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /*const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();*/

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StylesProvider injectFirst>
      <div>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            <Grid item align="center">
              <StyledAvatar />
              <Typography component="h1" variant="h6">
                Sign up
              </Typography>
            </Grid>
            <Grid item>
              <StyledField
                //id={nameInputId}
                value={name}
                name="name"
                type="text"
                label="Name"
                placeholder=""
                autoComplete="off"
                onChange={handleChange}
                required
                fullWidth
                InputProps={{ endAdornment: <AccountCircle /> }}
              />
            </Grid>
            <Grid item>
              <StyledField
                //id={emailInputId}
                value={email}
                name="email"
                type="email"
                label="Email"
                autoComplete="off"
                placeholder=""
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <MailOutlineIcon
                      edge="end"
                      style={{ position: 'absolute', right: 0 }}
                    />
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <StyledField
                //id={passwordInputId}
                name="password"
                value={password}
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder=""
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton
                      edge="end"
                      style={{ position: 'absolute', right: 0 }}
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item align="center">
              <StyledButton
                type="submit"
                color="primary"
                disabled={!name || !email || !password}
              >
                Sign up
              </StyledButton>
            </Grid>
            <Grid item align="center">
              <Typography>
                Already have an account?{'\u00A0'}
                <NavLink to="/login">Log in</NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </div>
    </StylesProvider>
  );
};

export { RegisterForm };
