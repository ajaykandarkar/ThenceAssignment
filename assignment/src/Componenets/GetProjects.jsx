import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './GetProject.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import GetProjectSchema from './ValidationSchema/GetProjectValidation'; // Import your validation schema


export const GetProjects = () => {
    const navigate = useNavigate();

    const handleclose = () =>{
        navigate('/');
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        validationSchema: GetProjectSchema, // Assign your validation schema
        onSubmit: (values) => { 
             if(values)
                {
                    navigate('/sucess')
                }
        },
    });

    return (
        <>
            <div>
                <div className='d-flex justify-content-between px-5 my-5'>
                    <h1>Brunel</h1>
                    <div>
                        <i className="bi bi-x-circle bi-5xl" onClick={handleclose}></i>
                    </div>
                </div>
                <div className='container text-center'>
                    <div className='customFont'>Registration form</div>
                    <div><h1>Start Your Success<br />Journey Here!</h1></div>
                    <form onSubmit={formik.handleSubmit}> 
                        <div className='m-3'>
                            <input
                                type='text'
                                placeholder='Enter your name'
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange} 
                            />
                            {formik.errors.name && formik.touched.name && ( 
                                <div className="error text-danger">{formik.errors.name}</div>
                            )}
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Enter your email'
                                name='email'
                                value={formik.values.email} // Attach value from formik
                                onChange={formik.handleChange} // Attach handleChange from formik
                            />
                            {formik.errors.email && formik.touched.email && ( // Show error if touched and there's an error
                                <div className="error text-danger">{formik.errors.email}</div>
                            )}
                        </div>
                        <div className='m-5 '>
                            <button type='submit' className='submit-button'>Submit</button> 
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
