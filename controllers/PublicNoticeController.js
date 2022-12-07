const PublicNotice = require('../models/PublicNoticeModel');
const ErrorResponse = require('../utils/errorResponse');

// @description: Create a new POST
// @route: POST /api/admin/public-notice/
// @access: ADMIN && PRIVATE
exports.adminCreatePublicNotice = async function (req, res, next) {
  const user = req.user._id;
  const { name, heading, post } = req.body;
  console.log(name, heading, post);
  try {
    if (!name && !heading && !post)
      return next(new ErrorResponse('Provide all fields please', 401));
    await PublicNotice.create({
      user,
      name,
      heading,
      post,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

// @description: GET ALL POSTS
// @route: GET /api/public-notices
// @access:  PUBLIC
exports.getPublicNotices = async (req, res, next) => {
  const notices = await PublicNotice.find({}).sort({
    createdAt: -1,
  });
  try {
    if (!notices)
      return next(new ErrorResponse('No notices could be found', 401));
    res.status(200).json({ success: true, notices });
  } catch (error) {
    next(error);
  }
};

// @description: GET A SINGLE POST
// @route: GET /api/public-notices/id
// @access:  PUBLIC
exports.getPublicNotice = async (req, res, next) => {
  const notice = await PublicNotice.findById(req.params.id);
  try {
    if (!notice) return next(new ErrorResponse('Post not found', 401));
    res.status(200).json({ success: true, notice });
  } catch (error) {
    next(error);
  }
};

// @description: EDIT and UPDATE A single post
// @route: GET /api/admin/public-notice-edit/:id
// @access: ADMIN && PRIVATE
exports.adminEditPublicNotice = async (req, res, next) => {
  const notice = await PublicNotice.findById(req.params.id);
  const { name, heading, post } = req.body;
  try {
    if (!notice) return next(new ErrorResponse('Notice not found', 401));
    const publicInfo = {
      name,
      heading,
      post,
    };
    const updateNotice = await PublicNotice.findByIdAndUpdate(
      req.params.id,
      publicInfo,
      {
        new: true,
      },
    );
    res.status(200).json({ success: true, updateNotice });
  } catch (error) {
    next(error);
  }
};

// @description: DELETE a POST
// @route: DELETE /api/admin/public-notice-delete/:id
// @access: ADMIN && PRIVATE
exports.deletePublicNotice = async (req, res, next) => {
  const notice = await PublicNotice.findById(req.params.id);
  try {
    if (!notice) return next(new ErrorResponse('Notice not found', 401));
    await notice.remove();
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};
