const router = require('express').Router();
const users = require('../data/users.json');

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const user = users.find((u) => u._id === req.params.id);
  if (user) {
    res.send(user);
    return;
  }
  res.status(404).json({ message: 'Такого пользователя не существует' });
});

module.exports = router;
