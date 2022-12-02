import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userCreateReplyPrivateMessageAction } from '../../../store/actions/adminPrivateMessagesActions';

import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';
import TextAreaComponent from '../../TextArea/TextAreaComponent';
import { nameRegEx } from '../../../utils/regEx';
import SpinnerComponent from '../../Spinner/SpinnerComponent';

const UserCreatePMReplyComponent = ({ userId, messageId }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    messageId: messageId,
    title: '',
    message: '',
  });

  const { title, message } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.name]: e.value,
    }));
  };

  const handleCreatePMReplySubmit = (e) => {
    e.preventDefault();

    //Dispatch your CREATE action
    console.log(formData);
    dispatch(userCreateReplyPrivateMessageAction(formData, userId));
    setFormData({
      title: '',
      message: '',
    });
  };

  const userCreateReplyPrivateMessages = useSelector(
    (state) => state.userCreateReplyPrivateMessages,
  );
  const { loading, error, success } = userCreateReplyPrivateMessages;

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
            <form onSubmit={handleCreatePMReplySubmit}>
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

              <ButtonComponent
                type="submit"
                text={
                  !nameRegEx.test(message) || message.length <= 15
                    ? 'Disabled'
                    : 'submit'
                }
                variant="primary"
                disabled={!nameRegEx.test(message) || message.length <= 15}
              />
            </form>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default UserCreatePMReplyComponent;
