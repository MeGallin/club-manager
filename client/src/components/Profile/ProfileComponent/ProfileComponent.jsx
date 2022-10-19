import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { profileGetProfileAction } from '../../../store/actions/profileActions';

import './ProfileComponent.scss';
import SpinnerComponent from '../../Spinner/SpinnerComponent';

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  useEffect(() => {
    if (userAdmin?._id) {
      dispatch(profileGetProfileAction(userAdmin?._id));
    }
  }, [dispatch, userAdmin?._id]);

  const profileGetProfile = useSelector((state) => state.profileGetProfile);
  const { loading, profile } = profileGetProfile;

  return loading ? (
    <SpinnerComponent />
  ) : profile ? (
    <fieldset className="fieldSet">
      <legend>Profile Details</legend>
      <div>
        <h3>PHOTO TO FOLLOW</h3>
        <p>Name {profile?.name}</p>
        <p>Email {profile?.email}</p>
        <p>Date of Birth {profile?.dateOfBirth}</p>
        <p>Description {profile?.description}</p>
        <p>Preferred Position {profile?.preferredPosition}</p>
        <p>Preferred Number {profile?.preferredNumber}</p>
        <p>Created {profile?.createdAt}</p>
        <p>Updated {profile?.updatedAt}</p>
      </div>
    </fieldset>
  ) : null;
};

export default ProfileComponent;
