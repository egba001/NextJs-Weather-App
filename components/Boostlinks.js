import Image from "next/image";
import background from '../assets/images/bg-boost-desktop.svg'

const Boostlinks = () => {
    return (
        <section className="h-40 bg-[#3b3054] max-w-screen relative">
                <Image
                    src={background}
                    alt="background"
                    fill
                    className="object-cover w-full rounded-lg"
                />
                <div className="w-[80%] text-white text-center items-center flex flex-col z-10 m-auto justify-center h-full relative">
                   <h2 className="font-[700] w-full mb-2 text-3xl">Boost your links today</h2>
                   <button className="bg-cyan-400 px-4 py-2 rounded-full w-fit">Gets started</button>
                </div>
            </section>
    )
}

export default Boostlinks