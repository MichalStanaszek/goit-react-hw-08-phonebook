import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';

import 'components/AuthForm/index.css';
import {
  Button,
  Form,
  Input,
  Label,
  Logo,
  Wrapper,
  StyledH2,
  StyledText,
  StyledLink,
} from './AuthForm.styled';

export const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const handleChangeInput = event => {
    const input = event.target;

    input.name === 'name' && setName(input.value);
    input.name === 'email' && setEmail(input.value);
    input.name === 'password' && setPassword(input.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (location === '/register') {
      if (name === '' || email === '' || password === '') return;
      dispatch(register({ name, email, password }));
    }

    if (location === '/login') {
      if (email === '' || password === '') return;
      dispatch(logIn({ email, password }));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} id="cont" className="cont">
        <Wrapper className="form sign-in">
          <StyledH2>
            {location === '/login'
              ? 'Would you like to contact with your friends?'
              : 'Welcome back, LOGIN'}
          </StyledH2>

          {location === '/register' && (
            <Label>
              <span>Name</span>
              <Input
                label="Name"
                name="name"
                type="text"
                value={name}
                onChange={handleChangeInput}
                required
              />
            </Label>
          )}
          <Label>
            <span>Email</span>
            <Input
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </Label>
          <Label>
            <span>Password</span>
            <Input
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleChangeInput}
              minLength={7}
              required
            />
          </Label>
          <Button type="submit">
            {location === '/register' ? 'Register' : 'Login'}
          </Button>
        </Wrapper>
        <Logo>
          {location === '/login' ? (
            <>
              <StyledText>Are you new here?</StyledText>
              <StyledLink to="/register">Sign up</StyledLink>
            </>
          ) : (
            <>
              <StyledText>Do you already have an account?</StyledText>
              <StyledLink to="/login">Sign in</StyledLink>
            </>
          )}
        </Logo>
      </Form>
    </>
  );
};
