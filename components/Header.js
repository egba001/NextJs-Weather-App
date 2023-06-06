import Image from "next/image";
import headerImage from '../assets/images/illustration-working.svg';
import background from '../assets/images/bg-boost-desktop.svg';

const Header = () => {
    return (
        <header className="w-full mt-8">
            <div className="flex items-center w-full flex-col justify-between md:flex-row">
                <div>
                    <h2 className="font-[700] text-6xl mb-6">More than just <br />shorter links</h2>
                    <p className="text-gray-200 mb-8 font-[700]">Build your brand recognition and get detailed<br /> insights on how your links are performing</p>
                    <button className="bg-cyan-400 py-2 px-6 text-white rounded-full font-[400]"><a href="#">Get Started</a></button>
                </div>
                <div className="">
                    <Image src={headerImage} className='' width={500} height={500} alt='Header illustration' />
                </div>
            </div>
            <div className="-mb-20 bg-[#3b3054] relative rounded-md p-7">
                <Image
                    src={background}
                    alt="background"
                    fill
                    className="object-cover"
                />
                <form className="z-10 relative">
                    <input placeholder="Shorten a link here..." type='url' className="p-3 rounded-md" />
                </form>
            </div>
        </header>
    )
}

export default Header;
