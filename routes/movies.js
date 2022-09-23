const express = require('express');
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
const { movieValidation, idValidation } = require('../middlewares/validate');

const router = express.Router();

router.get('/', getMovies);
router.post('/', movieValidation, createMovie);
router.delete('/:id', idValidation, deleteMovie);

module.exports = router;
