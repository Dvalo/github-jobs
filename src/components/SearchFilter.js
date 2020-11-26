import { React, useState } from 'react';
import { useHistory } from "react-router-dom";

function SearchFilter() {
    const { push } = useHistory();
    const [ searchDescription, setSearchDescription ] = useState('');
    const [ searchLocation, setSearchLocation ] = useState('');
    const [ fullTime, setFullTime ] = useState(false);
    const [ redirect, setRedirect ] = useState(false);

    const handleDescChange = (e) => {
        setSearchDescription(e.target.value);
    }

    const handleLocationChange = (e) => {
        setSearchLocation(e.target.value);
    }

    const handleCheckBox = (e) => {
        setFullTime(e.target.checked);
    }

    const handleSearch = () => {
        push({
            pathname: `/search/description=${searchDescription}?full_time=${fullTime}?location=${searchLocation}?`,
            state: {
                searchDesc: searchDescription,
                searchLoc: searchLocation,
                fullTime: fullTime
            }
        })
    } 

    return (
        <div className="filter-area">
            <div className="container">
                <div className="filter-wrapper">
                    {/* HAS SEARCH GROUP START */}
                    <div className="has-search-group">
                        <div className="form-group has-search desc-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control custom-input" placeholder="Filter by title, company, expertise..." onChange={handleDescChange} />
                        </div>

                        <div className="form-group has-search loc-search">
                            <span className="fas fa-map-marker-alt form-control-feedback"></span>
                            <input type="text" className="form-control custom-input" placeholder="Filter by location..." onChange={handleLocationChange} />
                        </div>
                    </div>
                    {/* HAS SEARCH GROUP END */}

                    {/* EXTRA SEARCH GROUP SRART */}
                    <div className="extra-search-group">
                        <div className="form-group ft-checkbox">
                            <input type="checkbox" id="fulltime" name="fulltime" value="fulltime" onChange={handleCheckBox} />
                            <label htmlFor="fulltime" className="custom-label">Full Time Only</label>
                        </div>
                        <div className="form-group search-btn">
                            <button type="button" className="custom-button" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                    {/* EXTRA SEARCH GROUP END */}
                </div>
            </div>
        </div>
    )
}

export default SearchFilter;