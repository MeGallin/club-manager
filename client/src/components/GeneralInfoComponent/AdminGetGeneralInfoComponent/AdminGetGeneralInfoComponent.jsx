import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import './AdminGetGeneralInfoComponent.scss';
import { adminGetGeneralInfoAction } from '../../../store/actions/adminGeneralInfoActions';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';
import AdminEditGeneralInfoComponent from '../AdminEditGeneralInfoComponent/AdminEditGeneralInfoComponent';
import AdminDeleteGeneralInfoComponent from '../AdminDeleteGeneralInfoComponent/AdminDeleteGeneralInfoComponent';
import SearchComponent from '../../SearchComponent/SearchComponent';
import ButtonComponent from '../../Button/ButtonComponent';
import AdminCreateGeneralInfoComponent from '../AdminCreateGeneralInfoComponent/AdminCreateGeneralInfoComponent';
import SearchHighlightComponent from '../../SearchHighlightComponent/SearchHighlightComponent';
import LogoComponent from '../../LogoComponent/LogoComponent';

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

  // Search posts
  const [keyword, setKeyword] = useState('');
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  const searchedPosts = posts?.filter((post) => {
    if (
      post.heading.toLowerCase().includes(keyword.toLowerCase()) ||
      post.post.toLowerCase().includes(keyword.toLowerCase())
    ) {
      return post;
    }
    return false;
  });

  return (
    <div>
      {error ? <ErrorComponent error={error} /> : null}
      <div className="admin-get-player__top-wrapper">
        {userAdmin?.isAdmin ? (
          <ModalComponent
            className="create-btn"
            openButtonTitle="Create A NEW POST"
            closeButtonTitle="Close modal"
            variant="success"
            props={
              <>
                <AdminCreateGeneralInfoComponent />
              </>
            }
          />
        ) : null}
        <SearchComponent
          placeholder="SEARCH POST"
          value={keyword}
          onChange={handleSearch}
          quantity={searchedPosts?.length}
          total={posts?.length}
        />

        {userAdmin?.isAdmin ? (
          <ButtonComponent
            type="button"
            text={
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/admin-profile"
              >
                Go Back
              </NavLink>
            }
            variant="info"
            disabled={false}
          />
        ) : null}
      </div>

      {loading ? (
        <SpinnerComponent />
      ) : success && searchedPosts ? (
        <div className="wrapper">
          {searchedPosts?.map((post) => (
            <div key={post._id} className="inner-content-wrapper">
              <div>
                <fieldset className="fieldSet">
                  <legend>
                    <SearchHighlightComponent
                      value={post.heading}
                      keyword={keyword}
                    />
                  </legend>
                  <LogoComponent />
                  <SearchHighlightComponent
                    value={post.post}
                    keyword={keyword}
                  />

                  <p className="small-text">BY: {post.name}</p>
                  {userAdmin?.isAdmin ? (
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
                  ) : null}
                  <div className="dates-wrapper">
                    <p> Created: {moment(post.createdAt).fromNow()}</p>
                    <p> Updated: {moment(post.updatedAt).fromNow()}</p>
                  </div>
                </fieldset>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AdminGetGeneralInfoComponent;
