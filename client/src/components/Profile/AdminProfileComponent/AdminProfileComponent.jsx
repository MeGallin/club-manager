import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './AdminProfileComponent.scss';

import ErrorComponent from '../../ErrorComponent/ErrorComponent';

import moment from 'moment';

import {
  adminAllProfilesAction,
  adminProfileAction,
} from '../../../store/actions/adminActions';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import AdminCreateProfileComponent from '../AdminCreateProfileComponent/AdminCreateProfileComponent';
import AdminEditProfileComponent from '../AdminEditProfileComponent/AdminEditProfileComponent';

const AdminProfileComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  useEffect(() => {
    if (!userInfo && !userAdmin?.isAdmin) {
      navigate('/login');
    } else {
      dispatch(adminAllProfilesAction());
    }
  }, [navigate, dispatch, userInfo, userAdmin]);

  const adminAllProfiles = useSelector((state) => state.adminAllProfiles);
  const { loading, error, profiles } = adminAllProfiles;

  const adminProfile = profiles?.filter((profile) => {
    if (profile?.user === userAdmin?._id) {
      return profile;
    }
    return false;
  });

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          {adminProfile?.length === 0 ? (
            <>
              <AdminCreateProfileComponent />
            </>
          ) : (
            <>
              <AdminEditProfileComponent />
              <fieldset className="fieldSet">
                <legend>ADMIN Profile</legend>
                {adminProfile?.map((profile) => (
                  <div key={profile._id}>
                    <h3>PHOTO TO FOLLOW</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                    <p>Phone: {profile.phone}</p>
                    <p> Description: {profile.description}</p>
                    <p> DoB: {profile.dateOfBirth}</p>
                    <p> Created: {moment(profile.createdAt).fromNow()}</p>
                    <p> Updated: {moment(profile.updatedAt).fromNow()}</p>
                  </div>
                ))}
              </fieldset>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AdminProfileComponent;
