import express from 'express';
// import users from './routes/users.js';
// import products from './routes/products.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT || 3005;


app.use(cors());
app.use(express.json());


let data = [
  {id: 1, year: 2021, price: 10000, color: 'red'},
  {id: 2, year: 2020, price: 15000, color: 'blue'},
  {id: 3, year: 2019, price: 20000, color: 'green'},
  {id: 4, year: 2018, price: 25000, color: 'yellow'},
  {id: 5, year: 2017, price: 30000, color: 'black'}
];


// app.use('/users', users);
// app.use('/products', products);

app.get('/', (req, res) => {
  res.json(data)
});

app.post('/', (req, res) => {
  const { year, price, color } = req.body; // Access the parsed JSON data in req.body
  const object = {
    id: Date.now(),
    year,
    price,
    color
  }
  data = [...data, object]
  res.status(201).json({ message: data }); // Send a JSON response
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


