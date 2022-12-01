import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './AdminGetPrivateMessagesComponent.scss';

import { adminGetPrivateMessagesAction } from '../../../store/actions/adminPrivateMessagesActions';

import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import ButtonComponent from '../../Button/ButtonComponent';
import SearchComponent from '../../SearchComponent/SearchComponent';
import SearchHighlightComponent from '../../SearchHighlightComponent/SearchHighlightComponent';
import moment from 'moment';

const AdminGetPrivateMessagesComponent = () => {
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
      if (!ignore) dispatch(adminGetPrivateMessagesAction());
    }
    return () => (ignore = true);
  }, [navigate, dispatch, userInfo, userAdmin]);

  const adminGetPrivateMessages = useSelector(
    (state) => state.adminGetPrivateMessages,
  );
  const { loading, success, error, messages } = adminGetPrivateMessages;

  //Search Message by to [name]
  const [keyword, setKeyword] = useState('');
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  const searchedMessages = messages?.filter((message) => {
    return message.to.toLowerCase().includes(keyword.toLowerCase());
  });
  //Search Message by to [name]

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}

      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <h2>Manage PM</h2>
          {success && searchedMessages ? (
            <>
              <div className="admin-get-player__top-wrapper">
                <SearchComponent
                  placeholder="SEARCH NAME"
                  value={keyword}
                  onChange={handleSearch}
                  quantity={searchedMessages.length}
                  total={messages.length}
                />

                <ButtonComponent
                  type="button"
                  text={
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'active' : ''
                      }
                      to="/admin-profile"
                    >
                      Go Back
                    </NavLink>
                  }
                  variant="info"
                  disabled={false}
                />
              </div>
              <div className="wrapper">
                {searchedMessages?.map((message) => (
                  <div key={message?._id} className="inner-content-wrapper">
                    <fieldset className="fieldSet">
                      <legend>
                        <SearchHighlightComponent
                          value={`TO: ${message?.to}`}
                          keyword={keyword}
                        />
                      </legend>
                      <div className="message-wrapper">
                        <h3>
                          {message?.title}{' '}
                          <sup>
                            [posted {moment(message?.createdAt).fromNow()}]
                          </sup>
                        </h3>
                        <p>{message?.message}</p>
                        <p>{message?.from}</p>
                      </div>

                      {message?.privateMessageReply.map((reply) => (
                        <div key={reply?._id} className="reply-wrapper">
                          <h4>
                            Reply{' '}
                            <sup>
                              [posted {moment(reply?.createdAt).fromNow()}]
                            </sup>
                          </h4>

                          <h3>{reply?.title} </h3>
                          <p>{reply?.to}</p>
                          <p>{reply?.message}</p>
                          <p>{reply?.from}</p>
                        </div>
                      ))}
                    </fieldset>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default AdminGetPrivateMessagesComponent;
