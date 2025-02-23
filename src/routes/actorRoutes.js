const express = require('express');
const {
  getAllActors,
  createActor,
  getActorById,
  updateActor,
  deleteActor,
} = require('../controllers/actorController');
const router = express.Router();

router.get('/getAllActors', getAllActors);

router.post('/createActor', createActor);

router.get('/getActorById/:id', getActorById);

router.put('/updateActor/:id', updateActor);

router.delete('/deleteActor/:id', deleteActor);

module.exports = router;
