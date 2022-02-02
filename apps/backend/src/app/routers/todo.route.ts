import { Router, Request, Response } from 'express';
import Todo from '../models/todo.model';

const router = Router();

router.get('/all-todo', (req: Request, res: Response) => {
  Todo.find({}, (err, data) => {
    if (err) return res.json(err);
    if (data === null) res.json({ err: 'Todo not found!' });

    return res.json(data);
  });
});

router.get('/get-todo/:id', (req: Request, res: Response) => {
  Todo.findById(req.params.id, (err, data) => {
    if (err) return res.json(err);
    if (data === null) res.json({ err: 'Todo not found!' });

    return res.json(data);
  });
});

router.post('/add-todo', (req: Request, res: Response) => {
  const newTodo = new Todo({
    name: req.body.name,
  });

  newTodo.save((err, data) => {
    if (err) return res.json(err);
  });
  return res.json({ msg: 'Todo Create Success' });
});

router.delete('/delete-todo/:id', (req: Request, res: Response) => {
  Todo.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) return res.json({ err });
    if (data === null) res.json({ err: 'Todo not found!' });

    return res.json({ msg: 'Delete Todo Success' });
  });
});

router.put('/update-todo/:id', (req: Request, res: Response) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
      },
    },
    (err, data) => {
      if (err) return res.json({ err });
      if (data === null) res.json({ err: 'Todo not found!' });

      return res.json({ msg: 'Update Todo Success' });
    }
  );
});

export default router;
