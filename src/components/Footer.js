import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">Luckewallet</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>No. 76,</h5>
                                <p>Park Street,</p>
                                <p>Colombo 02,</p>
                                <p>Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-2 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">USEFUL LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink smooth to="/#about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About Us</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink smooth to="/feature#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Features</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink smoooth to="contact#contact" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact Us</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-3 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">CLIENT SUPPORT</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink smooth to="/#ad" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Careers</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink smooth to="/#faq" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">FAQs</HashLink>
                        </li>
                        <li className="mb-2">
                            <Link to="https://www.asiaassetfinance.com/" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Our Company</Link>
                        </li>
                        <li className="mb-2">
                            <HashLink smooth to="/#our-works" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Our Works</HashLink>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Follow us on social media.
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <Link to="https://youtube.com/@luckewallet?si=07FjKDByCFYxaN-a" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="YouTube">
                                        <svg className="w-8 h-8 fill-current" viewBox="-8 -8 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M23.2 5.5s-.2-1.6-1-2.3c-.9-1-1.9-1-2.4-1C16.1 2 12 2 12 2s-4.1 0-7.8.2c-.5 0-1.5 0-2.4 1-.7.7-1 2.3-1 2.3S1 7.3 1 9.3v5.4c0 2 0 4.3.2 5.3s.2 1.6 1 2.3c.9 1 2.1.9 2.6 1 1.9.1 7.7.2 7.7.2s4.1 0 7.8-.2c.5 0 1.5 0 2.4-1 .7-.7 1-2.3 1-2.3s.2-2.3.2-5.3v-5.4c0-2-.2-4.3-.2-5.3zM9.5 15.5V8.8l6.5 3.4-6.5 3.3z"/>
                                        </svg>
                                        </Link>
                                    </li>
                                    
                                    <li className="ml-4">
                                        <Link to="https://www.facebook.com/profile.php?id=100087767871809&mibextid=ZbWKwL" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li>

                                    <li className="ml-4">
                                        <Link to="https://www.tiktok.com/@luckewallet2022?is_from_webapp=1&sender_device=pc" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="TikTok">
                                        <svg className="w-8 h-8 fill-current" viewBox="-5 -5 55 55" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"></path>
                                        </svg>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        smooth to="/#top"
                        className=" hover:text-gray-900"
                    >
                        Luckewallet
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
