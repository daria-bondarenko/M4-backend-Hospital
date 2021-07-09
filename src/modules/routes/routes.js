const express = require('express');
const router = express.Router();
const passport = require('passport');

const {
  getAllRecords,
  createNewRecord,
  editRecord,
  deleteRecord
} = require('../controllers/record.controller');

router.get('/getAllRecords', passport.authenticate('jwt',{session: false}), getAllRecords);
router.post('/createNewRecord', passport.authenticate('jwt',{session: false}), createNewRecord);
router.patch('/editRecord', passport.authenticate('jwt',{session: false}), editRecord);
router.delete('/deleteRecord', passport.authenticate('jwt',{session: false}), deleteRecord);

const {
  createNewUser,
  authUser
} = require('../controllers/user.controller');

router.post('/createNewUser', createNewUser);
router.post('/authUser', authUser);

module.exports = router;