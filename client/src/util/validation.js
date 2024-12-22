// Import joi
import Joi from "joi";
// Define joi schema
const ValidateSignup = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).max(30).required(),
    phone: Joi.string().min(10).max(10).required(),
});

const ValidateLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).max(30).required(),
});

const ValidateCheckout= Joi.object({
    phoneNumber:Joi.string().required(),
    address:Joi.string().max(100).required(),
})
// Export the schema
export  {ValidateSignup, ValidateLogin,ValidateCheckout};
