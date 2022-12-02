import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './AdminGetPrivateMessagesComponent.scss';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import {
  adminGetPrivateMessagesAction,
  adminIsCompletePrivateMessageAction,
} from '../../../store/actions/adminPrivateMessagesActions';

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
  console.log(searchedMessages);
  const handleIsComplete = (val, userId, messageId) => {
    dispatch(adminIsCompletePrivateMessageAction(val, userId, messageId));
  };

  const adminIsCompletePrivateMessage = useSelector(
    (state) => state.adminIsCompletePrivateMessage,
  );
  const {
    loading: isCompleteLoading,
    error: isCompleteError,
    success: isCompleteSuccess,
  } = adminIsCompletePrivateMessage;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {isCompleteError ? <ErrorComponent error={isCompleteError} /> : null}

      {loading || isCompleteLoading ? (
        <SpinnerComponent />
      ) : (
        <>
          {success || (isCompleteSuccess && searchedMessages) ? (
            <>
              <h2>Manage Private Messages</h2>
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
                        {message.isComplete ? (
                          <div
                            onClick={() =>
                              handleIsComplete(
                                false,
                                message?.user,
                                message?._id,
                              )
                            }
                          >
                            <div className="is-complete-wrapper">
                              <p className="small-text danger">
                                Un-Mark as Complete
                              </p>
                              <FaThumbsDown className="ra-thumbs-down" />
                            </div>
                          </div>
                        ) : (
                          <div
                            onClick={() =>
                              handleIsComplete(
                                true,
                                message?.user,
                                message?._id,
                              )
                            }
                          >
                            <div className="is-complete-wrapper">
                              <p className="small-text warning">
                                Mark as Complete
                              </p>
                              <FaThumbsUp className="ra-thumbs-up" />
                            </div>
                          </div>
                        )}

                        <h3>{message?.title} </h3>
                        <p>{message?.message}</p>
                        <p>{message?.from}</p>
                        <sup>
                          [posted {moment(message?.createdAt).fromNow()}]
                        </sup>
                      </div>

                      {message?.privateMessageReply.map((reply) => (
                        <div key={reply?._id} className="reply-wrapper">
                          <h4>Reply </h4>

                          <h3>{reply?.title} </h3>
                          <p>{reply?.to}</p>
                          <p>{reply?.message}</p>
                          <p>{reply?.from}</p>
                          <sup>
                            [posted {moment(reply?.createdAt).fromNow()}]
                          </sup>
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
