import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegistrationComponent.scss';
import { userRegistrationAction } from '../../store/actions/userActions';

import InputComponent from '../../components/Input/InputComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import SuccessComponent from '../Success/SuccessComponent';

const RegistrationComponent = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;

  const usernameRegEx = /[a-zA-Z]{4,}/;
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  const userRegistration = useSelector((state) => state.userRegistration);
  const { loading, error, success } = userRegistration;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    //Dispatch action
    dispatch(userRegistrationAction(formData));

    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Registration has been successful" />
      ) : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Registration Form</legend>
          <div>
            <form onSubmit={handleRegistrationSubmit}>
              <InputComponent
                label="User Name"
                value={username}
                type="text"
                name="username"
                required
                className={
                  !usernameRegEx.test(username) ? 'invalid' : 'entered'
                }
                error={
                  !usernameRegEx.test(username) && username.length !== 0
                    ? `Username must contain at least 5 characters`
                    : null
                }
                onChange={handleOnChange}
              />
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
                disabled={
                  !emailRegEx.test(email) ||
                  !usernameRegEx.test(username) ||
                  password.length <= 5
                }
              />
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default RegistrationComponent;
