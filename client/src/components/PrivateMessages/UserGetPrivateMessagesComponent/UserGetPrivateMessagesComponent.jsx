import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userGetPrivateMessagesAction } from '../../../store/actions/adminPrivateMessagesActions';

import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';
import ButtonComponent from '../../Button/ButtonComponent';
import SearchComponent from '../../SearchComponent/SearchComponent';
import SearchHighlightComponent from '../../SearchHighlightComponent/SearchHighlightComponent';
import moment from 'moment';
import UserCreatePMReplyComponent from '../UserCreatePMReplyComponent/UserCreatePMReplyComponent';
import ModalComponent from '../../ModalComponent/ModalComponent';

const UserGetPrivateMessagesComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const googleUserLogin = useSelector((state) => state.googleUserLogin);
  const { userInfo: googleUserInfo } = googleUserLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  useEffect(() => {
    let ignore = false;
    if (!userInfo && !googleUserInfo && !userAdmin?.isAdmin) {
      navigate('/login');
    } else {
      if (!ignore) dispatch(userGetPrivateMessagesAction(userAdmin?._id));
    }
    return () => (ignore = true);
  }, [navigate, dispatch, userInfo, googleUserInfo, userAdmin]);

  const userGetPrivateMessages = useSelector(
    (state) => state.userGetPrivateMessages,
  );
  const { loading, success, error, messages } = userGetPrivateMessages;

  //Search Message by to [name]
  const [keyword, setKeyword] = useState('');
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  const searchedMessages = messages?.filter((message) => {
    return message.title.toLowerCase().includes(keyword.toLowerCase());
  });
  //Search Message by to [name]

  const [toggleReply, setToggleReply] = useState(false);
  const [showReply, setShowReply] = useState('');

  const handleToggleReply = (replyId) => {
    messages.flatMap((message) => {
      setToggleReply(true);
      return message.privateMessageReply.flatMap((mess) => {
        if (replyId === mess._id) {
          return setShowReply(mess);
        }
        return false;
      });
    });
  };

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}

      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          {success && searchedMessages ? (
            <>
              <h2>Manage Private Messages</h2>
              <div className="admin-get-player__top-wrapper">
                <SearchComponent
                  placeholder="SEARCH TITLE"
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
                      <legend>TO: {message.to}</legend>
                      <div className="message-wrapper">
                        {message?.isComplete ? (
                          <p className="small-text danger">
                            Admin has marked this as complete.
                          </p>
                        ) : null}
                        <h3>
                          <SearchHighlightComponent
                            value={`TITLE: ${message?.title}`}
                            keyword={keyword}
                          />
                        </h3>

                        <p>{message?.message}</p>
                        <p>{message?.from}</p>
                        <sup>
                          [posted {moment(message?.createdAt).fromNow()}]
                        </sup>
                      </div>

                      {message?.privateMessageReply.map((reply) => (
                        <>
                          <div key={reply?._id} className="reply-wrapper">
                            <h4 onClick={() => handleToggleReply(reply?._id)}>
                              View Reply: {reply?.title}{' '}
                            </h4>

                            {toggleReply && showReply._id === reply?._id ? (
                              <>
                                <p>{reply?.to}</p>
                                <p>{reply?.message}</p>
                                <p>{reply?.from}</p>
                                <sup>
                                  [posted {moment(reply?.createdAt).fromNow()}]
                                </sup>
                              </>
                            ) : null}
                          </div>
                        </>
                      ))}
                      {message?.isComplete ? null : (
                        <ModalComponent
                          className="create-btn"
                          openButtonTitle="Reply"
                          closeButtonTitle="Close"
                          variant="success"
                          props={
                            <>
                              <UserCreatePMReplyComponent
                                messageId={message?._id}
                                userId={userAdmin?._id}
                              />
                            </>
                          }
                        />
                      )}
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

export default UserGetPrivateMessagesComponent;
