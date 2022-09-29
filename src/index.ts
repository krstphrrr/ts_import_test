import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('example!');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});