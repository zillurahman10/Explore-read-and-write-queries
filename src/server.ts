import mongoose from 'mongoose'
import app from './app';

const port:number = 5000


// Database
async function run() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/server');
        console.log(`🛢 Database connection successful`);

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
          })
          
    }
    catch(err){
        console.log('Failed to connect database',err);
    }
    finally{

    }
  }

run()

