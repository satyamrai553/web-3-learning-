import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import {useEffect, useState} from 'react'
 
export function Airdrop(){
    const [amount, setAmount] = useState(0);
    const [balance, setBalance] = useState(0);


    const wallet = useWallet();  
    const {connection} = useConnection();
    async function sendAirdropToUser(){
        const result = await connection.requestAirdrop(wallet.publicKey, amount*1000000000);
        console.log(result);
        alert(`Amount of: ${amount} SOL has been sent successfully`)
    }
    function handleChange(event){
        setAmount(event.target.value);
    }


   useEffect(() => {
    const fetchBalance = async () => {
        if (wallet?.publicKey) {
            try {
                const result = await connection.getBalance(wallet.publicKey);
                setBalance(result/1000000000);
            } catch (error) {
                console.error("Failed to fetch balance:", error);
            }
        }
    };

    fetchBalance();
}, [wallet?.publicKey]);


    return(
        <div>
            <input onChange={handleChange}type="text" placeholder="amount eg: 1"/>
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
            <h1>
                Balance: {balance} SOL
                
            </h1>
        </div>
    )
}