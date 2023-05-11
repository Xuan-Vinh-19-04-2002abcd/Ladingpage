import React from "react";
import ReactTyped from "react-typed";

const  Hero = () => {
    return (
        <div className='text-white '>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                    <p className='md:text-3xl text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS </p>
                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data</h1>
                    <div className="flex justify-center items-center ">
                        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible financing for </p>
                        <ReactTyped className="md:text-5xl sm:text-4xl text-xl font pl-2" strings={["BTB","BTC","SASS"]} typeSpeed={120} backSpeed={140} loop></ReactTyped>
                    </div>

                    <p className="text-xl md:text-2xl font-bold text-gray-500 truncate px-4">Monitor your data analytics to increase revenue for BTB,BTC & SASS platforms</p>
                    <button className='bg-[#00df9a] w-[150px] md:w-[200px] rounded font-medium my-6 mx-auto px-6 py-2 truncate'>Get Started</button>
            </div>
        </div>
    )
}
export default Hero