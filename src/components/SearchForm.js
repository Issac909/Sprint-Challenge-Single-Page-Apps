import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function SearchForm(props) {

  return (
    <section className="search-form">
      <form>
        <label htmlFor = 'search'>Look up your favoirite character</label>
        <input type = 'text' name = 'search' onChange = {props.onChange} placeholder = 'Search' value = {props.search} />
      </form>  
    </section>
  );
};

