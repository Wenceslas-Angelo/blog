/* eslint-disable no-console */
import Express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotEnv from 'dotenv';

// Router
import PostRouter from './routers/Post.js';

const App = Express();
dotEnv.config();

App.use(cors());
App.use(Express.json());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => console.log('MongoDB connexion success...'))
  .catch((error) => console.log(`MongoDB connexion error: ${error}`));

App.use('/post', PostRouter);

export default App;
