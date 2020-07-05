import { Joi, Segments } from "celebrate";

import { stringRules, numberRules, livroParams } from "./rulesValidation";

class connectionLivroValidation {
  favorite = {
    livroParams,
  };

  comment = {
    livroParams,
    [Segments.BODY]: Joi.object().keys({
      nota: numberRules,
      comentario: stringRules,
      spoiler: Joi.boolean(),
    }),
  };
}

export default connectionLivroValidation;
