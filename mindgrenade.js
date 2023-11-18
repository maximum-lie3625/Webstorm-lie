
const { readFile,writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try {
        const first = await readFilePromise('./CONTENT/first.txt', 'utf8'),
            second = await writeFilePromise('./CONTENT/second.txt', `utf8`);
        await writeFilePromise('./CONTENT/result-mind-grenade.txt',`THIS IS AWESOME:${first } ${second} `)
        console.log(first,second)


    } catch (error) {
        console.log(error)
    }
}

start()
//const getText = (path) =>{
//  return new Promise((resolve, reject)=>{
//    readFile(path, 'utf8' , (err, data) =>{
//      if(err) {
//        reject(err)
//  } else {
//    resolve(data)
//}

//})

//})
//}

//getText('./CONTENT/first.txt')
//  .then(result => console.log(result))
//.catch(err => console.log(err))

