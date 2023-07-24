import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    // const { cetegory ,sellerName ,  description , email , quantity , price , url , name , ratting } = details;
    console.log(details)
    return (
        <div className='grid md:grid-cols-3 gap-5 md:mx-20 md:my-12'>
            <div className="card card-compact w-96 bg-base-100 shadow-sm">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details.collegeName}</h2>
                    <p>Reasearch :  {details.researchHistory}</p>
                    <p>Addmission Date :  {details.admissionDate}</p>
                    <p>Ratiing :  {details.collegeRating}</p>
                    <p>Total Reasearch :  {details.researchCount}</p>
                    <p>Our Events</p>
                    {
                        details.events.map((event, index) => <li
                            key={index}>{event}</li>)
                    }
                    <p>Our Sports</p>
                    {
                        details.sports.map((event, index) => <li
                            key={index}>{event}</li>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Details; 