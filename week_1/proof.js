import crypto from "crypto"

let input = 0;

function getHash(input){
    const hash = crypto.createHash("sha256").update(input).digest("hex")

    return hash;
}

while(true){
    const hash = getHash(input.toString())
    if(hash.startsWith("00000")){
        console.log(input);
        console.log(hash);
        break;
    }
    else{
        input += 1;
    }
}