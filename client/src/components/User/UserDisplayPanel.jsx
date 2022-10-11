import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './UserAdminPanel';
import { FaCheck, FaTimes } from 'react-icons/fa';

import { userAdminDetailsAction } from '../../store/actions/userActions';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import UserAdminPanel from './UserAdminPanel';
import ButtonComponent from '../../components/Button/ButtonComponent';

const UserDisplayPanel = () => {
  const dispatch = useDispatch();

  const [tokenExpiration] = useState(
    'You are about to be logged out. Your token has expired.',
  );
  const [showInputs, setShowInputs] = useState(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    //Dispatch your get action
    if (userInfo) {
      dispatch(userAdminDetailsAction());
    }
  }, [userInfo, dispatch]);

  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { success, error, userAdmin } = userAdminDetails;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      <ButtonComponent
        type="button"
        text={showInputs ? 'EDIT' : 'DISPLAY INFO'}
        variant="dark"
        disabled={false}
        onClick={() => setShowInputs(!showInputs)}
      />
      {success ? (
        showInputs ? (
          <>
            <div>
              <p>Photo to follow</p>
              <p>USER NAME : {userAdmin?.username}</p>

              <p>EMAIL : {userAdmin?.email}</p>
              <p>
                IS ADMIN :{' '}
                {userAdmin?.isAdmin === false ? <FaTimes /> : <FaCheck />}
              </p>
              <p>
                IS CONFIRMED :{' '}
                {userAdmin?.isConfirmed === false ? <FaTimes /> : <FaCheck />}
              </p>
              <p>
                IS SUSPENDED :{' '}
                {userAdmin?.isSuspended === false ? <FaTimes /> : <FaCheck />}
              </p>
              <p>CREATED : {userAdmin?.createdAt}</p>
              <p>UPDATED : {userAdmin?.updatedAt}</p>
            </div>
          </>
        ) : (
          <UserAdminPanel />
        )
      ) : (
        <SpinnerComponent />
      )}
      {userAdmin === undefined ? (
        <>
          <p>{tokenExpiration}</p>
        </>
      ) : null}
    </>
  );
};

export default UserDisplayPanel;
