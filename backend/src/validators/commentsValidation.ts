import { Joi, Segments } from "celebrate";

import { stringRules, numberRules, livroParams } from "./rulesValidation";

class CommentsValidation {
  CommentsLivro = livroParams;
}

export default CommentsValidation;
