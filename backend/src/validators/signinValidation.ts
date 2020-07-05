import { Joi, Segments } from "celebrate";

import { emailRules, stringRulesRequired } from "./rulesValidation";

const sessionValiation = {
  [Segments.BODY]: Joi.object().keys({
    email: emailRules,
    password: stringRulesRequired,
  }),
};

export default sessionValiation;
