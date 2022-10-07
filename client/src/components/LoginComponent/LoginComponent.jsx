import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginComponent.scss';

import { userLoginAction } from '../../store/actions/userActions';

import InputComponent from '../../components/Input/InputComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import SuccessComponent from '../Success/SuccessComponent';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, success } = userLogin;

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

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="You have successfully logged in!" />
      ) : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Login Form</legend>
          <div>
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

              <ButtonComponent
                type="submit"
                text="submit"
                variant="primary"
                disabled={!emailRegEx.test(email) || password.length <= 5}
              />
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default LoginComponent;
