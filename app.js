import express from 'express'; 
import cors from 'cors'
import morgan from 'morgan'
const app = express();

// Configs
// const config = require("./src/config/constants")
import  { config } from "./src/config/constants"
import Database from "./src/config/database"


// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// cors
app.use(cors());

// morgan
app.use(morgan('tiny'));


const PORT  = config.port
app.listen(PORT, () => {
    Database()
    console.log(`Server listening on port ${PORT}`)
})