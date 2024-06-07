import React from 'react';
import data from './data.json';
import '../App.css';

export default function Job() {
    return (
        <div>
            <div className="mt-4 d-flex flex-column flex-wrap gap-4">
                {data.map((job) => (
                    <div key={job.id} className="bg-white p-3 shadow d-flex flex-wrap justify-content-md-between align-items-center rounded" style={{ borderLeft: "5px solid #61a8a3" }}>
                        <div className="d-flex gap-4 flex-wrap">
                            <div className="rounded-circle" style={{ height: "90px", width: "90px" }}>
                                <img src={job.logo} alt={`${job.company} logo`} />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="">
                                    <h6 className='text-secondary d-flex gap-2 text-center fw-bold ' >
                                        {job.company} 
                                        {job.new && <span className="badge text-bg-secondary  p-2">NEW!</span>}
                                        {job.featured && <span className="badge text-bg-dark p-2">FEATURED</span>}
                                    </h6>
                                </div>
                                <div className="">
                                    <h5 className='fw-bold'>{job.position}</h5>
                                </div>
                                <div className="d-flex text-secondary fw-bold justify-content-around align-items-center">
                                    <p>{job.postedAt}</p>
                                    <p>•</p>
                                    <p>{job.contract}</p>
                                    <p>•</p>
                                    <p>{job.location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="job-tags d-flex gap-2 flex-wrap">
                            {job.languages.map((language, idx) => (
                                <span key={idx} className="tag">{language}</span>
                            ))}
                            
                            {job.tools.map((tool, idx) => (
                                <span key={idx} className="tag">{tool}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
