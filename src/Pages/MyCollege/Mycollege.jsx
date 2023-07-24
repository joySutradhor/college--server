import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Login and Register/Provider';

const Mycollege = () => {
    const [college, setCollege] = useState([])
    const { user } = useContext(AuthContext);
   
    useEffect(() => {
        fetch(`http://localhost:5000/myCollege`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])
    const updated = college.filter(data => data.email == user?.email)
   console.log(updated)
    return (
        <div className='grid md:grid-cols-3 gap-5 md:mx-20 md:py-12'>
            {
                updated.map(data => <div 
                key={data._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                        <p>Email : {data.university}</p>
                        <p>Email : {data.email}</p>
                        <p>Subject : {data.subject}</p>
                        <div className="card-actions justify-end">
                            <button className="btn disabled">Applied done</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Mycollege;