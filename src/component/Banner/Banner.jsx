import React from 'react';

const Banner = () => {
    return (
        <div
            className=" max-w-[1320px] mx-auto mt-12 bg-no-repeat md:h-[680px] w-[90vw] p-3 md:p-0 bg-cover bg-center container rounded-[24px] flex items-center justify-center flex-col space-y-5"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/wszhtYf/th.jpg)' }}
        >
            <h2 className="text-[52px] font-bold text-center text-white md:w-[897px]">
                Discover an exceptional cooking class tailored for you!
            </h2>
            <p className="text-white text-lg font-normal md:w-[897px] text-center">
                Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
            <div className="space-x-6">
                <button className="btn bg-[#0BE58A] hover:bg-transparent border-2 border-[#0BE58A] hover:text-white rounded-[50px] px-4 py-3 text-lg font-semibold text-[#150B2B] transition duration-250 ease-in-out md:px-[30px] md:py-5 md:text-xl">
                    Explore Now
                </button>

                <button className="btn btn-ghost px-4 py-3 text-lg font-semibold text-white border-2 border-white hover:bg-[#0BE58A] hover:text-black rounded-[50px] transition duration-250 ease-in-out md:px-[30px] md:py-5 md:text-xl">
                    Our Feedback
                </button>

            </div>
        </div>
    );
};

export default Banner;
