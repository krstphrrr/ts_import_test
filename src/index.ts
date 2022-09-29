import express, { Request, Response } from 'express';

// added exported function from internal module
import testfunction from "./test_module/src/fun"

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  // invoking the test function
  testfunction()
  res.send('example!');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});