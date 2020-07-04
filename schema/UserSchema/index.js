const Joi = require('joi');
 const ContactsAddSchema = Joi.object({
    name: Joi.string().required().error(() => 'Name is required'),
    address: Joi.string().required().error(() => 'Address is required'),
    city: Joi.string().required().error(() => 'city is required'),
});
module.exports = {ContactsAddSchema}