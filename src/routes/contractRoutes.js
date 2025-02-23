const express = require('express');
const router = express.Router();
const {
  createContract,
  getContracts,
  getContractById,
  updateContract,
  deleteContract,
} = require('../controllers/contractController');
const authenticate = require('../middlewares/authMiddleware');

router.post('/createContract', authenticate, createContract);
router.get('/getContracts', authenticate, getContracts);
router.get('/getContractById/:id', authenticate, getContractById);
router.put('/updateContract/:id', authenticate, updateContract);
router.delete('/deleteContract/:id', authenticate, deleteContract);

module.exports = router;
