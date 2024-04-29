import React from 'react';
import img1 from '../images/our works/img1.jpg';
import img2 from '../images/our works/img2.jpg';
import img3 from '../images/our works/img3.jpg';
import img4 from '../images/our works/img4.jpg';
import img5 from '../images/our works/img5.jpg';
import img6 from '../images/our works/img6.jpg';
import img7 from '../images/our works/img7.jpg';
import img8 from '../images/our works/img8.jpg';
import img9 from '../images/our works/img9.jpg';

const Our= () => {
    return (
        <>
            <div className="my-4 py-4" id='faq'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Works</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">                            
                        
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <img src={img1} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10"></p>
                                
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <img src={img2} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10"></p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <img src={img3} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10 "></p>
                                
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <img src={img4} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10"></p>
                                
                            </div>
                        </div>    

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <img src={img5} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10"></p>
                                
                            </div>
                        </div> 

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <img src={img6} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10"></p>
                                
                            </div>
                        </div>  

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <img src={img7} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10"></p>
                                
                            </div>
                        </div> 

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <img src={img8} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10"></p>
                                
                            </div>
                        </div> 

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <img src={img9} alt=''/>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10"></p>
                                
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Our;