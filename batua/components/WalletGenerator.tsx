"use client"
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Keypair } from "@solana/web3.js";
import { useState } from "react";
import toast from "react-hot-toast";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";


function SolanaWallet({
  mnemonic,
  currentIndex,
  setCurrentIndex,
  publicKeys,
  setPublicKeys,
}: {
  mnemonic: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  publicKeys: string[];
  setPublicKeys: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  async function addWallet() {
    const seed = mnemonicToSeedSync(mnemonic); 
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed).key; 
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    setCurrentIndex((prev) => prev + 1);
    setPublicKeys((prev) => [...prev, keypair.publicKey.toBase58()]);
  }

  return (
    <div>
      <button onClick={addWallet} className="bg-blue-600 px-3 py-1 rounded">
        Add SOL wallet
      </button>
      {publicKeys.map((p, idx) => (
        <div key={idx}>{p}</div>
      ))}
    </div>
  );
}

export function WalletGenerator() {
  const [mnemonicString, setMnemonicString] = useState("");
  const [mnemonicWords, setMnemonicWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState<string[]>([]);

  function generateMnemonicWords() {
    const mnemonic = generateMnemonic(128);
    setMnemonicString(mnemonic);
    setMnemonicWords(mnemonic.split(" "));
    toast.success("Mnemonic generated!");
  }

  async function copyToClipboard() {
    const text = mnemonicWords.join(" ");
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Mnemonic copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy!");
      console.error("Failed to copy: ", error);
    }
  }

  return (
    <div className="flex flex-col gap-4 w-3/4 items-center">
      {mnemonicWords.length === 0 && (
        <button
          onClick={generateMnemonicWords}
          className="bg-orange-500 border-0 rounded-sm w-1/4 text-md font-bold font-mono"
        >
          Generate Secret Phrase
        </button>
      )}

      {mnemonicWords.length > 0 && (
        <button
          onClick={copyToClipboard}
          className="border-0 rounded-sm w-1/4 text-md font-bold font-mono bg-gray-600"
        >
          Copy
        </button>
      )}

      <div className="w-full outline outline-offset-1">
        <span className="text-3xl font-medium font-mono m-4">
          Secret phrase
        </span>
        {mnemonicWords.length > 0 && (
          <div className="grid grid-cols-4 gap-4 m-4">
            {mnemonicWords.map((word, index) => (
              <div
                key={index}
                className="p-3 bg-gray-950 border-2 border-white rounded-2xl font-mono text-lg"
              >
                {word}
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {mnemonicWords.length > 0 && (
          <SolanaWallet
            mnemonic={mnemonicString}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            publicKeys={publicKeys}
            setPublicKeys={setPublicKeys}
          />
        )}
      </div>
    </div>
  );
}
