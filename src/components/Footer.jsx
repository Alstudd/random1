import React from "react";
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full bg-[#EEF4FF] py-8 md:px-2 px-10">
            <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <img className="col-span-2 w-[20rem]" src="/wewomenlogo.png" alt="" />
                <div className="mt-6">
                    <h6 className="font-bold uppercase py-2">Features</h6>
                    <ol>
                        <li className="py-2">Security</li>
                        <li className="py-2">Empowerment</li>
                        <li className="py-2">Medical Support</li>
                    </ol>
                </div>
                <div className="mt-6">
                    <h6 className="font-bold uppercase py-2">Links</h6>
                    <ol>
                        <a href="/"><li className="py-2">Home</li></a>
                        <a href="/about"><li className="py-2">About</li></a>
                        <a href="/contact"><li className="py-2">Contact</li></a>
                    </ol>
                </div>
                <div className="col-span-2 mt-6 md:pt-2">
                    <p className="font-bold uppercase">Subscribe To Our Newsletter</p>
                    <p className="py-4">The latest news, articles and resources sent to your inbox weekly.</p>
                    <form className="flex flex-col sm:flex-row">
                        <input className="w-full p-2 mr-4 rounded-md mb-2 border-2 border-black" type="email" placeholder="Enter email" />
                        <button className="p-3 mb-2 bg-blue-500 text-white rounded-md" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col max-w-[1280px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
                <p>2023 WeWomen, All rights reserved.</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
                    <FaFacebook />
                    <FaGithub />
                    <FaInstagram />
                    <FaTwitch />
                    <FaTwitter />
                </div>
            </div>
        </div>
    );
}

export default Footer;