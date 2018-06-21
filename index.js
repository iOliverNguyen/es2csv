const express = require('express')
const app = express()

const wrap = (fn) =>
  (req, res) => fn(req, res).then(null, e => res.send(500, `Error: ${e.message || e}`))

app.get('/', (req, res) => res.send(`Get countries as CSV: <a href="/countries.csv">/countries.csv</a>`))
app.get('/countries.csv', wrap(require('./src/countries.js')))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is listening at :${port}`))
