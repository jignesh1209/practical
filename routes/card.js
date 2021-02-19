const express = require('express');
const cardController = require('../controllers/cardController');
const router = express.Router();

router.get('/', (req, res) => {
    cardController.getAllCard(req, res);
});

router.get('/getCardByCustomerID', (req, res) => {
    cardController.getCardByCustomerID(req, res);
});

module.exports = router;