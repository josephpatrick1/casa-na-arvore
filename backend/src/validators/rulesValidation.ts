import { Joi, Segments } from "celebrate";

const emailRules = Joi.string().required().email();

const stringRulesRequired = Joi.string().required();
const stringRules = Joi.string();

const numberRules = Joi.number();

export { emailRules, stringRulesRequired, stringRules, numberRules };
