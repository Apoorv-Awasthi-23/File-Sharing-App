import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBconnection from './database/db.js';

const App=express();
App.use(cors());

App.use('/',router);

const PORT=8000;

DBconnection();

App.listen(PORT,()=>console.log(`Server is running on ${PORT}`));
