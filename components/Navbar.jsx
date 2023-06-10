const { useState } = require("react");
import Image from "next/image";
import logo from '../assets/images/logo.svg';
import { UilBars } from '@iconscout/react-unicons'

const Navbar = () => {

    const [visible, setVisibility] = useState(false);

    return (
        <div className="flex mx-auto py-10 w-[90%] md:w-[80%] lg:max-w-[1500px]">
            <div className="container mx-auto flex items-center w-full">
                <div className="flex w-full items-center justify-between">
                    <div className="flex justify-between">
                        <Image src={logo} alt='logo' width='100' height='100' />
                        <nav className="hidden md:block ml-6">
                            <ul className="flex items-center text-sm text-gray-200 space-x-3">
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            <div className="md:hidden">{visible ? <p>Open</p> : <UilBars />}</div>
               <div className="hidden md:block">
                   <nav className="w-full">
                       <ul className="flex items-center space-x-6 text-sm">
                           <li className="text-gray-200"><a href="#">Login</a></li>
                           <li className="bg-cyan-400 w-32 flex justify-center text-white py-2  rounded-full"><a href="#" className="w-fit mx-auto">Sign Up</a></li>
                       </ul>
                   </nav>
               </div>
           </div>
        </div>
    )
}

export default Navbar;