const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/data', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})