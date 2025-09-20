
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

router.get('/', productController.list);
router.get('/create', auth, productController.createForm);
router.post('/create', auth, productController.create);
router.get('/:id', productController.detail);
router.get('/:id/edit', auth, productController.editForm);
router.post('/:id/edit', auth, productController.update);
router.post('/:id/delete', auth, productController.delete);

module.exports = router;

