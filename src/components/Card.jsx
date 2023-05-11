import React from "react";
import Single from "../Assets/single.png";
import  Double from "../Assets/double.png";
import  Triple from "../Assets/triple.png"
const Card = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white  ">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt=''/>
                                <h2 className="text-2xl font-bold text-center py-8">Single User </h2>
                                <p className="text-center text-4xl font-medium ">$149</p>
                                <div className="text-center font-medium ">
                                    <p className='py-2 border-b mx-8'>500 GB storage</p>
                                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                                    <p className='py-2 border-b mx-8'>Send up to 2 Gb</p>
                                </div>
                                <button className='bg-[#00df9a] w-[150px] md:w-[200px] rounded font-medium my-6 mx-auto px-6 py-2 truncate'>Start Trial </button>

                        </div>
                    <div className="w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
                        <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Double} alt=''/>
                        <h2 className="text-2xl font-bold text-center py-8">Double User </h2>
                        <p className="text-center text-4xl font-medium ">$149</p>
                        <div className="text-center font-medium ">
                            <p className='py-2 border-b mx-8'>500 GB storage</p>
                            <p className='py-2 border-b mx-8'>1 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 2 Gb</p>
                        </div>
                        <button className='bg-black text-[#00df9a] w-[150px] md:w-[200px] rounded font-medium my-6 mx-auto px-6 py-2 truncate'>Start Trial </button>

                    </div>
                    <div className="w-full shadow-xl flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300">
                        <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt=''/>
                        <h2 className="text-2xl font-bold text-center py-8">Triple User </h2>
                        <p className="text-center text-4xl font-medium ">$149</p>
                        <div className="text-center font-medium ">
                            <p className='py-2 border-b mx-8'>500 GB storage</p>
                            <p className='py-2 border-b mx-8'>1 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 2 Gb</p>
                        </div>
                        <button className='bg-[#00df9a] w-[150px] md:w-[200px] rounded font-medium my-6 mx-auto px-6 py-2 truncate'>Start Trial </button>

                    </div>
                </div>
        </div>
    )
}
export  default  Card