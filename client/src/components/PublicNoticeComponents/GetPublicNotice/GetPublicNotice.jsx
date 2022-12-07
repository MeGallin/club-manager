import { useEffect, useState } from 'react';
import './GetPublicNotice.scss';
import { FaInfoCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { getPublicNoticeAction } from '../../../store/actions/adminPublicNoticeActions';

import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import LogoComponent from '../../LogoComponent/LogoComponent';
import SearchComponent from '../../SearchComponent/SearchComponent';
import SearchHighlightComponent from '../../SearchHighlightComponent/SearchHighlightComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';
import moment from 'moment';

const GetPublicNotice = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(getPublicNoticeAction());
    }
    return () => (ignore = true);
  }, [dispatch]);

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
      {loading ? (
        <SpinnerComponent />
      ) : success && searchedNotices ? (
        <>
          <SearchComponent
            placeholder="SEARCH A TITLE"
            value={keyword}
            onChange={handleSearch}
            quantity={searchedNotices?.length}
            total={notices?.length}
          />

          <div className="wrapper">
            {searchedNotices.map((notice) => (
              <div key={notice?._id} className="inner-content-wrapper">
                <fieldset className="fieldSet">
                  <legend>
                    {' '}
                    <SearchHighlightComponent
                      value={notice?.heading}
                      keyword={keyword}
                    />
                  </legend>
                  <LogoComponent />

                  <div className="search-model-wrapper" title="read more">
                    <SearchHighlightComponent
                      value={notice?.post.slice(0, 40) + '...'}
                      keyword={keyword}
                    />

                    <ModalComponent
                      className="modal-btn"
                      openButtonTitle={<FaInfoCircle id="read-more-modal" />}
                      closeButtonTitle="Close"
                      variant="info"
                      props={
                        <>
                          <h3>{notice.heading}</h3>
                          <p className="small-text">Post by: {notice.name}</p>
                          <SearchHighlightComponent
                            value={notice.post}
                            keyword={keyword}
                          />

                          <div className="dates-wrapper">
                            <p>
                              {' '}
                              Created: {moment(notice.createdAt).fromNow()}
                            </p>
                            <p>
                              {' '}
                              Updated: {moment(notice.updatedAt).fromNow()}
                            </p>
                          </div>
                        </>
                      }
                    />
                  </div>
                  <p className="small-text">Post by: {notice.name}</p>
                  <div className="dates-wrapper">
                    <p> Created: {moment(notice.createdAt).fromNow()}</p>
                    <p> Updated: {moment(notice.updatedAt).fromNow()}</p>
                  </div>
                </fieldset>
              </div>
            ))}
          </div>
        </>
      ) : error ? (
        <ErrorComponent error={error} />
      ) : null}
    </>
  );
};

export default GetPublicNotice;
