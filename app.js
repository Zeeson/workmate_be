import express from 'express'; 
const app = express();
import cors from 'cors';
import morgan from 'morgan';

// Express body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// cors local
// const corsOptions =  {
//   origin: 'http://localhost:3000'
// };
// app.use(cors(corsOptions));

// cors production
app.use(cors())

// Configs
import  { config } from "./src/config/constants"
import Database from "./src/config/database"

// Router
import router from './src/routes/projectRoutes'
import contactRoute from './src/routes/contactRoutes'
app.use('/projects', router)
app.use('/contact-us', contactRoute)

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