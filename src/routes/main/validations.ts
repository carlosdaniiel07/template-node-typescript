/* eslint-disable no-unused-vars */
import { body, ValidationChain } from 'express-validator'

const createValidations: ValidationChain[] = [
  body('email').isEmail(),
  body('password').notEmpty({ ignore_whitespace: true })
]

export default {
  createValidations
}
