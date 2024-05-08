import React, { useState, useEffect } from 'react';
import './Succes.css';
import icon from './images/suceesIcon.png';
import { useNavigate } from 'react-router-dom';
export const Succes = () => {
    const [time, setTime] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        if (time === 0) {
            clearTimeout(timer);
            navigate('/')
        }
        return () => clearTimeout(timer);
    }, [time]);

    return (
        <>
            <div>
                <div>
                    <h1>Brunel</h1>
                </div>
                <div className='text-center py-5 m-5'>
                    <img src={icon} alt="sucess" style={{ height: "50px" }} />
                    <h4 className='customFont my-4'>Success Submited</h4>
                    <h1 className='my-2'>Congratulation</h1>
                    <p className='my-styled-text'>Your request has been successfully submitted to us. We<br /> will validate your <br />information and reach out to your shortly with updates</p>
                </div>
                <div>
                    <p className='my-styled-text'>Redirecting you to the Home Page in <span className='timer'>{time}</span> seconds</p>
                </div>
            </div>
        </>
    );
};
