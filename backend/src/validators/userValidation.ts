import { Joi, Segments } from "celebrate";

import {
  emailRules,
  stringRulesRequired,
  numberRules,
} from "./rulesValidation";

class userValidation {
  index = {
    [Segments.QUERY]: Joi.object().keys({
      page: numberRules,
      limit: numberRules,
    }),
  };
  create = {
    [Segments.BODY]: Joi.object().keys({
      name: stringRulesRequired,
      email: emailRules,
      password: stringRulesRequired,
    }),
  };
  categoriasFavoritas = {
    [Segments.BODY]: Joi.array().items(
      Joi.object({
        user_id: numberRules,
        categoria_id: numberRules,
      })
    ),
  };
}

export default userValidation;
