import mongoose from 'mongoose'
import { config } from './constants'

const Database = () => {
    mongoose.connect(config.databaseURI, { 
        useNewUrlParser: true,
        useUnifiedTopology:true,
        // useCreateIndex: true
        })
    .then(() => {
        console.log("<<:::>> Connected to Database")
    })
    .catch(err => {
        console.log("There was an error while connecting to the database.", err)
    })
}

export default Database