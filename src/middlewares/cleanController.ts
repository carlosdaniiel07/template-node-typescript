/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express'

import { ApiResponse } from '../models/ApiResponse'

export default (controller: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: ApiResponse<any> = await controller(req, res)
      const { statusCode, data } = response

      return res.status(statusCode).json(data)
    } catch (err) {
      next(err)
    }
  }
}
