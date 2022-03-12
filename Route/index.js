//const userFake=require('../usersFake.js')

module.exports=(app)=>{

    app.get("/api",(req,res)=>{
        console.log('INSIDE REQ')

        //const userSend=JSON.stringify(userFake)
        res.send("Hollllaaaa")
        //res.json(userFake)
    })

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}