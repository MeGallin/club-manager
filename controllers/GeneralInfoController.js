const GeneralInfo = require('../models/GeneralInfoModel');
const ErrorResponse = require('../utils/errorResponse');

// @description: Create a new POST
// @route: POST /api/admin/general-info-create/
// @access: ADMIN && PRIVATE

exports.adminCreateGeneralIfo = async (req, res, next) => {
  const user = req.user._id;
  const { name, heading, post } = req.body;

  try {
    if (!name && !heading && !post) {
      return next(new ErrorResponse('Provide all fields please', 401));
    } else {
      await GeneralInfo.create({
        user,
        name,
        heading,
        post,
      });
      res.status(200).json({ success: true });
    }
  } catch (error) {
    next(error);
  }
};

// @description: GET ALL POSTS
// @route: GET /api/admin/general-info
// @access:  PRIVATE
exports.adminGetGeneralInfo = async (req, res, next) => {
  const posts = await GeneralInfo.find({}).sort({
    createdAt: -1,
  });
  try {
    if (!posts) {
      return next(new ErrorResponse('No posts could be found', 401));
    } else {
      res.status(200).json({ success: true, posts });
    }
  } catch (error) {
    next(error);
  }
};

// @description: EDIT and UPDATE A single post
// @route: GET /api/admin/general-info-edit/:id
// @access: ADMIN && PRIVATE
exports.adminEditGeneralInfo = async (req, res, next) => {
  const post = await GeneralInfo.findById(req.params.id);

  try {
    if (post) {
      const postInfo = {
        name: req.body.name,
        heading: req.body.heading,
        post: req.body.post,
      };

      const updatePost = await GeneralInfo.findByIdAndUpdate(
        req.params.id,
        postInfo,
        {
          new: true,
        },
      );
      res.status(200).json({ success: true, updatePost });
    } else {
      return next(new ErrorResponse('Post not found', 401));
    }
  } catch (error) {
    next(error);
  }
};

// @description: DELETE a POST
// @route: DELETE /api/admin/general-info-delete/:id
// @access: ADMIN && PRIVATE
exports.adminDeleteGeneralInfo = async (req, res, next) => {
  const post = await GeneralInfo.findById(req.params.id);
  try {
    if (post) {
      await post.remove();
      res.status(200).json({ success: true });
    } else {
      return next(new ErrorResponse('Profile not found', 401));
    }
  } catch (error) {
    next(error);
  }
};
