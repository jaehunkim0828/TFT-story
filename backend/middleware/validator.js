import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    console.log(errors.array()[0].msg);
    return res.status(400).json(errors.array()[0].msg);
}