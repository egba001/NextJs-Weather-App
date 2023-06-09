import logo from '../assets/images/logowhite.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-violet-900 text-white py-16">
            <div className="flex justify-between w-[90%] md:w-[70%] lg:max-w-[1500px] mx-auto">
                <div>
                    <Image src={logo} alt='logo' width='100' height='100' className='text-white' />
                </div>
                <div className='flex space-x-20'>
                   <div>
                       <h2 className='font-[700]'>Features</h2>
                       <nav className='flex flex-col space-y-2'>
                           <ul className='text-sm'>
                               <li className='hover:text-purple-950'><a href='#'>Link shortening</a></li>
                               <li className='hover:text-purple-950'><a href='#'>Branded links</a></li>
                               <li className='hover:text-purple-950'><a href='#'>Analytics</a></li>
                           </ul>
                       </nav>
                   </div>
                   <div>
                       <h2 className='font-[700]'>Resources</h2>
                       <nav className='flex flex-col space-y-2'>
                           <ul className='text-sm'>
                               <li className='hover:text-purple-950'><a href='#'>Blog</a></li>
                               <li className='hover:text-purple-950'><a href='#'>Developers</a></li>
                               <li className='hover:text-purple-950'><a href='#'>Support</a></li>
                           </ul>
                       </nav>
                   </div>
                   <div>
                       <h2 className='font-[700]'>Company</h2>
                       <nav className='flex flex-col space-y-2'>
                           <ul className='text-sm'>
                               <li className='hover:text-purple-950'><a href='#'>About</a></li>
                               <li className='hover:text-purple-950'><a href='#'>Our team</a></li>
                               <li className='hover:text-purple-950'><a href='#'>Careers</a></li>
                               <li className='hover:text-purple-950'><a href='#'>Contact</a></li>
                           </ul>
                       </nav>
                   </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;