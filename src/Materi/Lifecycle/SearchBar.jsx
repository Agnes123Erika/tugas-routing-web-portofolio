import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ onChange, onSearch }) => (
    <div className="input-group mb-3">
        <input type="text" 
        className="form-control" 
        placeholder="Search for news..." 
        onChange={onChange}
        />
        <div className="input-group-append">
            <button className="btn btn-primary" 
            type="button" onClick={onSearch}>
                Search
            </button>
        </div>
    </div>
);

export default SearchBar;
