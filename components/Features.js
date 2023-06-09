import Image from 'next/image';
import brandRecognition from '../assets/images/icon-brand-recognition.svg';
import detailedRecords from '../assets/images/icon-detailed-records.svg';
import fullyCustomizable from '../assets/images/icon-fully-customizable.svg';

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
    return (
        <section className="bg-gray-100 h-screen w-full mt-8">
            <div className="mx-auto w-[90%] md:w-[70%] lg:max-w-[1500px] pt-32 relative">
                <div className="text-center">
                    <h1 className="font-[700] text-xl mb-4">Advanced Statistics</h1>
                    <p className="font-[500] text-sm leading-relaxed">Track how your links are performing across the web with<br /> our advanced statistics dashboard</p>
                </div>
                <div className='my-auto h-[350px] flex items-center'>
                    <div className='bg-cyan-500 w-full h-[12px]'>
                    <div className="flex h-[350px] w-full justify-between z-10">
                     <div className='rounded-md w-[30%] bg-white -mt-28 h-[210px] px-6'>
                        <div className="-mt-6 rounded-full p-4 bg-violet-900 w-fit h-fit">
                            <Image src={featuresDetails[0].icon} width={50} height={50} alt='feature illustration'  />
                        </div>
                          <div className="mt-4">
                              <h3 className='font-[700] mb-2'>{featuresDetails[0].title}</h3>
                              <p className="text-xs">{featuresDetails[1].description}</p>
                          </div>
                     </div>
                     <div className='rounded-md w-[30%] bg-white -mt-20 h-[210px] px-6'>
                        <div className="-mt-6 rounded-full p-4 bg-violet-900 w-fit h-fit">
                          <Image src={featuresDetails[1].icon} width={50} height={50} alt='feature illustration'
                        />
                        </div>
                          <div className="mt-4">
                              <h3 className='font-[700] mb-2'>{featuresDetails[2].title}</h3>
                              <p className="text-xs">{featuresDetails[1].description}</p>
                          </div>
                     </div>
                     <div className='rounded-md w-[30%] bg-white -mt-12 h-[210px] px-6'>
                         <div className="-mt-6 rounded-full p-4 bg-violet-900 w-fit h-fit">
                              <Image src={featuresDetails[0].icon} width={50} height={50} alt='feature illustration'/>
                         </div>
                          <div className="mt-4">
                              <h3 className='font-[700] mb-2'>{featuresDetails[0].title}</h3>
                              <p className="text-xs">{featuresDetails[1].description}</p>
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