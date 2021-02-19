const { func } = require('joi');
const Joi = require('joi');

module.exports = {
    customerValidation(data) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            address1: Joi.string().required(),
            address2: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            country: Joi.string().required()
        });

        return schema.validate(data);
    },

    updateCustomerValidation(data) {
        const schema = Joi.object().keys({
            id: Joi.number().required(),
            name: Joi.string().required(),
            address1: Joi.string().required(),
            address2: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            country: Joi.string().required()
        });

        return schema.validate(data);
    },

    findCustomerValidation(data) {
        const schema = Joi.object().keys({
            id: Joi.number().required()
        });

        return schema.validate(data);
    },

    findCardByCIDValidation(data) {
        const schema = Joi.object().keys({
            id: Joi.number().required()
        });

        return schema.validate(data);
    }
}