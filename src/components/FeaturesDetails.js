import React from 'react';
import fundtransfer from '../images/features/New folder/fundt.jpg';
import billpay from '../images/features/New folder/billpay.jpg';
import fd from '../images/features/New folder/fixed.jpg';
import gloan from '../images/features/New folder/gloan.jpg';
import lending from '../images/features/New folder/lend.jpg';
import { HashLink } from 'react-router-hash-link';

const FeaturesDetails = () => {
    return (
        <div className='bg'>
                <div className="m-auto p-2 md:p-12 h-5/6 bg-black bg-opacity-20 transition-all ease-in-out duration-1000 overflow-hidden text-gray-300 hover:bg-black hover:bg-opacity-40 hover:text-white rounded-lg shadow-xl p-3 group lg:ml-5 lg:mr-5 hover:scale-[1.02] " id='fundtransfer' >

                    <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">

                        <div className="lg:w-2/5 flex flex-row lg:mx-4">
                            <img alt="card img" className="rounded float-right opacity-50 hover:opacity-75 transition duration-500" src={fundtransfer} />
                        </div>

                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-3/5 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h1 className="text-3xl  text-blue-900 font-extrabold uppercase">Luckewallet: Send and Receive Cash Instantly</h1>
                            <h3 className="mt-5 text-xl  text-blue-900 font-extrabold">Effortless Money Movement - Send & Receive Cash with Luckewallet</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-400 font-semibold'>Manage your money with ease using Luckewallet's secure and instant cash transfer service. Here's why you'll love it:
                                    <ul>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Send Money Quickly: Transfer cash to friends, family, or for business needs instantly.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Convenient Transfers: Send and receive cash directly from your Luckewallet account, anytime, anywhere.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Processing fee - No processing fees! Enjoy seamless transactions without 30 rupees processing fee via luckewallet. </li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Seamless Integration: Easily access your contact list to select recipients within the Luckewallet app.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Secure Transactions: Enjoy peace of mind with industry-standard security measures protecting your funds.</li>
                                    </ul>
                                </p>
                                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                    <HashLink to="https://youtu.be/dYreL9xj28U?si=JuHFlIH_PQTREh43" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                        View more
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </HashLink>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div id='billpayment' className='h-5'></div>

                <div className="m-auto p-2 md:p-12 h-5/6 bg-black bg-opacity-20 transition-all ease-in-out duration-1000 overflow-hidden text-gray-300 hover:bg-black hover:bg-opacity-40 hover:text-white rounded-lg shadow-xl p-3 group lg:m-5 hover:scale-[1.02] "  >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">

                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-3/5 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h1 className="text-3xl  text-blue-900 font-extrabold">Say Goodbye to Late Fees – Simplify Bill Payment with Luckewallet</h1>
                            <div>
                                <p className='my-3 text-xl text-gray-400 font-semibold'>Take the hassle out of paying bills. Luckewallet puts all your essential payments in one place. Enjoy these benefits:
                                    <ul>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Streamlined Payments: Pay a wide range of bills including mobile, electricity, water, and insurance premiums.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Never Miss a Due Date: Set up reminders or automatic payments to keep your bills on track.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Easy Tracking: View your payment history and stay organized. </li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Secure Transactions: Your financial information is protected with the latest security protocols.</li>
                                    </ul>
                                </p>
                                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <HashLink to="https://youtube.com/shorts/8XhRjF-WMZY" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    View more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </HashLink>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-2/5 flex flex-row lg:mx-4">
                            <img alt="card img" className="rounded float-right opacity-50 hover:opacity-75 transition duration-500" src={billpay}/>
                        </div>
                    </div>
                </div>
                <div id='fixeddeposits' className='h-5'></div>

                <div className="m-auto p-2 md:p-12 h-5/6 lg:mt-10 bg-black bg-opacity-20 transition-all ease-in-out duration-1000 overflow-hidden text-gray-300 hover:bg-black hover:bg-opacity-40 hover:text-white rounded-lg shadow-xl p-3 group lg:m-5 hover:scale-[1.02]">

                    <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-2/5 flex flex-row lg:mx-4">
                            <img alt="card img" className="rounded float-right opacity-50 hover:opacity-75 transition duration-500" src={fd} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-3/5 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h1 className="text-3xl  text-blue-900 font-extrabold uppercase">Grow Your Savings Securely with Luckewallet Fixed Deposits</h1>
                            <div>
                                <p className='my-3 text-xl text-gray-400 font-extrabold'>Maximize your returns with our flexible fixed deposit options. Enjoy the benefits of:
                                    <ul>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Attractive Interest Rates: Earn higher interest than traditional savings accounts.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Customizable Terms: Select a deposit period that aligns with your financial goals.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Secure Investment: Your funds are protected, ensuring peace of mind. </li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Easy Online Tracking: Monitor your FD details, including interest accrual and maturity date, at your convenience.</li>
                                    </ul>
                                </p>                               
                            </div>

                            <div>
                                <p className='my-3 text-xl text-gray-400 font-extrabold'>Features:
                                    <ul>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Simple Application: Open your FD in minutes, directly from your Luckewallet App.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Variety of Tenures: Choose from short-term to long-term deposit options.</li>
                                    </ul>
                                </p> 
                                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <HashLink to="https://youtube.com/shorts/let6B3eqvh4" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    View more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </HashLink>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div id='goldloan' className='h-5'></div>

                <div className="m-auto p-2 md:p-12 h-5/6 bg-black bg-opacity-20 transition-all ease-in-out duration-1000 overflow-hidden text-gray-300 hover:bg-black hover:bg-opacity-40 hover:text-white rounded-lg shadow-xl p-3 group lg:m-5 hover:scale-[1.02]" >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">

                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-3/5 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h1 className="text-3xl  text-blue-900 font-extrabold">GoldSafe Instant Loans</h1>
                            <h3 className="mt-5 text-xl  text-blue-900 font-extrabold">Unlock the Value of Your Gold – Get Cash When You Need It</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-400 font-semibold'>GoldSafe Instant Loans turn your gold jewelry into quick, secure cash.  Get the funds you need without selling your precious items. Enjoy these convenient benefits:
                                    <ul>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Low Interest Rates: We offer some of the most competitive interest rates in the market, helping you save money.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Flexible Repayment: Choose a repayment plan that suits your budget.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Pay from Home: Make an easy luckewallet app through payments from the comfort of your home, saving you time and effort.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Online Ticket view: Stay updated on your loan status with real-time ticket details and transaction history.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Secure Storage: Rest assured; your gold is safely stored in our high-security vaults.</li>
                                    </ul>
                                </p>
                                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <HashLink to="https://youtube.com/shorts/jHb3Ob60zxQ" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    View more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </HashLink>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-2/5 flex flex-row lg:mx-4">
                            <img alt="card img" className="rounded float-right opacity-50 hover:opacity-75 transition duration-500" src={gloan} />
                        </div>
                    </div>
                </div>
                <div id='lending' className='h-5'></div>

                <div className="m-auto p-2 md:p-12 h-5/6 lg:mt-10 bg-black bg-opacity-20 transition-all ease-in-out duration-1000 overflow-hidden text-gray-300 hover:bg-black hover:bg-opacity-40 hover:text-white rounded-lg shadow-xl p-3 group lg:mt-5 lg:ml-5 lg:mr-5 hover:scale-[1.02]">

                    <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-2/5 flex flex-row lg:mx-4">
                            <img alt="card img" className="rounded float-right opacity-50 hover:opacity-75 transition duration-500" src={lending}/>
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-3/5 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h1 className="text-3xl  text-blue-900 font-extrabold uppercase">Achieve Your Financial Goals with Luckewallet Lending</h1>
                            <div>
                                <p className='my-3 text-xl text-gray-400 font-semibold'>Access the funds you need to move forward with our flexible micro mortgage and leasing solutions.
                                    <ul>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Micro Mortgages: Finance smaller property investments or home improvements with affordable loans tailored to your needs.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Leasing Options: Secure equipment, vehicles, and other assets for your business without large upfront costs.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Competitive Rates: Enjoy low interest rates, keeping your financing costs manageable.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Convenient Online Payments: Pay your interest easily and stay on top of your finances from anywhere.</li>
                                        <li className='ml-5 my-2 text-xl text-gray-300 font-semibold'>Transparent Loan Details: Access your loan information, payment history, and remaining balance in your Luckewallet dashboard.</li>
                                    </ul>
                                </p>
                                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <HashLink to="https://youtube.com/playlist?list=PL499_of7jFx_Q8Mdv8kUvjB79qsQ8Eb-i&si=6gZi9nKwXnq0KZ6n" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    View more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </HashLink>
                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>
        </div>
    )
}

export default FeaturesDetails;