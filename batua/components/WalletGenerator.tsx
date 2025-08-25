"use client"
import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "bip39";
import { Keypair } from "@solana/web3.js";
import { useState } from "react";
import toast from "react-hot-toast";



interface wallet{
    publicKey: string,
    privateKey: string,
    mnemonic: string;
    path: string;
}

export function WalletGenerator(){
    const [mnemonicWords, setMnemonicWords] = useState<string[]>([])


    function generateMnemonicWords(){
        const mnemonic = generateMnemonic(128)
        const words = mnemonic.split(" ")
        setMnemonicWords(words)
        toast.success("Mnemonic generated!");
    }

    async function copyToClipboard(){
        const text = mnemonicWords.join(" ")
        try {
            await navigator.clipboard.writeText(text)
            toast.success("Mnemonic copied to clipboard!");
        } catch (error) {
            toast.error("Failed to copy!");
            console.error("Failed to copy: ",error)
        }
    }

    return (
        <div className="flex flex-col gap-4 w-3/4 items-center">
            {mnemonicWords.length === 0 &&<button onClick={generateMnemonicWords} className="bg-orange-500 border-0 rounded-sm w-1/4 text-md font-bold font-mono">Generate Secret Phrase</button>}
            {mnemonicWords.length > 0 && (<button onClick={copyToClipboard} className="border-0 rounded-sm w-1/4 text-md font-bold font-mono bg-gray-600">
        Copy
      </button>)}
            <div className="w-full outline outline-offset-1">
                <span className="text-3xl font-medium font-mono m-4">Secret phrase</span>
                {mnemonicWords.length > 0 && (
                    <div className="grid grid-cols-4 gap-4 m-4">
                        {mnemonicWords.map((word,index)=>(
                            <div key={index} className="p-3 bg-gray-950 border-2 border-white rounded-2xl font-mono text-lg">{word}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

