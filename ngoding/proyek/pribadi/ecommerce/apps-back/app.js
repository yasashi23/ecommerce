const express = require("express")
const path = require('path')
const prnt = path.resolve(__dirname,'../image/')
const app = express()
const fs = require("fs")
const cors = require("cors")
const webp = require('webp-converter')
const currencyFormartter = require("currency-formatter")
const { json } = require("express")

const hasil = fs.readFileSync("./data.json")
const hasil2 = JSON.parse(hasil)




app.use(cors())
const produk = fs.readFileSync('./data.json','utf-8')






app.get("/api",(req,res) =>{
    res.json(hasil2)
    
})
app.get("/api/:id",(req,res)=>{
    const has = prnt + `/${req.params.id}.jpg`
    const toWebp = prnt + `/${req.params.id}.webp`

    const result = webp.cwebp(has,toWebp,"-q 80", logging="-v")
    result.then((respon)=>{
        console.log(respon)
        res.sendFile(toWebp)
    })
    fs.unlink(has,(err)=>{
        console.log("succes")
    })
})
app.listen(5000,()=>{
    console.log("berjalan")
})