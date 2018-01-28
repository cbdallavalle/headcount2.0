import React from 'react';
import PropTypes from 'prop-types';
import kinderData from '../../data/kindergartners_in_full_day_program';
import remediationInHigherEd from '../../data/remediation_in_higher_education';
import childrenInPoverty from '../../data/school_aged_children_in_poverty';
import highSchoolGrads from '../../data/high_school_graduation_rates';
import medianHouseholdIncome from '../../data/median_household_income';
import titleIStudents from '../../data/title_i_students';

const Dropdown = ({resetDistrict}) => { 
  let selectDistrict = () => {
    let selectedDistrict = document.querySelector('select');
    
    switch (selectedDistrict.value) {
    case 'kindergartners':
      resetDistrict(kinderData);
      break;
    case 'remediation':
      resetDistrict(remediationInHigherEd);
      break;
    case 'poverty':
      resetDistrict(childrenInPoverty);
      break;
    case 'highSchool':
      resetDistrict(highSchoolGrads);
      break;
    case 'income':
      resetDistrict(medianHouseholdIncome);
      break;
    case 'title1':
      resetDistrict(titleIStudents);
      break;
    default:
      break;
    }
  };

  return (
    <select onChange={() => selectDistrict()}>
      <option value='kindergartners'>Kindergartners in full day program</option>
      <option value='remediation'>Remediation in higher education</option>
      <option value='poverty'>School aged children in poverty</option>
      <option value='highSchool'>High school graduation rates</option>
      <option value='income'>Median household income</option>
      <option value='title1'>Title 1 Students</option>
    </select>
  );
};

Dropdown.propTypes = {
  resetDistrict: PropTypes.func.isRequired
};

export default Dropdown;