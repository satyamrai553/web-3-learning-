import crypto from "crypto"



const input = "satyam";


const hash = crypto.createHash("sha256").update(input)


console.log(hash)