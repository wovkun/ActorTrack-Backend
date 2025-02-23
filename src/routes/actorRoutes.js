const express = require('express');
const router = express.Router();
const {
  getAllActors,
  createActor,
  getActorById,
  updateActor,
  deleteActor,
} = require('../controllers/actorController');
const authenticate = require('../middlewares/authMiddleware');

router.get('/getAllActors', authenticate, getAllActors);
router.post('/createActor', authenticate, createActor);
router.get('/getActorById/:id', authenticate, getActorById);
router.put('/updateActor/:id', authenticate, updateActor);
router.delete('/deleteActor/:id', authenticate, deleteActor);

module.exports = router;
