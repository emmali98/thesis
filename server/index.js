const express = require('express')
const app = express()
const port = 3000

app.use('/chapter', express.static('chapter'))
app.use('/static', express.static('static'))
app.use(express.static('chapter/home'))

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
