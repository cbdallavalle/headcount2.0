import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import './Control.css';

const Control = (props) => {
  let searchError = props.searchError ? 'error' : '';
  
  return (
    <header className="Control">
      <Dropdown resetDistrict={ props.resetDistrict } />
      <div className="input-cont">
        <i 
          className="fa fa-search search-icon" 
          aria-hidden="true">
        </i>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Search by School"
          onChange={(event) => props.handleSearch(event.target.value)}
          className={searchError}
        />
      </div>
      <h1>Education Colorado</h1>
    </header>
  );
};

const { func, bool } = PropTypes;
Control.propTypes = {
  searchError: bool.isRequired,
  handleSearch: func.isRequired,
  resetDistrict: func.isRequired
};

export default Control;