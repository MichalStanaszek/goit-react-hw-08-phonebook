import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';

import 'components/AuthForm/index.css';

export const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.getElementById('imgBtn').addEventListener('click', function () {
      document.getElementById('cont').classList.toggle('s--signup');
    });
  }, []);

  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const handleChangeInput = e => {
    const input = e.target;

    input.name === 'name' && setName(input.value);
    input.name === 'email' && setEmail(input.value);
    input.name === 'password' && setPassword(input.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

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
    <form onSubmit={handleSubmit} id="cont" className="cont">
      <div className="form sign-in">
        <h2>Welcome back, LOGIN</h2>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit">
          Sign In
        </button>
        <button type="button" className="fb-btn">
          Connect with <span>facebook</span>
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>
              If you already have an account, just sign in. We've missed you!
            </p>
          </div>
          <div id="imgBtn" className="img__btn">
            <Link to="/register">
              <span className="m--up">Sign Up</span>
            </Link>
            <Link to="/login">
              <span className="m--in">Sign In</span>
            </Link>
          </div>
        </div>

        <div className="form sign-up">
          <h2>Time to feel like home, REGISTER</h2>
          {location === '/register' && (
            <label>
              <span>Name</span>
              <input
                label="Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
                type="text"
              />
            </label>
          )}
          <label>
            <span>Email</span>
            <input
              label="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              type="email"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              label="Password"
              name="password"
              value={password}
              onChange={handleChangeInput}
              type="password"
              minLength={7}
            />
          </label>
          <button type="submit" className="submit">
            Sign Up
          </button>
          <button type="button" className="fb-btn">
            Join with <span>facebook</span>
          </button>
        </div>
      </div>
    </form>
  );
};
