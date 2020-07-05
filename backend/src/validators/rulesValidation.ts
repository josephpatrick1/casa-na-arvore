import { Joi, Segments } from "celebrate";

const emailRules = Joi.string().required().email();

const stringRulesRequired = Joi.string().required();
const stringRules = Joi.string();

const numberRules = Joi.number();

const livroParams = {
  [Segments.PARAMS]: Joi.object().keys({
    livroId: numberRules,
  }),
};
export {
  emailRules,
  stringRulesRequired,
  stringRules,
  numberRules,
  livroParams,
};
