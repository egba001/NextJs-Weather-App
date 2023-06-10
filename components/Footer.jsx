import logo from '../assets/images/logowhite.svg';
import Image from 'next/image';
import { UilTwitter } from '@iconscout/react-unicons';
import { UilFacebook } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <footer className="bg-gray-400 text-white py-16">
            <div className="flex justify-between w-[90%] md:w-[70%] lg:max-w-[1500px] mx-auto">
                <div>
                    <Image src={logo} alt='logo illustration' width='100' height='100' />
                </div>
                <div className='flex space-x-20'>
                   <div>
                       <h2 className='font-[700]'>Features</h2>
                       <nav className='mt-2'>
                           <ul className='text-sm flex flex-col space-y-3'>
                               <li className='hover:text-lblue'><a href='#'>Link shortening</a></li>
                               <li className='hover:text-lblue'><a href='#'>Branded links</a></li>
                               <li className='hover:text-lblue'><a href='#'>Analytics</a></li>
                           </ul>
                       </nav>
                   </div>
                   <div>
                       <h2 className='font-[700]'>Resources</h2>
                       <nav className='mt-2'>
                           <ul className='text-sm flex flex-col space-y-3'>
                               <li className='hover:text-lblue'><a href='#'>Blog</a></li>
                               <li className='hover:text-lblue'><a href='#'>Developers</a></li>
                               <li className='hover:text-lblue'><a href='#'>Support</a></li>
                           </ul>
                       </nav>
                   </div>
                   <div>
                       <h2 className='font-[700]'>Company</h2>
                       <nav className='mt-2'>
                           <ul className='text-sm flex flex-col space-y-3'>
                               <li className='hover:text-lblue'><a href='#'>About</a></li>
                               <li className='hover:text-lblue'><a href='#'>Our team</a></li>
                               <li className='hover:text-lblue'><a href='#'>Careers</a></li>
                               <li className='hover:text-lblue'><a href='#'>Contact</a></li>
                           </ul>
                       </nav>
                   </div>
                   <div className='flex items-start space-x-4'>
                        <div className='hover:text-lblue cursor-pointer'>
                            <UilTwitter />
                        </div>
                        <div className='hover:text-lblue cursor-pointer'>
                            <UilFacebook />
                        </div>
                        <div className='hover:text-lblue cursor-pointer'>
                            <UilInstagram />
                        </div>
                   </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;

