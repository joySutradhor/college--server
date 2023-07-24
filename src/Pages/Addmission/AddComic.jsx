import React, { useContext } from 'react';
import { AuthContext } from '../../Login and Register/Provider';
import Swal from 'sweetalert2';

const AddComic = () => {

    const { user } = useContext(AuthContext)
    console.log(user)


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const phone = form.phone.value;
        const university = form.university.value;
        const email = form.email.value;
        const description = form.description.value;
        const url = form.url.value;
        console.log(url)
        const newCollege = { name, subject, email, phone, description , url , university }
        fetch(`http://localhost:5000/myCollegeData`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCollege)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                Swal.fire({
                    position: 'top drawer ',
                    icon: 'success',
                    title: 'Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })

            })

    }
    return (
        <form className='mx-auto' onSubmit={handleSubmit}>
            <h2 className='text-center text-2xl font-serif md:py-6'>Apply Your University </h2>
            <div className='py-8 grid grid-cols-2 px-20 gap-5 '>
                <div className="form-control w-full">
                    <label className="input-group">
                        <span> Name</span>
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered w-full"  required/>
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>University</span>
                        <input type="text" name='university'  className="input input-bordered  w-full " required />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Subject</span>
                        <input type="text" name='subject'  className="input input-bordered  w-full " required />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group">
                        <span>Email</span>
                        <input type="email" defaultValue={user?.email} name='email' className="input input-bordered  w-full " required />
                    </label>
                </div>


                <div className="form-control">
                    <label className="input-group">
                        <span>Phone</span>
                        <input type="text"   name='phone' className="input input-bordered  w-full " required />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Address</span>
                        <input type="text" name='description' className="input input-bordered  w-full " required />
                    </label>
                </div>
                <div className="form-control mb-8">
                    <label className="input-group">
                        <span>Url</span>
                        <input type="text" name='url' className="input input-bordered  w-full " required />
                    </label>
                </div>
            </div>
            
            <div className='px-20 pb-10'>
                <input type="submit" value="Submit" className="p-3 bg-sky-300 rounded-lg w-full  font-bold " />
            </div>
        </form>
    );
};

export default AddComic;