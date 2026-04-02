import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar w-10/12 mx-auto">
                    <div className="flex-1 navbar-start">
                        <a className="btn btn-ghost text-xl"><span className='text-4xl text-[#003EA4] font-extrabold'>Auction</span><span className='text-4xl text-[#FFD337] font-extrabold'>Gallery</span></a>
                    </div>
                    <div className='navbar-center flex-1'>
                        <ul className='flex justify-between gap-6'>
                            <li><a>Home</a></li>
                            <li><a>Auctions</a></li>
                            <li><a>Categories</a></li>
                            <li><a>How to works</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 items-center gap-6 navbar-end">
                        <div role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg className="h-10 w-10" fill="none" viewBox="0 0 15 15" stroke="currentColor"><IoIosNotificationsOutline /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    );
};

export default Navbar;