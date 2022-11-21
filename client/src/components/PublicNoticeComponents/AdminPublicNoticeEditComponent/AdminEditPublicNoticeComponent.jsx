import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';

import { nameRegEx } from '../../../utils/regEx';
import TextAreaComponent from '../../TextArea/TextAreaComponent';
import { adminEditPublicNoticeAction } from '../../../store/actions/adminPublicNoticeActions';

function AdminEditPublicNoticeComponent({ postId }) {
  const dispatch = useDispatch();

  const getPublicNotice = useSelector((state) => state.getPublicNotice);
  const { notices } = getPublicNotice;

  const filteredNotice = notices?.filter((post) => {
    if (post._id === postId) {
      return post;
    }
    return false;
  });

  const [formData, setFormData] = useState({
    id: postId,
    name: filteredNotice[0].name,
    heading: filteredNotice[0].heading,
    post: filteredNotice[0].post,
  });

  const { name, heading, post } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.name]: e.value,
    }));
  };

  const handleEditPublicNoticeSubmit = (e) => {
    e.preventDefault();
    // If this component is part of a view then make checks if admin and if user
    //Dispatch your CREATE action
    dispatch(adminEditPublicNoticeAction(formData));
    setFormData({
      name: '',
      heading: '',
      post: '',
    });
  };

  const adminEditPublicNotice = useSelector(
    (state) => state.adminEditPublicNotice,
  );
  const { success, error } = adminEditPublicNotice;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message={'Notice was successfully updated.'} />
      ) : null}
      <fieldset className="fieldSet">
        <legend>Edit Public Notice</legend>
        <div>
          <form onSubmit={handleEditPublicNoticeSubmit}>
            <InputComponent
              label="Name"
              value={name}
              type="text"
              name="name"
              required
              className={!nameRegEx.test(name) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(name) && name.length !== 0
                  ? `Name must contain at least 5 characters`
                  : null
              }
              onChange={(e) => handleOnChange(e.target)}
            />

            <InputComponent
              label="Heading"
              value={heading}
              type="text"
              name="heading"
              required
              className={!nameRegEx.test(heading) ? 'invalid' : 'entered'}
              error={
                !nameRegEx.test(heading) && heading?.length !== 0
                  ? `Please choose a number between 1 and 100`
                  : null
              }
              onChange={(e) => handleOnChange(e.target)}
            />
            <TextAreaComponent
              label="Post"
              id="post"
              name="post"
              value={post}
              error={
                post.length <= 15 && post?.length !== 0
                  ? `Description must contain at least 16 characters`
                  : null
              }
              onChange={(e) => handleOnChange(e.target)}
            />

            <ButtonComponent
              type="submit"
              text={
                !nameRegEx.test(name) || post.length <= 15
                  ? 'Disabled'
                  : 'submit'
              }
              variant="primary"
              disabled={!nameRegEx.test(name) || post.length <= 15}
            />
          </form>
        </div>
      </fieldset>
    </>
  );
}

export default AdminEditPublicNoticeComponent;
