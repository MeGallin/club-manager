import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AdminCreatePublicNoticeComponent.scss';

import InputComponent from '../../../components/Input/InputComponent';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import ErrorComponent from '../../ErrorComponent/ErrorComponent';
import SuccessComponent from '../../Success/SuccessComponent';

import { nameRegEx } from '../../../utils/regEx';
import TextAreaComponent from '../../TextArea/TextAreaComponent';

import { adminCreatePublicNoticeAction } from '../../../store/actions/adminPublicNoticeActions';

const AdminCreatePublicNoticeComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const googleUserLogin = useSelector((state) => state.googleUserLogin);
  const { userInfo: googleUserInfo } = googleUserLogin;
  const userAdminDetails = useSelector((state) => state.userAdminDetails);
  const { userAdmin } = userAdminDetails;

  const [formData, setFormData] = useState({
    name: '',
    heading: '',
    post: '',
  });

  const { name, heading, post } = formData;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.name]: e.value,
    }));
  };

  const handleCreatePublicNoticeSubmit = (e) => {
    e.preventDefault();

    if (!userInfo || (!googleUserInfo && !userAdmin?.isAdmin)) {
      navigate('/login');
    } else {
      //Dispatch your CREATE action
      dispatch(adminCreatePublicNoticeAction(formData));
      setFormData({
        name: '',
        heading: '',
        post: '',
      });
    }
  };

  const adminCreatePublicNotice = useSelector(
    (state) => state.adminCreatePublicNotice,
  );
  const { error, success } = adminCreatePublicNotice;

  return (
    <>
      {error ? <ErrorComponent error={error} /> : null}
      {success ? (
        <SuccessComponent message={'Your profile was successfully created'} />
      ) : null}

      <fieldset className="fieldSet">
        <legend>Create Public Notice Post</legend>
        <div>
          <form onSubmit={handleCreatePublicNoticeSubmit}>
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
};

export default AdminCreatePublicNoticeComponent;
