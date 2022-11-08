import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import './AdminGetGeneralInfoComponent.scss';
import { adminGetGeneralInfoAction } from '../../../store/actions/adminGeneralInfoActions';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';
import AdminEditGeneralInfoComponent from '../AdminEditGeneralInfoComponent/AdminEditGeneralInfoComponent';
import AdminDeleteGeneralInfoComponent from '../AdminDeleteGeneralInfoComponent/AdminDeleteGeneralInfoComponent';

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
              <div key={post._id} className="post-wrapper">
                <h3>{post.heading}</h3>
                <p>{post.post}</p>
                <p className="small-text">BY: {post.name}</p>
                <div className="dates-wrapper">
                  <p> Created: {moment(post.createdAt).fromNow()}</p>
                  <p> Updated: {moment(post.updatedAt).fromNow()}</p>
                </div>

                {userAdmin?.isAdmin ? (
                  <>
                    <div className="button-wrapper">
                      <ModalComponent
                        className="create-btn"
                        openButtonTitle="Edit Post"
                        closeButtonTitle="Close modal"
                        variant="warning"
                        props={
                          <>
                            <AdminEditGeneralInfoComponent postId={post._id} />
                          </>
                        }
                      />
                      <AdminDeleteGeneralInfoComponent
                        postId={post._id}
                        postTitle={post.heading}
                      />
                    </div>
                  </>
                ) : null}
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
