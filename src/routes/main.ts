/* eslint-disable no-unused-vars */
import { Router } from 'express'

import cleanController from './../middlewares/cleanController'
import tokenValidator from './../middlewares/tokenValidator'

import MainController from '../controllers/MainController'

import { Role } from './../models/Auth'

export default (router: Router) => {
  router.get('/', cleanController(MainController.index))
  router.get('/public-route', cleanController(MainController.index))
  router.get('/protected-route', tokenValidator([Role.MANAGER]), cleanController(MainController.index))
}
