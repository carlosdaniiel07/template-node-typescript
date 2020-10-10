/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken'

import { Auth } from './../models/Auth'

import JWT_CONFIG from './../config/jwt'

const generateToken = (auth: Auth): string => {
  const { id, email, role } = auth
  return jwt.sign({ id, email, role }, JWT_CONFIG.secret, {
    algorithm: 'HS256',
    issuer: 'Who generated the token',
    audience: 'Who can use the token',
    expiresIn: JWT_CONFIG.duration
  })
}

const decodeToken = (authorizationToken: string): any => {
  const token = authorizationToken.length >= 7 && authorizationToken.substring(7, authorizationToken.length)

  if (!token) {
    return null
  }

  try {
    jwt.verify(token, JWT_CONFIG.secret)
    return jwt.decode(token)
  } catch (err) {
    return null
  }
}

export default {
  generateToken,
  decodeToken
}
