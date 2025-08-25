import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import {WalletGenerator} from "@/components/WalletGenerator";
import {Footer} from "@/components/Footer";




export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen">
      <Navbar/>
      <WalletGenerator/>
    </div>
  );
}
