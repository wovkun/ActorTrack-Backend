const express = require('express');
const router = express.Router();
const {
  createPerformance,
  getPerformances,
  getPerformanceById,
  updatePerformance,
  deletePerformance,
} = require('../controllers/performanceController');
const authenticate = require('../middlewares/authMiddleware');

router.post('/createPerformance', authenticate, createPerformance);
router.get('/getPerformances', authenticate, getPerformances);
router.get('/getPerformanceById/:id', authenticate, getPerformanceById);
router.put('/updatePerformance/:id', authenticate, updatePerformance);
router.delete('/deletePerformance/:id', authenticate, deletePerformance);

module.exports = router;
