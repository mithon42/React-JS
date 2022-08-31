const express = require('express')

const app = express();
app.use(express.json())

const books = [
  {
    id: '1',
    name: 'Personal Finance',
    price: 500
  },
  {
    id: '2',
    name: 'Javascript for Dummies',
    price: 1000
  },
  {
    id: '3',
    name: 'Javascript Definitive Guide',
    price: 1500
  },
  {
    id: '4',
    name: 'Personal Finance',
    price: 2000
  },
  {
    id: '5',
    name: 'Javascript for Dummies',
    price: 2500
  },
  {
    id: '6',
    name: 'Javascript Definitive Guide',
    price: 3000
  },
]

app.get('/', (req, res) => {
  if(req.query.show === 'all'){
    return res.json('books')
  }

  if(req.query.price == '500'){
    const result = books.filter((book) => book.price <= 500)
    return res.json(result)
  }

  if(req.query.price == '100'){
    const result = books.filter((book) => book.price <= 100)
    return res.json(result)
  }

  return res.json(books)
})

app.post('/books', (req, res) => {
  const book = req.body
  books.push(book)

  res.json(books)
})



app.listen(5000, () => {
  console.log('Server is Listening on port 5000');
})