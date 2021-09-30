import express from 'express'; 
const app = express();
import cors from 'cors';
import morgan from 'morgan';
import { checkJwt } from './src/middelwares/oAuth';
import axios from 'axios';

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const corsOptions =  {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

// Configs
import  { config } from "./src/config/constants"
import Database from "./src/config/database"

// Router
import router from './src/routes/projectRoutes'
app.use('/projects', router)


// morgan
app.use(morgan('tiny'));

   
  app.use(function(err, req, res, next){
    console.error(err.stack);
    return res.status(err.status).json({ message: err.message });
  });

const PORT  = config.port
app.listen(PORT, () => {
    Database()
    console.log(`Server listening on port ${PORT}`)
})