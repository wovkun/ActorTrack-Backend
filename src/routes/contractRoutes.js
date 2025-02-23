const express = require('express');
const router = express.Router();
const {
  createContract,
  getContracts,
  getContractById,
  updateContract,
  deleteContract,
} = require('../controllers/contractController');

router.post('/createContract', createContract);

router.get('/getContracts', getContracts);

router.get('/getContractById/:id', getContractById);

router.put('/updateContract/:id', updateContract);

router.delete('/deleteContract/:id', deleteContract);

module.exports = router;
