import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { userResetPasswordAction } from '../../store/actions/userActions';

import InputComponent from '../../components/Input/InputComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SpinnerComponent from '../../components/Spinner/SpinnerComponent';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import SuccessComponent from '../../components/Success/SuccessComponent';

const PWResetView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [password, setPassword] = useState('');

  const userResetPassword = useSelector((state) => state.userResetPassword);
  const { loading, error, success } = userResetPassword;

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //Dispatch action
    dispatch(
      userResetPasswordAction({
        password: password,
        resetPasswordToken: params.token,
      }),
    );
    setPassword('');
    setTimeout(() => {
      navigate('/login');
    }, 6000);
  };

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Password was successfully changed. You will be routed shortly" />
      ) : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Reset Password</legend>
          <div>
            <form onSubmit={handleLoginSubmit}>
              <InputComponent
                label="New Password"
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
                disabled={password.length <= 5}
              />
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default PWResetView;
