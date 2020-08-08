/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

import { ApiResponse } from './../models/ApiResponse'

const index = (req: Request, res: Response): ApiResponse<any> => {
  const data = {
    message: 'Hello TypeScript!',
    timestamp: new Date().getTime()
  }

  return { statusCode: 200, data: data }
}

export default {
  index
}
