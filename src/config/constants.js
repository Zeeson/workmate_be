import dotEnv from 'dotenv';
const dotEnvFound =  dotEnv.config()

if(!dotEnvFound) throw new Error("Could not find dotEnv file")

 const Constant = {
    port: process.env.PORT,
    databaseURI : process.env.NODE_ENV==='production' ? process.env.DATABASE_URI : process.env.DATABASE_URI
}

export { Constant as config}