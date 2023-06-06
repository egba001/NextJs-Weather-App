import { Poppins } from 'next/font/google'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] })

export default function Home() {

  return (
    <main className={`flex min-h-screen w-full justify-center ${poppins.className}`}>
      <div className='w-full'>
        <Navbar />
        <Header />
      </div>
    </main>
  )
}
