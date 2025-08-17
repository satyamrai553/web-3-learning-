// import { Connection, clusterApiUrl } from "@solana/web3.js";



// const connection = new Connection(clusterApiUrl("devnet"));
// console.log(connection)
// console.log(`✅ Connected!`);


// import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"));
// const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
// const balance = await connection.getBalance(address);

// console.log(`The balance of the account at ${address} is ${balance} lamports`);
// console.log(`✅ Finished!`);



// import {
//   Connection,
//   PublicKey,
//   clusterApiUrl,
//   LAMPORTS_PER_SOL
// } from "@solana/web3.js";

// console.log(clusterApiUrl)
// const connection = new Connection(clusterApiUrl("devnet"));
// const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
// const balance = await connection.getBalance(address);
// const balanceInSol = balance / LAMPORTS_PER_SOL;

// console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
// console.log(`✅ Finished!`);




import {Connection, PublicKey, LAMPORTS_PER_SOL }from "@solana/web3.js"

const suppliedPubKey = process.argv[2];
if(!suppliedPubKey){
    throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const publicKey = new PublicKey(suppliedPubKey)
const BalanceInLamports =await connection.getBalance(publicKey);
const balanceInSOL = BalanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);