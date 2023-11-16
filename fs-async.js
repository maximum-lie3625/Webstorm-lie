const {readFile, writeFile} = require('fs')
readFile('./CONTENT/first.txt',"utf-8",(err,result) =>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./CONTENT/second.txt',"utf-8",(err, result) => {
        if (err) {
            console.log(err)
            return
        }
        writeFile('./CONTENT/result-async.txt',`Here the result : ${first} , ${result}`,(err, result) =>{
            if (err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})