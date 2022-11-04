import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import './AdminGetGeneralInfoComponent.scss';
import { adminGetGeneralInfoAction } from '../../../store/actions/adminGeneralInfoActions';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';

const AdminGetGeneralInfoComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  useEffect(() => {
    let ignore = false;
    if (!userInfo && !userAdmin?.isAdmin) {
      navigate('/login');
    } else {
      if (!ignore) dispatch(adminGetGeneralInfoAction());
    }
    return () => (ignore = true);
  }, [navigate, dispatch, userInfo, userAdmin]);

  const adminGetGeneralInfo = useSelector((state) => state.adminGetGeneralInfo);
  const { loading, success, error, posts } = adminGetGeneralInfo;
  console.log(posts);
  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      <div className="inner-content-wrapper">
        <fieldset className="fieldSet">
          <legend>General Information</legend>
          <h3>Anorthosis Famagusta Academy - Larnaca Division</h3>
          {loading ? (
            <SpinnerComponent />
          ) : success && posts ? (
            posts?.map((post) => (
              <div key={post._id}>
                <h3>{post.heading}</h3>
                <p>{post.post}</p>
                <p>POST BY: {post.name}</p>
                <div className="dates-wrapper">
                  <p> Created: {moment(post.createdAt).fromNow()}</p>
                  <p> Updated: {moment(post.updatedAt).fromNow()}</p>
                </div>
                <button className="button">Edit</button>
                <button className="button">Delete</button>
              </div>
            ))
          ) : null}
          <h3>This will only be visible to registered members/users</h3>
        </fieldset>
      </div>
    </>
  );
};

export default AdminGetGeneralInfoComponent;
