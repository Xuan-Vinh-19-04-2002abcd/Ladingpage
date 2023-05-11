import React from "react";
import {
FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'
const Footer = () =>{
    return (
        <div className="max-w-[1024px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8  text-white">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
                <p>Please Contact with me</p>
                <div className="flex w-[75%] justify-between my-6 ">
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between">
                <di3v>
                    <h6 className="font-medium text-gray-600 ">Solution</h6>
                    <ul>
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li> Insights</li>
                    </ul>
                </di3v>
                <div>
                    <h6 className="font-medium text-gray-600 ">Support</h6>
                    <ul>
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>API status </li>
                    </ul>
                </div>
                <div>
                <h6 className="font-medium text-gray-600 ">Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Job</li>
                    <li>Careers</li>
                </ul>
            </div>

            </div>


        </div>
    )
}
export default Footer