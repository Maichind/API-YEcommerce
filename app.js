import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './routes/index.routes.js'
import routes from './routes/images.routes.js'

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(router)
app.use(routes)

export default app;