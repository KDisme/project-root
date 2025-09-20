const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const auth = require('../middleware/auth');

router.get('/', supplierController.list);
router.get('/create', auth, supplierController.createForm);
router.post('/create', auth, supplierController.create);
router.get('/:id/edit', auth, supplierController.editForm);
router.post('/:id/edit', auth, supplierController.update);
router.post('/:id/delete', auth, supplierController.delete);

module.exports = router;
