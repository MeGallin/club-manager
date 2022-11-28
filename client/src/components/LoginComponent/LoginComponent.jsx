import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginComponent.scss';
import 'animate.css';

import {
  userLoginAction,
  googleUserLoginAction,
} from '../../store/actions/userActions';

import InputComponent from '../../components/Input/InputComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import SuccessComponent from '../Success/SuccessComponent';
import { NavLink } from 'react-router-dom';

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, success, userInfo } = userLogin;

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //Dispatch action
    dispatch(userLoginAction(email, password));

    setFormData({
      email: '',
      password: '',
    });
  };

  const navigateMessage = (
    <p className="animate__animated animate__bounceInLeft small-text">
      NAVIGATE to YOUR PROFILE by clicking here.
    </p>
  );

  const googleSuccess = async (googleRes) => {
    //Dispatch action that save google info from googleRes.
    dispatch(googleUserLoginAction(googleRes));
  };
  const googleFailure = (error) => {
    console.log('Error, with google login', error);
  };

  const googleUserLogin = useSelector((state) => state.googleUserLogin);
  const {
    loading: googleLoading,
    success: googleSuccessState,
    error: googleError,
    userInfo: googleUserIfo,
  } = googleUserLogin;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="You have successfully logged in!" />
      ) : null}

      {googleError ? <ErrorComponent error={error} /> : null}
      {googleSuccessState ? (
        <SuccessComponent message="You have successfully logged in through GOOGLE" />
      ) : null}

      {googleUserIfo && !userAdmin?.isAdmin && googleSuccessState ? (
        <ButtonComponent
          type="button"
          text={
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/user-admin"
            >
              {googleUserIfo?.username}, {navigateMessage}
            </NavLink>
          }
          variant="info"
          disabled={false}
        />
      ) : null}

      {userInfo && !userAdmin?.isAdmin && success ? (
        <ButtonComponent
          type="button"
          text={
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/user-admin"
            >
              {userInfo?.username}, {navigateMessage}
            </NavLink>
          }
          variant="info"
          disabled={false}
        />
      ) : null}

      {userAdmin?.isAdmin && success ? (
        <ButtonComponent
          type="button"
          text={
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/admin-profile"
            >
              {userInfo?.username}, {navigateMessage}
            </NavLink>
          }
          variant="info"
          disabled={false}
        />
      ) : null}

      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Login Form</legend>
          <div>
            <p>Welcome back, please login below</p>
            <form onSubmit={handleLoginSubmit}>
              <InputComponent
                label="EMAIL"
                value={email}
                type="email"
                name="email"
                required
                className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
                error={
                  !emailRegEx.test(email) && email.length !== 0
                    ? `Invalid email address.`
                    : null
                }
                onChange={handleOnChange}
              />
              <InputComponent
                label="Password"
                value={password}
                type="password"
                name="password"
                required
                className={password.length <= 5 ? 'invalid' : 'entered'}
                error={
                  password.length <= 5 && password.length !== 0
                    ? `Password must contain at least 6 characters`
                    : null
                }
                onChange={handleOnChange}
              />

              <div className="login-button-wrapper">
                <ButtonComponent
                  type="submit"
                  text={
                    !emailRegEx.test(email) || password.length <= 5
                      ? 'Disabled'
                      : 'login'
                  }
                  variant="dark"
                  disabled={!emailRegEx.test(email) || password.length <= 5}
                />

                {googleLoading ? (
                  <SpinnerComponent />
                ) : (
                  <GoogleOAuthProvider clientId="508473669508-okvrq23k3it6qna41r8fp2e6ffruqmcf.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={googleSuccess}
                      onError={googleFailure}
                    />
                  </GoogleOAuthProvider>
                )}
              </div>
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default LoginComponent;
