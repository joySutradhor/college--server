import React from 'react';

const Gellary = () => {
  // Your gallery data
  const galleryItems = [
    {
      id: 1,
      image: 'https://i.ibb.co/nzhYhk9/helena-lopes-UZe35tk5-Uo-A-unsplash.jpg',
    
    },
    {
      id: 2,
      image: 'https://i.ibb.co/2SZLBrM/kaleidico-RDYd-Ovk8ats-unsplash.jpg',
      
    },
    {
      id: 3,
      image: 'https://i.ibb.co/cgZCS93/brooke-cagle-w475s9-Zh-D4-I-unsplash.jpg',
      
    },
    {
      id: 4,
      image: 'https://i.ibb.co/XL4h60k/cowomen-hz-6pr-Up-Vss-unsplash.jpg',
      
    },
    {
      id: 5,
      image: 'https://i.ibb.co/NtPZVbh/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg',
     
    },
    {
      id: 6,
      image: 'https://i.ibb.co/jzsz5z5/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg',
  
    },
    // Add more gallery items as needed
  ];

  return (
   <div className='px-2 md:py-12'>
    <h2 className='text-center text-4xl font-serif font-semibold pb-12'>Our Students Moments</h2>
     <div className="gallery grid md:grid-cols-3 md:gap-2 ">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item py-2">
            <img src={item.image} alt={item.title} className='rounded-md h-full '/>
          </div>
        ))}
      </div>
   </div>
  );
};

export default Gellary ;
