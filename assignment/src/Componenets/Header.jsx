import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export const Header = () => {


    return (
        <>
            <header className='py-5'>
                <div className='container'>

                    <div className='d-flex justify-content-between m-3 text-center'>
                        <div>
                            <h1>Brunel</h1>
                        </div>
                        <div>
                            <Link to="/getProject">
                            <span className='getProgectButton' >Get Projects</span>
                            </Link>
                            <span className='onBoardButton'>Onboard Tailent</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
