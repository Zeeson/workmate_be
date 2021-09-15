import  jwt  from 'express-jwt'
import  jwks  from 'jwks-rsa'

export const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-kvcpj-so.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://www.workmate.com',
    issuer: 'https://dev-kvcpj-so.us.auth0.com/',
    algorithms: ['RS256']
});


// from react
// Signout links
const logout = () => {
    const domain = 'dev-kvcpj-so.us.auth0.com'
    const clientId = 'qsS6nn254sVoZvGUshtuYNPwY17jV0o2'
    const returnTo = 'http://localhost:3000'

    const response = await fetch(
        `https://${domain}/logout?client_id=${clientId}&retrunTo=${returnTo}`, {
        redirect: 'manual'
        }
    );
    window.location.replace(response.url)
}

// Auth0 setup
const login = async () => {
    const domain = 'dev-kvcpj-so.us.auth0.com'
    const audience = 'https://www.workmate.com'
    const scope = 'read:project'
    const clientId = 'qsS6nn254sVoZvGUshtuYNPwY17jV0o2'
    const responseType = 'code'
    const redirectUri = 'http://localhost:3000/projects'

    const response = fetch(
      `https://${domain}/autorize?`+
      `audience=${audience}&` +
      `scope=${scope}&` +
      `response_type=${responseType}&` +
      `client_id=${clientId}&` +
      `redirect_uri=${redirectUri}`, {
        redirect: 'manual'
      }
    );
    window.location.replace(response.url)
  };


  // projects
  
  try {
    const { access_token } = req.oauth;
    const response = axios({
        method: 'get',
        url: projectEndpoint,
        headers: {
            Authorization: `Bearer ${access_token}`
        },
    });
    res.json(response.data)
    
} catch (error) {
    console.log(error)
} if(error.response.status === 401){
    res.status(401).json("Unauthorized to access data")
} else if(error.response.status === 403){
    res.status(403).json("Permission denied")
} else{
    res.status(500).json("Whooops!, Something went wrong")
}