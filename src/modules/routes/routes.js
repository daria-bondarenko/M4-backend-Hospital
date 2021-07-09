const express = require('express');
const router = express.Router();

const {
  createNewUser,
  authUser
} = require('../controllers/user.controller');

router.post('/createNewUser', createNewUser);
router.post('/authUser', authUser);

module.exports = router;