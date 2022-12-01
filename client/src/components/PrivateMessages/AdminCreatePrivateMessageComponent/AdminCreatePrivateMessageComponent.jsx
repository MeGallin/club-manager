import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { adminCreatePrivateMessageAction } from '../../../store/actions/adminPrivateMessagesActions';

import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import TextAreaComponent from '../../TextArea/TextAreaComponent';
import { nameRegEx } from '../../../utils/regEx';
import SpinnerComponent from '../../Spinner/SpinnerComponent';

const AdminCreatePrivateMessageComponent = ({ userId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const googleUserLogin = useSelector((state) => state.googleUserLogin);
  const { userInfo: googleUserInfo } = googleUserLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  const [formData, setFormData] = useState({
    title: '',
    message: '',
    from: '',
  });

  const { title, message, from } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.name]: e.value,
    }));
  };

  const handleCreatePrivateMessageSubmit = (e) => {
    e.preventDefault();
    if (!userInfo || (!googleUserInfo && !userAdmin?.isAdmin)) {
      navigate('/login');
    } else {
      //Dispatch your CREATE action
      dispatch(adminCreatePrivateMessageAction(formData, userId));
      setFormData({
        title: '',
        message: '',
        from: '',
      });
    }
  };

  const adminCreatePrivateMessage = useSelector(
    (state) => state.adminCreatePrivateMessage,
  );
  const { loading, error, success } = adminCreatePrivateMessage;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message={'Your profile was successfully created'} />
      ) : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Send a Private message</legend>
          <div>
            <form onSubmit={handleCreatePrivateMessageSubmit}>
              <InputComponent
                label="TITLE"
                value={title}
                type="text"
                name="title"
                required
                className={!nameRegEx.test(title) ? 'invalid' : 'entered'}
                error={
                  !nameRegEx.test(title) && title.length !== 0
                    ? `Name must contain at least 5 characters`
                    : null
                }
                onChange={(e) => handleOnChange(e.target)}
              />

              <TextAreaComponent
                label="Message"
                id="message"
                name="message"
                value={message}
                error={
                  message.length <= 15 && message?.length !== 0
                    ? `Description must contain at least 16 characters`
                    : null
                }
                onChange={(e) => handleOnChange(e.target)}
              />

              <InputComponent
                label="From"
                value={from}
                type="text"
                name="from"
                required
                className={!nameRegEx.test(from) ? 'invalid' : 'entered'}
                error={
                  !nameRegEx.test(from) && from?.length !== 0
                    ? `Please choose a number between 1 and 100`
                    : null
                }
                onChange={(e) => handleOnChange(e.target)}
              />

              <ButtonComponent
                type="submit"
                text={
                  !nameRegEx.test(from) || message.length <= 15
                    ? 'Disabled'
                    : 'submit'
                }
                variant="primary"
                disabled={!nameRegEx.test(from) || message.length <= 15}
              />
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default AdminCreatePrivateMessageComponent;
