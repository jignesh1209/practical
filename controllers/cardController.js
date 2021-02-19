const CardModel = require('../models/card');
const validation = require('../validation');


class Card {
    static getAllCard(req, res) {
        res.send('Get All Card');
    }

    static async getCardByCustomerID(req, res) {
        // validation
        const { error } = validation.findCardByCIDValidation(req.body);
        if(error) {
            return res.send(error.details[0].message);
        }

        const cardDetail = await CardModel.findByCID(req.body.id);
        
        if (!cardDetail) {
            res.send('Unable to get card detail');
        } else {
            res.status(200).send(cardDetail);
        }
    }
}

module.exports = Card;