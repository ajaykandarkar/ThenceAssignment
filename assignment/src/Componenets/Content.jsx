import React, { useState } from 'react';
import image from './images/ladyImage.png';
import './Content.css';

export const Content = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <main>
            <div className='mx-5 px-5'>
                <div className='text-center'>
                    <h4 className="fst-italic text-success">Success Stories</h4>
                    <h1>Every success journey<br />we have encountered</h1>
                </div>

                <div className='d-flex justify-content-between my-5 py-5 m-md-5'>
                    <div className='card w-50px'>
                        <img src={image} alt="lady image" />
                    </div>
                    <div>
                        <div className='d-flex flex-column'>
                            <h1 className='m-5'>Enhance fortune 50<br />
                                company insights <br />teams research <br />capability</h1>
                            <nav aria-label="Page navigation" className='p-5'>
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><span className="dots">...</span></li>
                                    <li className="page-item"><a className="page-link" href="#">10</a></li>
                                    <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                                </ul>
                            </nav>
                            <button className='exploremore w-50'>Explore More →</button>
                        </div>
                    </div>
                </div>
                <div className='contentContainer'>
                    <div className='contentStyle'>
                        <div className='mx-5 py-5 px-5'>
                            <span>What's on your mind</span>
                            <h1>Ask Question</h1>
                        </div>
                        <div >
                            <p className='d-flex justify-content-evenly'>
                                <h6>Do you offer freelancers?</h6>
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                    +
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample1">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='d-flex justify-content-evenly'>
                                <h6>What’s the guarantee that I will be satisfied
                                    with the hired talent?</h6>
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                    +
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample2">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div >
                            <p className='d-flex justify-content-evenly'>
                                <h6>Can I hire multiple talents at once?</h6>
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                    +
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample3">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='d-flex justify-content-evenly'>
                                <h6>Why should I not go to an agency directly?</h6>
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                    +
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample4">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div >
                            <p className='d-flex justify-content-evenly'>
                                <h6>Who can help me pick a right skillset<br></br>
                                    and duration for me?</h6>
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                                    +
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample5">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
