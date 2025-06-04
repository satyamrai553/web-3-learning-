"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_1 = require("bip39");
const words = (0, bip39_1.generateMnemonic)(128);
console.log(words);
