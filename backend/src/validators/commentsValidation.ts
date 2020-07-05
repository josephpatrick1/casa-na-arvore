import { Joi, Segments } from "celebrate";

import { numberRules } from "./rulesValidation";

class CommentsValidation {
  CommentsLivro = {
    [Segments.PARAMS]: Joi.object().keys({
      livroId: numberRules,
    }),
  };
}

export default new CommentsValidation();
