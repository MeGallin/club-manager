import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ForgotPWComponent.scss';

import { userForgotEmailAction } from '../../store/actions/userActions';

import InputComponent from '../../components/Input/InputComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import SuccessComponent from '../Success/SuccessComponent';

const ForgotPWComponent = () => {
  const dispatch = useDispatch();

  const userForgotEmail = useSelector((state) => state.userForgotEmail);
  const { loading, error, success } = userForgotEmail;

  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  const [email, setEmail] = useState('');

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPWSubmit = (e) => {
    e.preventDefault();
    //Dispatch action
    dispatch(userForgotEmailAction(email));
    setEmail('');
  };

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Your request was successfully. Please check your email!" />
      ) : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Forgot Password Form</legend>
          <div>
            <p>
              Simply send us your email address and we will send you an email
              with a reset link.
            </p>
            <form onSubmit={handleForgotPWSubmit}>
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

              <ButtonComponent
                type="submit"
                text={
                  !emailRegEx.test(email) ? 'Disabled' : 'send email address'
                }
                variant="info"
                disabled={!emailRegEx.test(email)}
              />
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default ForgotPWComponent;
