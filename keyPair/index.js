import { Keypair } from "@solana/web3.js";


const keyPair = Keypair.generate();

console.log(`Public key is: `,keyPair.publicKey.toBase58());
const decoder = new TextDecoder('utf-8')
const str = decoder.decode(keyPair.secretKey)
console.log(`Private key is: `,str);


