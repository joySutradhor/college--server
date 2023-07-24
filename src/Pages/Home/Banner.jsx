import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full  ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/rdCsKcF/pang-yuhao-kd5cxw-ZOK4-unsplash-1.jpg" className="w-full h-full object-contain" />
                    <div className='absolute  z-10 md:left-[15%]  md:top-[70%] top-[40%]'>
                            <h2 className='md:text-3xl text-center font-sans md:text-gray-400 text-sm text-white'>A dynamic hub of knowledge and innovation, empowering students to  <br /> excel in their academic pursuits and contribute meaningfully to society.</h2>
                    </div>
                </div>

  
            </div>
            
        </div>
    );
};

export default Banner;