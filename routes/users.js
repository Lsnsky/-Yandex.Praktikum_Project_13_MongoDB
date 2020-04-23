const router = require('express').Router();

const {
  getUsers, getUserById, createUser, updateUserProfile, updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/me', updateUserProfile); // обновление профиля пользователя
router.patch('/me/avatar', updateUserAvatar); // обновление аватара пользователя

module.exports = router;
