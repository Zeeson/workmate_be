import dotEnv from 'dotenv';
dotEnv.config()
import  jwt  from 'express-jwt'
import  jwksRsa from 'jwks-rsa'

const apiAudience = process.env.AUTH0_AUDIENCE
const domain = process.env.AUTH0_DOMAIN

// Create middleware for checking the JWT
export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }),

  // Validate the audience
  audience: [`${apiAudience }`],
  algorithms: ['RS256']
});
   