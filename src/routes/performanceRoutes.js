const express = require('express');
const router = express.Router();
const {
  createPerformance,
  getPerformances,
  getPerformanceById,
  updatePerformance,
  deletePerformance,
} = require('../controllers/performanceController');

router.post('/createPerformance', createPerformance);

router.get('/getPerformances', getPerformances);

router.get('/getPerformanceById/:id', getPerformanceById);

router.put('/updatePerformance/:id', updatePerformance);

router.delete('/deletePerformance/:id', deletePerformance);

module.exports = router;
