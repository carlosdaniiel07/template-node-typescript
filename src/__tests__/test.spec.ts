/* eslint-disable no-unused-vars */
import request from 'supertest'

import app from '../app'
import utils from './utils'

describe('this is a test suite', () => {
  beforeAll(async () => {
    await utils.prepareDatabase()
  })

  it('should be truthy', () => {
    expect(true).toBeTruthy()
  })
})
