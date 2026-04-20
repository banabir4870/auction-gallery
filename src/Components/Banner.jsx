import React from 'react';
import bgImg from '../assets/Banner-min.jpg'

const Banner = () => {
    return (
        <div className='bg-cover bg-center'
            style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-10/12 mx-auto pt-60 pb-52 space-y-8">
                <h1 className='text-[#FFFFFF] font-semibold text-5xl'>Bid on Unique Items from <br /> Around the World</h1>
                <p className='text-2xl font-light text-gray-200'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <button className='btn rounded-4xl'>Explore Auctions</button>
            </div>
        </div>
    );
};

export default Banner;