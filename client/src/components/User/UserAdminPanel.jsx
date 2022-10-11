import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserDisplayPanel';

import { userUpdateAdminDetailsAction } from '../../store/actions/userActions';

import InputComponent from '../../components/Input/InputComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import SuccessComponent from '../Success/SuccessComponent';

const UserAdminPanel = () => {
  const dispatch = useDispatch();
  const usernameRegEx = /[a-zA-Z]{4,}/;
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { loading, success, error, userAdmin } = userAdminDetails;
  const [formData, setFormData] = useState({
    id: userAdmin?._id,
    username: userAdmin !== undefined ? userAdmin?.username : '',
    email: userAdmin !== undefined ? userAdmin?.email : '',
    password: '',
  });
  const { username, email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    //Dispatch action
    dispatch(userUpdateAdminDetailsAction(formData));
  };

  const userUpdateAdminDetails = useSelector(
    (state) => state.userUpdateAdminDetails,
  );
  const {
    loading: updateLoading,
    success: updateSuccess,
    error: updateError,
  } = userUpdateAdminDetails;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {updateError ? <ErrorComponent error={updateError} /> : null}
      {updateSuccess ? (
        <SuccessComponent message={'Update was successful'} />
      ) : null}
      {updateLoading ? <SpinnerComponent /> : null}

      {success ? (
        <>
          <form onSubmit={handleUpdateSubmit}>
            <InputComponent
              label="User Name"
              value={username}
              type="text"
              name="username"
              required
              className={!usernameRegEx.test(username) ? 'invalid' : 'entered'}
              error={
                !usernameRegEx.test(username) && username?.length !== 0
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
                !emailRegEx.test(email) && email?.length !== 0
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
                password.length <= 5 && password?.length !== 0
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
                !emailRegEx.test(email) || !usernameRegEx.test(username)
              }
            />
          </form>
        </>
      ) : loading ? (
        <SpinnerComponent />
      ) : null}
    </>
  );
};

export default UserAdminPanel;
