import crypto from 'crypto'


var input = 0
const prefix = "00000"

while(true){
    let inputStr = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
`  + input.toString();
const hash = crypto.createHash('sha256').update(inputStr).digest('hex')

if(hash.startsWith(prefix)){
    console.log(input)
    break
}
    input++
}






