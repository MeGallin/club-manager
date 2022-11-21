import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AdminGetPublicNoticeComponent.scss';
import { useSelector } from 'react-redux';

import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import SearchComponent from '../../SearchComponent/SearchComponent';
import SearchHighlightComponent from '../../SearchHighlightComponent/SearchHighlightComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';
import ButtonComponent from '../../Button/ButtonComponent';
import AdminCreatePublicNoticeComponent from '../AdminCreatePublicNoticeComponent/AdminCreatePublicNoticeComponent';
import AdminEditPublicNoticeComponent from '../AdminPublicNoticeEditComponent/AdminEditPublicNoticeComponent';
import moment from 'moment';
import AdminDeletePublicNoticeComponent from '../AdminDeletePublicNoticeComponent/AdminDeletePublicNoticeComponent';

const AdminGetPublicNoticeComponent = () => {
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  const getPublicNotice = useSelector((state) => state.getPublicNotice);
  const { loading, error, success, notices } = getPublicNotice;

  // Search notices
  const [keyword, setKeyword] = useState('');
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  const searchedNotices = notices?.filter((post) => {
    if (
      post.heading.toLowerCase().includes(keyword.toLowerCase()) ||
      post.post.toLowerCase().includes(keyword.toLowerCase())
    ) {
      return post;
    }
    return false;
  });

  return (
    <>
      <div className="admin-get-player__top-wrapper">
        {userAdmin?.isAdmin ? (
          <ModalComponent
            className="create-btn"
            openButtonTitle="Create A NEW Notice"
            closeButtonTitle="Close modal"
            variant="success"
            props={
              <>
                <AdminCreatePublicNoticeComponent />
              </>
            }
          />
        ) : null}
        <fieldset className="fieldSet">
          <SearchComponent
            placeholder="SEARCH A Title"
            value={keyword}
            onChange={handleSearch}
            quantity={searchedNotices?.length}
            total={notices?.length}
          />
        </fieldset>

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

      <h1>Public Notices</h1>

      {loading ? (
        <SpinnerComponent />
      ) : success && searchedNotices ? (
        <div className="wrapper">
          {searchedNotices.map((notice) => (
            <div key={notice?._id} className="inner-content-wrapper">
              <fieldset className="fieldSet">
                <legend>
                  {' '}
                  <SearchHighlightComponent
                    value={notice.heading}
                    keyword={keyword}
                  />
                </legend>

                <h1>{notice.heading}</h1>

                <SearchHighlightComponent
                  value={notice.post}
                  keyword={keyword}
                />
                <p className="small-text">BY: {notice.name}</p>

                <div className="button-wrapper">
                  <ModalComponent
                    className="create-btn"
                    openButtonTitle="Edit Post"
                    closeButtonTitle="Close modal"
                    variant="warning"
                    props={
                      <>
                        <AdminEditPublicNoticeComponent postId={notice._id} />
                      </>
                    }
                  />
                  <AdminDeletePublicNoticeComponent
                    noticeId={notice._id}
                    noticeTitle={notice.heading}
                  />
                </div>

                <div className="dates-wrapper">
                  <p> Created: {moment(notice.createdAt).fromNow()}</p>
                  <p> Updated: {moment(notice.updatedAt).fromNow()}</p>
                </div>
              </fieldset>
            </div>
          ))}
        </div>
      ) : error ? (
        <ErrorComponent error={error} />
      ) : null}
    </>
  );
};

export default AdminGetPublicNoticeComponent;
