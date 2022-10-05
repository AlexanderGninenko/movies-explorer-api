const express = require('express');
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { loginValidation, registerUserValidation } = require('../middlewares/validate');
const { login, createUser } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');

const router = express.Router();
router.use(express.json());

router.use('/api/movies', auth, movieRouter);
router.use('/api/users', auth, userRouter);

router.post('/api/signin', loginValidation, login);
router.post('/api/signup', registerUserValidation, createUser);
router.get('/api/signout', (req, res) => {
  res.cookie('jwt', null, -1).send({ message: 'Успешный выход' });
});
router.use(auth, () => {
  throw new NotFoundError('Такой страницы не существует');
});

module.exports = router;
