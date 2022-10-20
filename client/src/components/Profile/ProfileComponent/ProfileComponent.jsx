import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import {
  profileGetProfileAction,
  profileDeleteProfileAction,
} from '../../../store/actions/profileActions';

import './ProfileComponent.scss';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import ButtonComponent from '../../Button/ButtonComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';

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
  const handleDeleteProfile = (profileId) => {
    // dispatch delete action
    if (
      window.confirm(
        `Are you sure you want to delete profile for ${profile?.name} ?`,
      )
    ) {
      dispatch(profileDeleteProfileAction(profileId, profile?.user));
    }
  };

  const profileDeleteProfile = useSelector(
    (state) => state.profileDeleteProfile,
  );
  const { success, error } = profileDeleteProfile;

  return loading ? (
    <SpinnerComponent />
  ) : profile ? (
    <>
      <fieldset className="fieldSet">
        <legend>Profile Details</legend>
        <div>
          <h3>PHOTO TO FOLLOW</h3>
          <span>Profile id: {profile?._id}</span>
          <p>Name {profile?.name}</p>
          <p>Email {profile?.email}</p>
          <p>Date of Birth {profile?.dateOfBirth}</p>
          <p>Description {profile?.description}</p>
          <p>Preferred Position {profile?.preferredPosition}</p>
          <p>Preferred Number {profile?.preferredNumber}</p>
          <p>Created {moment(profile?.createdAt).fromNow()}</p>
          <p>Updated {moment(profile?.updatedAt).fromNow()}</p>
        </div>
      </fieldset>

      <fieldset className="fieldSet">
        <ButtonComponent
          type="button"
          text="Delete Profile"
          variant="danger"
          disabled={false}
          onClick={() => handleDeleteProfile(profile?._id)}
        />
      </fieldset>
    </>
  ) : (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message="Profile was successfully removed." />
      ) : null}
    </>
  );
};

export default ProfileComponent;
