import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();


    async function requestAirDropToUser(){
        const response = await connection.requestAirdrop(wallet.publicKey, 1*LAMPORTS_PER_SOL)
        alert("Aridrop send 1 SOL")
        console.log(response)
    }

return(
    <div>
        <button onClick={requestAirDropToUser}>Airdrop</button>
    </div>
)
}


