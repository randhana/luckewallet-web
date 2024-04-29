import React from 'react';
import img from '../images/innovation2.jpg'; 
import img2 from '../images/security.jpg';
import img3 from '../images/ourjourney.jpg';

const WhoWeAre = () => {

    return (
                    
        <div className="bg-gray-100 py-12" id="who-we-are">
            
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h1 className="my-2 text-center text-4xl text-blue-900 font-bold uppercase">Who We Are?</h1>
                        
                        <div className='flex justify-center mb-10'>
                            <div className='w-60 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Founded in 2021, Asia Asset Finance PLC powers Luckewalllet, a fully functional digital banking platform. Luckewallet is a dynamic team of finance and technology enthusiasts dedicated to reshaping the future of digital payments. With a passion for cutting-edge solutions, we aim to create a financial ecosystem that adapts to the evolving needs of our users.</h2>
                        
                        <h1 className="mt-10 my-2 text-center text-3xl text-blue-900 font-bold uppercase">What Sets Us Apart</h1>
                        <div className='flex justify-center'>
                            <div className='w-64 border-b-4 border-blue-900 mb-5'></div>
                        </div>

                    </div>

                    


                    <div className="w-full flex text-white what-sets-us-apart" data-aos="fade-down" data-aos-delay="600" >
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            
                            <div className="bg-white bg-opacity-10 transition-all ease-in-out duration-400 overflow-hidden text-gray-300 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-xl p-3 group lg:mt-5 lg:mb-5 lg:ml-5">
                                <div className="text-justify text-sm">
                                <img alt="card img" className=" rounded scale-[.8] group-hover:scale-[.9] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center group-hover:scale-[1.15] transition duration-1000 ease-in-out">Innovation</h2>
                                    <p className="text-md font-medium group-hover:scale-[1.02] transition duration-1000 ease-in-out">
                                        We embrace technological advancements to provide you with the latest features and functionalities. Our commitment to innovation ensures that you stay ahead in the rapidly changing landscape of digital finance.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-10 transition-all ease-in-out duration-400  overflow-hidden text-gray-300 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-2xl p-3 group lg:mt-5 lg:mb-5 lg:ml-2.5 lg:mr-2.5">
                                <div className="text-justify text-sm">
                                <img alt="card img" className="rounded scale-[.8] group-hover:scale-[.9] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center group-hover:scale-[1.15] transition duration-1000 ease-in-out">Security</h2>
                                    <p className="text-md font-medium group-hover:scale-[1.02] transition duration-1000 ease-in-out">
                                    Your trust is our top priority. <span className='font-black'>Luckewallet</span> employs state-of-the-art security measures to safeguard your data and transactions. Rest assured, your financial information is in safe hands.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-10 transition-all ease-in-out duration-400  overflow-hidden text-gray-300 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-2xl p-3 group lg:mt-5 lg:mb-5 lg:mr-5">
                                <div className="text-justify text-sm">
                                    <img alt="card img" className="rounded scale-[.8] group-hover:scale-[.9] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center group-hover:scale-[1.15] transition duration-1000 ease-in-out">Join Us on the Journey</h2>
                                    <p className="text-md font-medium group-hover:scale-[1.02] transition duration-1000 ease-in-out">
                                    We understand that every user is unique. That's why we tailor our services to meet your specific needs. <span className='font-black'>Luckewallet</span> is designed with you in mind, offering a personalized and user-friendly experience. Whether you're an individual seeking a more convenient way to manage your finances or a business looking for efficient payment solutions, Luclewwallet welcomes you to join us on this exciting journey. Explore the future of digital finance with confidence and convenience.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 mt-10">
                    <div className="flex lg:flex-center justify-center" data-aos="zoom-out">
                    <div className="flex flex-center justify-center">
                            <h3 className="text-2xl text-blue-900 font-bold">Thank you for choosing <span className='font-black'>Luckewallet</span> - where financial innovation meets simplicity. </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default WhoWeAre;