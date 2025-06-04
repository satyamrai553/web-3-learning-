"use strict";
// import * as ed from "@noble/ed25519";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const web3_js_1 = require("@solana/web3.js");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
// Generate a new keypair
const keypair = web3_js_1.Keypair.generate();
// Extract the public and private keys
const publicKey = keypair.publicKey.toString();
const secretKey = keypair.secretKey;
// Display the keys
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);
// Convert the message "hello world" to a Uint8Array
const message = new TextEncoder().encode("hello world");
const signature = tweetnacl_1.default.sign.detached(message, secretKey);
const result = tweetnacl_1.default.sign.detached.verify(message, signature, keypair.publicKey.toBytes());
console.log(result);
