/* eslint-disable no-unused-vars */
import { Router } from 'express'
import multer from 'multer'

import cleanController from '../../middlewares/cleanController'
import tokenValidator from '../../middlewares/tokenValidator'
import requestValidator from '../../middlewares/requestValidator'

import MainController from '../../controllers/MainController'

import { Role } from '../../models/Auth'

import validations from './validations'

const upload = multer({ dest: './tmp/uploads/' })

export default (router: Router) => {
  router.get('/', cleanController(MainController.index))
  router.get('/public-route', cleanController(MainController.index))
  router.get('/protected-route', tokenValidator([Role.MANAGER]), cleanController(MainController.index))
  router.post('/create', tokenValidator([Role.DEFAULT]), requestValidator(validations.createValidations), cleanController(MainController.index))
  router.post('/file-upload', tokenValidator([Role.DEFAULT]), upload.single('file'), cleanController(MainController.index))
}
