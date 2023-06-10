import Image from "next/image";
import headerImage from '../assets/images/illustration-working.svg';

const Header = () => {

    return (
        <header className="w-[90%] md:w-[70%] lg:max-w-[1500px] mt-8 mx-auto pb-28">
            <div className="flex items-center justify-center max-w-full flex-col-reverse md:justify-between md:flex-row">
                <div className="text-center md:text-start">
                    <h2 className="font-[700] text-4xl md:text-5xl mt-12 mb-6">More than just <br />shorter links</h2>
                    <p className="text-gray-200 mb-8 w-[400px] font-[700]">Build your brand recognition and get detailed insights on how your links are performing</p>
                    <button className="bg-lblue py-2 px-6 text-white rounded-full font-[400]"><a href="#">Get Started</a></button>
                </div>
                <div className="">
                    <Image src={headerImage} width={500} height={500} alt='Header illustration' />
                </div>
            </div>
        </header>
    )
}

export default Header;
