import mongoose from 'mongoose';
import config from '../ConfigEntorno/config';

mongoose.connect(config.Db)
    .then(()=> console.log('database connect'))
    .catch((error)=> console.log('database error', error))
