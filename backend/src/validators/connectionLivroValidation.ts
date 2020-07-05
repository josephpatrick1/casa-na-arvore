import { Joi, Segments } from "celebrate";

import { stringRules, numberRules } from "./rulesValidation";

class connectionLivroValidation {
  favorite = {
    [Segments.PARAMS]: Joi.object().keys({
      livroId: numberRules,
    }),
  };

  comment = {
    [Segments.PARAMS]: Joi.object().keys({
      livroId: numberRules,
    }),
    [Segments.BODY]: Joi.object().keys({
      nota: numberRules,
      comentario: stringRules,
      spoiler: Joi.boolean(),
    }),
  };
}

export default new connectionLivroValidation();
