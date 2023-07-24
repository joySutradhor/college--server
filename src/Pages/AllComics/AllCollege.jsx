import React, { useEffect, useState } from 'react';

const AllCollege = () => {
    const [allCollege, setAllCollege] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:5000/allColleges`)
            .then(res => res.json())
            .then(data => setAllCollege(data))
    }, [])
    return (
          <>
           <h1 className='text-center'> Our colleges</h1>
        <div className='grid md:grid-cols-3 gap-5 md:mx-20 md:my-12'>
            
            {
                allCollege.map(college => <div
                    key={college._id}
                    className="card card-compact w-96 bg-base-100 shadow-sm">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{college.collegeName}</h2>
                        <p>Reasearch :  {college.researchHistory}</p>
                        <p>Addmission Date :  {college.admissionDate}</p>
                        <p>Ratiing :  {college.collegeRating}</p>
                        <p>Total Reasearch :  {college.researchCount}</p>
                        <p>Our Events</p>
                        {
                            college.events.map((event , index) => <li 
                            key={index}>{event}</li>)
                        }
                        <p>Our Sports</p>
                        {
                            college.sports.map((event , index) => <li 
                            key={index}>{event}</li>)
                        }
                       
                    </div>
                </div>)
            }
        </div>
        </>
    );
};

export default AllCollege;