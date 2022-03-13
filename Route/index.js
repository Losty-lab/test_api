//const userFake=require('../usersFake.js')

module.exports=(app)=>{

    app.get("/api/message",(req,res)=>{
        console.log('INSIDE REQ')

        //const userSend=JSON.stringify(userFake)
        //res.send("Hollllaaaa")
        //res.json(userFake)
        res.status(200).send({message:"Hola"})
    })

    // app.get('*', (req,res)=>{
    //     res.sendFile(path.join(__dirname + '/client/build/index.html'))
    // })


}