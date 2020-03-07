const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var result = require('./result.js')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile('form.html', { root: __dirname + "/views/pages"}))
  .get('/result', result.calculate)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
