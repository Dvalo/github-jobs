import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import GetData from '../../src/api/index';
import Moment from 'react-moment';
import { useLocation } from "react-router-dom";

function Jobs(props) {
    const location = useLocation();
    const [ searchDescription, setSearchDescription ] = useState('');
    const [ searchLocation, setSearchLocation ] = useState('');
    const [ fullTime, setFullTime ] = useState(false);
    const [ page, setPage ] = useState(1);

    const { stats, loading, error } = GetData(`https://jobs.github.com/positions.json?description=${searchDescription}&full_time=${fullTime}&location=${searchLocation}&page=${page}`);

    useEffect(() => {
        if (typeof location.state !== "undefined") {
            setSearchDescription(location.state.searchDesc);
            setSearchLocation(location.state.searchLoc);
            setFullTime(location.state.fullTime);
        }
     }, [location.state]);

     if (error) {
        return (
            <div className="container">
                <h1>Unable to fetch data.</h1>
            </div>
        );
    }
    if (loading) {
        return (
            <div className="container">
                <h1>Loading Data</h1>
            </div>
        );
    }
    if (stats) {
        return (
            <section id="jobs">
                <div className="container">
                    <div className="jobs-wrapper">
                        {stats.map(function(job, index) {
                            return (
                                <Link key={job.id} to={{
                                    pathname: `/job/${job.id}`,
                                    state: {
                                        id: job.id
                                    }
                                  }}>
                                <div className="single-job job-card">
                                    <div className="company-logo">
                                        <img src={job.company_logo} alt={job.company}></img>
                                    </div>
                                    <div className="job-details-wrapper">
                                        <div className="job-details">
                                            <div className="job-date"><Moment fromNow>{job.created_at}</Moment></div>
                                            <span className="dot-seperator"></span>
                                            <div className="job-type">{job.type}</div>
                                        </div>
                                        <div className="job-title">{job.title}</div>
                                        <div className="company-name">{job.company}</div>
                                        <div className="job-location">{job.location}</div>
                                    </div>
                                </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        )
    }
    return <div />
}
    
export default Jobs;