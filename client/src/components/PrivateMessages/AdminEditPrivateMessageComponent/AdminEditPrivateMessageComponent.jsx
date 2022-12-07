import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { adminEditPrivateMessageAction } from '../../../store/actions/adminPrivateMessagesActions';

import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';

import { nameRegEx } from '../../../utils/regEx';
import TextAreaComponent from '../../TextArea/TextAreaComponent';
import SpinnerComponent from '../../Spinner/SpinnerComponent';

const AdminEditPrivateMessageComponent = ({ messageId }) => {
  const dispatch = useDispatch();

  const adminGetPrivateMessages = useSelector(
    (state) => state.adminGetPrivateMessages,
  );
  const { messages } = adminGetPrivateMessages;

  const filteredMessage = messages?.filter((message) => {
    if (message?._id === messageId) {
      return message;
    } else {
      return false;
    }
  });

  const [formData, setFormData] = useState({
    title: filteredMessage[0].title,
    message: filteredMessage[0].message,
    from: filteredMessage[0].from,
  });

  const { title, message, from } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.name]: e.value,
    }));
  };

  const handleEditPrivateMessageSubmit = (e) => {
    e.preventDefault();
    //Dispatch your CREATE action
    dispatch(adminEditPrivateMessageAction(formData, messageId));
    setFormData({
      title: '',
      message: '',
      from: '',
    });
  };

  const adminEditPrivateMessage = useSelector(
    (state) => state.adminEditPrivateMessage,
  );
  const { loading, error, success } = adminEditPrivateMessage;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message={'Message was successfully updated.'} />
      ) : null}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>Edit Private message</legend>
          <div>
            <form onSubmit={handleEditPrivateMessageSubmit}>
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

export default AdminEditPrivateMessageComponent;
