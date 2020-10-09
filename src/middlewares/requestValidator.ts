/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express'

import { validationResult, ValidationChain } from 'express-validator'

export default (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req)

    if (errors.isEmpty()) {
      return next()
    }

    const errorResponse = {
      message: 'Preencha corretamente todos os campos',
      errors: errors.array().map(({ param: field, msg: message }) => ({ field, message }))
    }

    return res.status(400).json(errorResponse)
  }
}
