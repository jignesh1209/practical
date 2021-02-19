const CustomerModel = require('../models/customer');
const CardModel = require('../models/card');
const randomatic = require('randomatic');
const validation = require('../validation');

class Customer {
    static async getAllCustomer(req,res) {
        let customerList = await CustomerModel.findAll();
        res.send(customerList);
    }

    static async createCustomer(req, res) {
        // validation
        const { error } = validation.customerValidation(req.body);
        if(error) {
            return res.send(error.details[0].message);
        }
        const result = await CustomerModel.create(req.body);
        if (!result) {
            return res.send('Unable to create user');
        } else {
            const cardResult = await CardModel.create(result.insertId, randomatic('0', 8),'MasterCard',randomatic('0', 3), randomatic('0',6));
            if (!cardResult) {
                return res.send('Unable to create card for customer');
            } else {
                res.status(201).send('Customer was create successfully!');
            }
        }
    }

    static async updateCustomer(req, res) {
        // validation
        const { error } = validation.updateCustomerValidation(req.body);
        if(error) {
            return res.send(error.details[0].message);
        }

        const result = await CustomerModel.update(req.body);
        if (!result) {
            res.send('Unable to update the customer detail');
        } else {
            res.status(200).send('Customer detail update successfully!');
        }
    }

    static async findByID(req, res) {
        // validation
        const { error } = validation.findCustomerValidation(req.body);
        if(error) {
            return res.send(error.details[0].message);
        }

        const customerDetail = await CustomerModel.findById(req.body.id);
        if (!customerDetail) {
            res.send('Unable find customer detail');
        } else {
            res.status(200).send(customerDetail);
        }
    }
};

module.exports = Customer;