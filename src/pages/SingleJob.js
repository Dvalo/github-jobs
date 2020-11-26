import Header from '../components/Header';
import GetData from '../../src/api/index';
import Moment from 'react-moment';

function SingleJob(props) {
    const { stats, loading, error } = GetData(`https://jobs.github.com/positions/${props.location.state.id}.json`);

    if (error) {
        return (
            <div className="single-job">
                <Header />
                <div className="container">
                    <h1>Unable to fetch data.</h1>
                </div>
            </div>
        );
    }
    if (loading) {
        return (
            <div className="single-job">
                <Header />
                <div className="container">
                    <h1>Loading Data</h1>
                </div>
            </div>
        );
    }
    if (stats) {
        return (
            <div className="single-job">
                <Header />
                <div className="container">
                    
                    <div className="company-wrapper">
                        <div className="company-logo">
                            <img src={stats.company_logo} alt={stats.company}></img>
                        </div>
                        <div className="company-details">
                            <div className="company-name">{stats.company}</div>
                            <div className="company-site">{stats.company_url}</div>
                        </div>
                        <div className="company-website">
                            <a href={stats.company_url} className="custom-button" target="_blank" rel="noopener noreferrer">Company Site</a>
                        </div>
                    </div>

                    <div className="job-detail-wrapper">
                        <div className="single-job">
                            <div className="job-details-wrapper">
                                <div className="job-heading">
                                    <div className="job-details">
                                        <div className="job-date"><Moment fromNow>{stats.created_at}</Moment></div>
                                        <span className="dot-seperator"></span>
                                        <div className="job-type">{stats.type}</div>
                                    </div>
                                    <div className="job-title">{stats.title}</div>
                                    <div className="job-location">{stats.location}</div>
                                </div>
                                <div className="job-description" dangerouslySetInnerHTML={{ __html: stats.description }}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return <div />
}

export default SingleJob;

