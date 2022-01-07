import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from '../../redux/auth/auth-operations';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  Grid,
  StylesProvider,
  Typography,
  IconButton,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {
  Form,
  StyledButton,
  StyledField,
  StyledAvatar,
} from './LoginForm.styled';
//import { nanoid } from 'nanoid';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  //const InputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(logIn({ email, password }));
  };

  return (
    <StylesProvider injectFirst>
      <div>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            <Grid item align="center">
              <StyledAvatar>
                <LockOutlinedIcon />
              </StyledAvatar>
              <Typography component="h1" variant="h6">
                Log in
              </Typography>
            </Grid>
            <Grid item>
              <StyledField
                name="email"
                type="email"
                label="Email"
                autoComplete="off"
                placeholder="email@mail.com"
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
                name="password"
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
                disabled={!email || !password}
              >
                Log in
              </StyledButton>
            </Grid>
            <Grid item align="center">
              <Typography>
                Don't have an account?{'\u00A0'}
                <NavLink to="/register">Sign up</NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </div>
    </StylesProvider>
  );
};

export { LoginForm };
