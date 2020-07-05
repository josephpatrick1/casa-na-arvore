import { Joi, Segments } from "celebrate";

import { stringRules, numberRules } from "./rulesValidation";

class livroValidation {
  index = {
    [Segments.QUERY]: Joi.object().keys({
      page: numberRules,
      limit: numberRules,
      autor: stringRules,
      editora: stringRules,
      categoria: stringRules,
      titulo: stringRules,
    }),
  };
}

export default livroValidation;
