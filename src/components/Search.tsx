import React from 'react';

const Search: React.FC = () => {
    return (
        <div>
            <h2>Github Finder</h2>
            <p>Search for repositories by name</p>
            <div>
                <input name="search" type="text" placeholder="Search repositories..." />
                <button type="submit">Search</button>
            </div>
        </div>
    );
};
export default Search;
