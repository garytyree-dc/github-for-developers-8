const port = 3000
require('http')
  .createServer((req, res) => {
    console.log('url:', req.url)
    res.end('Hello, World. This is GT')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })
