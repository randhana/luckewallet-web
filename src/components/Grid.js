import React from "react";
import vid from '../videos/cover-video.mp4';
import img1 from '../images/grid/fund_transfer.png';
import img2 from '../images/grid/bill_pay.png';
import img3 from '../images/grid/fd.png';
import img4 from '../images/grid/gold_loan.png';
import img5 from '../images/grid/lending.png';
import img6 from '../images/grid/arrow.png';
import { HashLink } from 'react-router-hash-link';


const Grid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center p-5" style={{background:vid}}>
        <div className="w-1/2"></div>

        <div id="features" className="insert-y-0 right-0" >
            <section data-aos="zoom-in-down ">
                    <div className="" data-aos="fade-down" data-aos-delay="600" >
                        <div className="grid grid-cols-3 grid-flow-row gap-5 flex"> 

                            <HashLink to='/feature#fundtransfer'><div className="transition-all ease-in-out duration-400  overflow-hidden text-white bg-white bg-opacity-15 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-2xl p-3 group lg:mt-0">
                                <div className="m-2 text-justify text-xs">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out opacity-25 hover:opacity-100" src={img1} />
                                    <h2 className="font-extrabold my-4 lg:text-xl text-center">Fund Transfer</h2>                                    
                                </div>
                            </div>
                            </HashLink>

                            <HashLink to='/feature#billpayment'><div className="transition-all ease-in-out duration-400  overflow-hidden text-white bg-white bg-opacity-15 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-2xl p-3 group lg:mt-0">
                                <div className="m-2 text-justify text-xs">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out opacity-25 hover:opacity-100" src={img2} />
                                    <h2 className="font-extrabold my-4 lg:text-xl text-center">Bill Payment</h2>                                    
                                </div>
                            </div>
                            </HashLink>

                            <HashLink to='/feature#fixeddeposits'><div className="transition-all ease-in-out duration-400  overflow-hidden text-white bg-white bg-opacity-15 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-2xl p-3 group lg:mt-0">
                                <div className="m-2 text-justify text-xs">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out opacity-25 hover:opacity-100" src={img3} />
                                    <h2 className="font-extrabold my-4 lg:text-xl text-center ">Fixed Deposits</h2>                                    
                                </div>
                            </div>
                            </HashLink>

                            <HashLink to='/feature#goldloan'><div className="transition-all ease-in-out duration-400  overflow-hidden text-white bg-white bg-opacity-15 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-2xl p-3 group lg:mt-0">
                                <div className="m-2 text-justify text-xs">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out opacity-25 hover:opacity-100" src={img4} />
                                    <h2 className="font-extrabold my-4 lg:text-xl text-center ">Gold Loans</h2>                                    
                                </div>
                            </div>
                            </HashLink> 

                            <HashLink to='/feature#lending'><div className="transition-all ease-in-out duration-400  overflow-hidden text-white bg-white bg-opacity-15 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-2xl p-3 group lg:mt-0">
                                <div className="m-2 text-justify text-xs">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out opacity-25 hover:opacity-100" src={img5} />
                                    <h2 className="font-extrabold my-4 lg:text-xl text-center ">Lending</h2>                                    
                                </div>
                            </div>
                            </HashLink>

                            <HashLink to='/feature#fund-transfer'><div className="transition-all ease-in-out duration-400  overflow-hidden text-white bg-white bg-opacity-15 hover:bg-blue-900 hover:bg-opacity-75 hover:text-white rounded-lg shadow-2xl p-3 group lg:mt-0">
                                <div className="m-2 text-justify text-xs">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out opacity-25 hover:opacity-100" src={img6} />
                                    <h2 className="font-extrabold my-4 lg:text-xl text-center ">Learn more</h2>                                    
                                </div>
                            </div>    
                            </HashLink>               
                        </div>
                    </div>
            </section>
          </div>
    </div>
  );
};

export default Grid;
