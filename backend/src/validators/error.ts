import { isCelebrate } from "celebrate";

const errors = (err: any, req: any, res: any, next: any) => {
  if (isCelebrate(err)) {
    const { joi } = err;
    const keys = joi.details.map((key: any) => {
      return key.context.key;
    });
    return res.send({
      statusCode: 400,
      message: err.joi.message,
      validation: keys,
    });
  }

  return next(err);
};

export default errors;
