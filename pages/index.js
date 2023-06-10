import { Poppins } from 'next/font/google'
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Features from '../components/Features.jsx';
import Boostlinks from '../components/Boostlinks.jsx';
import Footer from '../components/Footer.jsx';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] })

export default function Home() {

  return (
    <main className={`flex min-h-screen w-full justify-center ${poppins.className}`}>
      <div className='w-full mx-auto'>
        <Navbar />
        <Header />
        <Features />
        <Boostlinks />
        <Footer />
      </div>
    </main>
  )
}
