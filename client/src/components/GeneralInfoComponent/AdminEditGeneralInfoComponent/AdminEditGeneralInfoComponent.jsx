import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';

import { nameRegEx } from '../../../utils/regEx';
import TextAreaComponent from '../../TextArea/TextAreaComponent';
import { adminEditGeneralInfoAction } from '../../../store/actions/adminGeneralInfoActions';

function AdminEditGeneralInfoComponent({ postId }) {
  const dispatch = useDispatch();

  const adminGetGeneralInfo = useSelector((state) => state.adminGetGeneralInfo);
  const { posts } = adminGetGeneralInfo;

  const filteredPost = posts?.filter((post) => {
    if (post._id === postId) {
      return post;
    }
    return false;
  });

  const [formData, setFormData] = useState({
    id: postId,
    name: filteredPost[0].name,
    heading: filteredPost[0].heading,
    post: filteredPost[0].post,
  });

  const { name, heading, post } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.name]: e.value,
    }));
  };

  const handleEditGeneralInfoSubmit = (e) => {
    e.preventDefault();
    // If this component is part of a view then make checks if admin and if user
    //Dispatch your CREATE action
    dispatch(adminEditGeneralInfoAction(formData));
    setFormData({
      name: '',
      heading: '',
      post: '',
    });
  };

  const adminEditGeneralInfo = useSelector(
    (state) => state.adminEditGeneralInfo,
  );
  const { success, error } = adminEditGeneralInfo;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message={'Your profile was successfully created'} />
      ) : null}
      <fieldset className="fieldSet">
        <legend>Create General Info Post</legend>
        <div>
          <form onSubmit={handleEditGeneralInfoSubmit}>
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

export default AdminEditGeneralInfoComponent;
