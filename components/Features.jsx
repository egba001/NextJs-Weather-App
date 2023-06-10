import Image from 'next/image';
import background from '../assets/images/bg-boost-desktop.svg';
import brandRecognition from '../assets/images/icon-brand-recognition.svg';
import detailedRecords from '../assets/images/icon-detailed-records.svg';
import fullyCustomizable from '../assets/images/icon-fully-customizable.svg';
import axios from "axios";
import { useState } from "react";

import Links from "./Links";

const featuresDetails = [
    {
        title: "Brand recognition",
        description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        icon: brandRecognition
    },
    {
        title: "Detailed records",
        description: "Gain insights into who is clicking your links. Knowing where and when people engage with your content helps inform better decisions.",
        icon: detailedRecords
    },
    {
        title: "Fully customizable",
        description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        icon: fullyCustomizable
    },
]

const Features = () => {

    // state to hold the value of the link from the input element
    const [ link, setLink ] = useState('');
    // state to hold the value of the shortened link
    const [ shortenedLink, setShortenedLink ] = useState();
    // state to handle client-sdie validation
    const [error, setError] = useState(false);
    // state to hold the boolean value of clipboard state
    const [isCopied, setIsCopied] = useState(false);

    // function to copy text to clipboard
    function copyTextToClipboard() {
        return navigator.clipboard.writeText(shortenedLink);
    }
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard()
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // Function to post long url to shrtcode api
    const shortenURL = async (e) => {
        e.preventDefault();
        !link ? setError(true) : setError(false);
        if(!error) {
            try {
              const response = await axios(
                `https://api.shrtco.de/v2/shorten?url=${link}`
              );
              setShortenedLink(response.data.result.full_short_link);
            } catch (e) {
              console.log(e);
            }
        }
      };

      const inputHandler = (e) => {
        setError(false);
        setLink(e.target.value);
      }

    return (
        <section className="bg-gray-100 relative mx-auto w-full py-28 mt-8">
            <div className="-top-20 w-[90%] left-[50%] translate-x-[-50%] absolute md:w-[70%] lg:max-w-[1500px] mx-auto">
                <div className="h-40 bg-[#3b3054] w-full relative rounded-lg">
                    <Image
                        src={background}
                        alt="background"
                        fill
                        className="object-cover rounded-lg"
                    />
                    <div className="w-[80%] z-10 m-auto items-center h-full flex relative">
                        <form onSubmit={shortenURL} className='w-full absolute top-7 flex flex-col md:flex-row md:justify-between md:top-14 h-full'>
                            <div className='w-full md:w-[83%]'>
                                <input placeholder="Shorten a link here..." type='url' className={`p-3 focus:outline-none rounded-md border-red ${error ? 'border-2' : 'border-0'} w-full  mb-4 md:mb-0 md:mr-[2%] mr-0`} onChange={inputHandler} value={link} />
                                {error && <p className='italic text-xs mt-2 text-red'>Please add a link</p>}
                            </div>
                            <input type='submit' value="Shorten it!" className='bg-cyan-400 text-white py-3 px-4 rounded-md  cursor-pointer md:w-[15%] block w-full h-fit' />
                        </form>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-[90%] md:w-[70%] lg:max-w-[1500px] relative">
                {shortenedLink && <Links shortenedLink={shortenedLink} handleCopyClick={handleCopyClick} isCopied={isCopied} />}
                <div className="text-center mt-20">
                    <h1 className="font-[700] text-darkViolet text-xl mb-4">Advanced Statistics</h1>
                    <p className="font-[500] text-gray-200 text-sm leading-relaxed">Track how your links are performing across the web with<br /> our advanced statistics dashboard</p>
                </div>
                <div className='my-auto h-[350px] flex items-center'>
                    <div className='bg-cyan-500 w-full h-[8px]'>
                    <div className="flex h-[350px] w-full justify-between z-10">
                     <div className='rounded-md w-[30%] bg-white -mt-28 h-[210px] px-6'>
                        <div className="-mt-6 rounded-full p-4 bg-darkViolet w-fit h-fit">
                            <Image src={featuresDetails[0].icon} width={50} height={50} alt='feature illustration'  />
                        </div>
                          <div className="mt-4">
                              <h3 className='font-[700] mb-2 text-darkViolet'>{featuresDetails[0].title}</h3>
                              <p className="text-xs text-gray-200 leading-relaxed">{featuresDetails[1].description}</p>
                          </div>
                     </div>
                     <div className='rounded-md w-[30%] bg-white -mt-20 h-[210px] px-6'>
                        <div className="-mt-6 rounded-full p-4 bg-darkViolet w-fit h-fit">
                          <Image src={featuresDetails[1].icon} width={50} height={50} alt='feature illustration'
                        />
                        </div>
                          <div className="mt-4">
                              <h3 className='font-[700] mb-2 text-darkViolet'>{featuresDetails[2].title}</h3>
                              <p className="text-xs text-gray-200 leading-relaxed">{featuresDetails[1].description}</p>
                          </div>
                     </div>
                     <div className='rounded-md w-[30%] bg-white -mt-12 h-[210px] px-6'>
                         <div className="-mt-6 rounded-full p-4 bg-darkViolet w-fit h-fit">
                              <Image src={featuresDetails[0].icon} width={50} height={50} alt='feature illustration'/>
                         </div>
                          <div className="mt-4">
                              <h3 className='font-[700] mb-2 text-darkViolet'>{featuresDetails[0].title}</h3>
                              <p className="text-xs text-gray-200 leading-relaxed">{featuresDetails[1].description}</p>
                          </div>
                     </div>
                </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;