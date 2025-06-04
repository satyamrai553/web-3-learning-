// import * as ed from "@noble/ed25519";

// async function main() {
//   // Generate a secure random private key
//   const privKey = ed.utils.randomPrivateKey();

//   // Convert the message "hello world" to a Uint8Array
//   const message = new TextEncoder().encode("hello world");

//   // Generate the public key from the private key
//   const pubKey = await ed.getPublicKeyAsync(privKey);

//   // Sign the message
//   const signature = await ed.signAsync(message, privKey);

//   // Verify the signature
//   const isValid = await ed.verifyAsync(signature, message, pubKey);

//   // Output the result
//   console.log(isValid); // Should print `true` if the signature is valid
// }

// main();


import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new keypair
const keypair = Keypair.generate();

// Extract the public and private keys
const publicKey = keypair.publicKey.toString();
const secretKey = keypair.secretKey;

// Display the keys
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);

// Convert the message "hello world" to a Uint8Array
const message = new TextEncoder().encode("hello world");

const signature = nacl.sign.detached(message, secretKey);
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes(),
);

console.log(result);