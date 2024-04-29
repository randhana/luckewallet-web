import React from "react";
import heroVid from '../videos/cover-video.mp4'
import Grid from './Grid'
import NavBar from '../components/Navbar/NavBar';
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div className="relative w-full h-screen" id='top'>
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay loop muted className="rounded-t float-right duration-1000 w-full object-cover" src={heroVid} style={{ width: 'auto', height: 'auto' }} />
      </div>

      <div>
          <NavBar />
      </div>

      <div className="absolute inset-0 flex items-center justify-center w-1/2">

        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

            <div id='hero' className="flex flex-col lg:flex-row py-8 justify-center text-center">
                        
                <div className="flex flex-col justify-center px-8 py-20 text-stroke-3 stroke-color-black" data-aos="zoom-in" data-aos-delay="200">
                            
                            <h1 className="mb-5 lg:text-7xl md:text-5xl text-3xl font-bold text-white">Sri Lanka's No. 01 Mobile Wallet</h1>

                            <div className="lg:text-2xl text-xl font-semibold tracking-tight mb-5 text-gray-200">
                              Powered by Asia Asset Finance PLC
                            </div>
                            
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <HashLink smooth to="#about" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </HashLink>
                            </div>

                </div>

            </div>

        </div>

      </div>
  
      <div className="px-8 py-20">
        <Grid/>
      </div>
      
    </div>
  );
};

export default Banner;
