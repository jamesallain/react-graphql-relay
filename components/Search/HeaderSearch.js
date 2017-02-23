import React from 'react';
import s from './HeaderSearch.css';

export default class HeaderSearch extends React.Component {
  render() {
    return (
      <div className={`${s.search}`}>
    		<input type="text" className={`${s.searchField}`} placeholder="Search"></input>
    		<i className={`fa fa-search ${s.searchIcon}`}></i>
    	</div>
    );
  }
}
