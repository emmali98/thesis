const express = require('express')
const app = express()
const port = 3000

app.use('/a', express.static('chapter'))
app.use('/static', express.static('public'))
app.use(express.static('chapter/home'))

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
