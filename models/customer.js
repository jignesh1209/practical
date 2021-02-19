const Customer = require('../controllers/customerController');
const query = require('../db');

class CustomerModel {
    findAll = async () => {
        let sql = `SELECT a.Id,a.customer_name,a.customer_address1,a.customer_address2,a.customer_city,a.customer_state,a.customer_country,b.account_id,b.cardType FROM customer as a left join card as b on a.id =b.customer_id;`;

        return await query(sql);
    }
    create = async ({ name, address1, address2, city, state, country }) => { 
        const sql = `Insert into Customer(customer_name,customer_address1,customer_address2,customer_city,customer_state,customer_country) VALUES(?,?,?,?,?,?)`;

        const result = await query(sql, [name, address1, address2, city, state, country]);
        return result;
    }
    update = async ({ id, name, address1, address2, city, state, country }) => { 
        const sql = `Update Customer set customer_name=?,customer_address1=?,customer_address2=?,customer_city=?,customer_state=?,customer_country=? where id=?`;

        const result = await query(sql, [name, address1, address2, city, state, country,id]);
        return result;
    }

    findById = async (customerID) => { 
        const sql = `Select customer_name,customer_address1,customer_address2,customer_city,customer_state,customer_country from customer where id=?`;
        const result = await query(sql, [customerID]);
        return result;
    }
};


module.exports = new CustomerModel;