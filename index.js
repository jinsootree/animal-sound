const { response } = require('express')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

//http메소드, 라우팅, 콜백 함수-함수 끝내고 실행할 함수(=>)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name',(req,res) => {
    const { name }= req.params
   if(name == "dog"){
        res.json({'sound':'멍멍'})
    } else if(name == "cat"){
        res.json({'sound':'야옹'})
    } else if(name == "pig"){
        res.json({'sound':'꿀꿀'})
    } else {
        res.json({'sound':'알수없음'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})