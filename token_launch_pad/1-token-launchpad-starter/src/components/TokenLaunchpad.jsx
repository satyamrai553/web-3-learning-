import { getMinimumBalanceForRentExemptMint } from "@solana/spl-token";
import {TOKEN_PROGRAM_ID,createInitializeMint2Instruction } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react"


export function TokenLaunchpad() {
    const {connection} = useConnection();
    const wallet = useWallet();
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [initialSupply, setInitialSupply] = useState("");



    async function createToken(){
        const lamports = await getMinimumBalanceForRentExemptMint(connection)
        const keypair = Keypair.generate()
        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: 82,
                lamports,
                programId: TOKEN_PROGRAM_ID
            }),
            await createInitializeMint2Instruction(keypair.publicKey, 6, wallet.publicKey, wallet.publicKey,TOKEN_PROGRAM_ID)
        )

        transaction.feePayer = wallet.publicKey;
        const recentBlockhash = await connection.getLatestBlockhash();
        transaction.recentBlockhash = recentBlockhash.blockhash;

        transaction.partialSign(keypair);
        const response = await wallet.sendTransaction(transaction, connection)

        console.log(response)
    }


    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className='inputText' type='text' placeholder='Name' onChange={e=>setName(e.target.value)}></input> <br />
        <input className='inputText' type='text' placeholder='Symbol' onChange={e=>setSymbol(e.target.value)}></input> <br />
        <input className='inputText' type='text' placeholder='Image URL' onChange={e=>setImageURL(e.target.value)}></input> <br />
        <input className='inputText' type='text' placeholder='Initial Supply' onChange={e=>setInitialSupply(e.target.value)}></input> <br />
        <button onClick={createToken} className='btn'>Create a token</button>
    </div>
}