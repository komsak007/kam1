import * as express from 'express';
import * as morgan from 'morgan';
import * as mogoose from 'mongoose';
import * as cors from 'cors';
import todoRoute from './app/routers/todo.route';

const app = express();
const port = process.env.port || 8000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', todoRoute);

mogoose.connect('mongodb://127.0.0.1:27017/todo', (err: Error) => {
  if (err) return console.log(err);

  console.log('Database Connected!!');

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
});
