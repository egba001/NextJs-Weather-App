import Image from "next/image";
import headerImage from '../assets/images/illustration-working.svg';
import background from '../assets/images/bg-boost-desktop.svg';
import { useState } from "react";
import axios from "axios";

const Header = () => {

    // state to hold the value of the link from the input element
    const [ link, setLink ] = useState('');
    const [ shortenedLink, setShortenedLink ] = useState();

    const shortenURL = async (e) => {
        e.preventDefault();
        try {
          const response = await axios(
            `https://api.shrtco.de/v2/shorten?url=${link}`
          );
          setShortenedLink(response.data.result.full_short_link);
        } catch (e) {
          console.log(e);
        }
        setLink('')
      };

    return (
        <header className="w-[90%] md:w-[70%] lg:max-w-[1500px] mt-8 mx-auto">
            <div className="flex items-center justify-center max-w-full flex-col-reverse md:justify-between md:flex-row">
                <div className="text-center md:text-start">
                    <h2 className="font-[700] text-4xl md:text-5xl mt-12 mb-6">More than just <br />shorter links</h2>
                    <p className="text-gray-200 mb-8 w-[400px] font-[700]">Build your brand recognition and get detailed insights on how your links are performing</p>
                    <button className="bg-cyan-400 py-2 px-6 text-white rounded-full font-[400]"><a href="#">Get Started</a></button>
                </div>
                <div className="">
                    <Image src={headerImage} width={500} height={500} alt='Header illustration' />
                </div>
            </div>
            <div className="h-40 bg-[#3b3054] w-full relative rounded-lg -mb-20 mt-12">
                <Image
                    src={background}
                    alt="background"
                    fill
                    className="object-cover rounded-lg"
                />
                <div className="w-[80%] z-10 m-auto items-center h-full flex relative">
                    <form onSubmit={shortenURL} className="w-full absolute top-7 md:top-14 h-full">
                    <p>{shortenedLink}</p>
                        <input placeholder="Shorten a link here..." type='url' className="p-3 rounded-md md:w-[83%] w-full mb-4 md:mb-0 md:mr-[2%] mr-0" onChange={(e) => setLink(e.target.value)} value={link} />
                        <input type='submit' value="Shorten it!" className='bg-cyan-400 text-white py-3 px-4 rounded-md cursor-pointer md:w-[15%] block md:inline-block w-full' />
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header;
