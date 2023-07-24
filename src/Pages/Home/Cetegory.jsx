import React, { useContext, useEffect, useState } from "react";
import "./Cetegory.css";

import { AuthContext } from "../../Login and Register/Provider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Cetegory = () => {
    const { user } = useContext(AuthContext)
    const [collegeData, setCollgeData] = useState([])

    const handleFiction = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login First',
            })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/colleges`)
            .then(res => res.json())
            .then(data => setCollgeData(data))
    }, [])
    console.log(collegeData)

    return (
        <div >
            <h1 className="text-center text-4xl font-serif font-semibold py-12" >Our Top College</h1>
            <div className="panels mx-[10%] py-5">
                <div className="grid md:grid-cols-3 gap-10 ">
                    {
                        collegeData.map(collge => <div 
                        key={collge._id}
                        >

                            <div className="card card-compact w-auto bg-base-100 shadow-sm">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{collge.collegeName}</h2>
                                    <p>Addmission Date : {collge.admissionDate}</p>
                                    <p>Research History : {collge.researchHistory}</p>
                                    <p>Research Paper : {collge.researchCount}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`details/${collge._id}`}><button onClick={handleFiction} className="btn btn-primary">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Cetegory;