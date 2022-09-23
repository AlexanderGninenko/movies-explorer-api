const express = require('express');
const {
  updateProfile, getMyUser,
} = require('../controllers/users');
const { userProfileValidation } = require('../middlewares/validate');

const router = express.Router();

router.get('/me', getMyUser);

router.patch('/me', userProfileValidation, updateProfile);
module.exports = router;
