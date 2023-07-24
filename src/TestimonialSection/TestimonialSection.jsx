import React from 'react';
import './TestimonialSection.css';
import { Link } from 'react-router-dom';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'John Doe is a highly skilled developer, recognized for their expertise in various programming',
      image: 'https://i.ibb.co/R0GkhQ0/radu-florin-Jy-Vc-AIUAc-PM-unsplash.jpg',
      university : "Bangladesh Engineering University"
      
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Jane Smith is a highly skilled developer, recognized for their expertise in various programming',
      image: 'https://i.ibb.co/mv8HM3r/reza-biazar-e-Sjm-ZW97c-H8-unsplash.jpg',
      university : "Dhaka University"
    },
    {
      id: 3,
      name: 'Willam key',
      comment: 'Willam key is a highly skilled developer, recognized for their expertise in various programming',
      image: 'https://i.ibb.co/6FCX7JK/ospan-ali-6xv4-A1-VA1r-U-unsplash.jpg',
      university : "Chittagong Medical College"
    },
  ];

  return (
    <div className="testimonial-section">
      <h2 className='text-4xl font-serif'>Our Research paper</h2>
      <div className="testimonial-container gap-5">
        {
          testimonials.map(data => <div
            key={data.id}
            className="card w-96 h-[300px] bg-base-100 shadow-xl image-full">
            <figure><img src={data.image} className='object-cover' alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <h2 className="card-title">{data.university}</h2>
              <p></p>
              <div className="card-actions justify-end">
                <Link to={"https://www.researchgate.net/"}><button className="btn btn-primary">Paper LInk</button> </Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default TestimonialSection;
