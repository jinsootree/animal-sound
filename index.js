const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name == "dog") {
        res.send("<img src=https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg>")
    } else if(name == "cat") {
        res.send("<img src=https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_960_720.jpg>")
    } else if(name == "pig") {
        res.send("<img src=https://cdn.pixabay.com/photo/2016/03/21/16/59/piggy-bank-1270926_960_720.jpg>")
    } else {
        res.send("<img src=https://cdn.pixabay.com/photo/2022/04/02/14/22/the-great-wave-off-kanagawa-7107112_960_720.png>")
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})