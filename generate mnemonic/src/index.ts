import { generateMnemonic, validateMnemonic } from "bip39";

const words = generateMnemonic(128)

console.log(words)
