const query = require('../db');

class CardModel {
    create = async (customerId, accountID, cardType, cvc, password ) => { 
        const sql = `Insert into card(customer_Id,account_ID,cardType,cvc,password) VALUES(?,?,?,?,?)`;

        const result = await query(sql, [customerId, accountID, cardType, cvc, password]);
        return result;
    }
    findByCID = async (customerID) => {
        const sql = 'select * from card where customer_id='+customerID;

        return await query(sql);
    }
};

module.exports = new CardModel;