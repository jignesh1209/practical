const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();


router.get('/', (req, res) => { 
    customerController.getAllCustomer(req, res);
});

router.post('/', (req, res) => { 
    customerController.createCustomer(req, res);
});

router.put('/', (req, res) => {
    customerController.updateCustomer(req, res);
});

router.get('/findById', (req, res) => { 
    customerController.findByID(req, res);
});

module.exports = router;