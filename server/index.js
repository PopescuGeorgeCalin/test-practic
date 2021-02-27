import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { userRouter, authRouter } from './routes'

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:3000'}));
// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/login', authRouter)
app.use('/api/users', userRouter)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
