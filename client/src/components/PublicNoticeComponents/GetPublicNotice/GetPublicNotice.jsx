import { useEffect, useState } from 'react';
import './GetPublicNotice.scss';
import { useDispatch, useSelector } from 'react-redux';

import { getPublicNoticeAction } from '../../../store/actions/adminPublicNoticeActions';

import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import LogoComponent from '../../LogoComponent/LogoComponent';

import moment from 'moment';
import SearchComponent from '../../SearchComponent/SearchComponent';
import SearchHighlightComponent from '../../SearchHighlightComponent/SearchHighlightComponent';

const GetPublicNotice = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPublicNoticeAction());
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
      {success ? (
        <SuccessComponent message="Retrieved all notices successfully" />
      ) : null}
      <h1>Anorthosis Football Academy</h1>

      <SearchComponent
        placeholder="SEARCH A TITLE"
        value={keyword}
        onChange={handleSearch}
        quantity={searchedNotices?.length}
        total={notices?.length}
      />
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
                <LogoComponent />
                <h1>{notice.heading}</h1>

                <SearchHighlightComponent
                  value={notice.post}
                  keyword={keyword}
                />
                <p className="small-text">BY: {notice.name}</p>
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

export default GetPublicNotice;
