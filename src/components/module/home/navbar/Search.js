import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from "react-router-dom";
import axios from 'axios'


const Search = () => {
        const [search, setSearch] = useState("");
        let [searchParams, setSearchParams] = useSearchParams({});
        const handleSearch = () => {
          setSearchParams({ keyword: search });
        };
        useEffect(() => {
            axios.get(`http://localhost:8080/products/cari?${searchParams}`).then((res) => {
                setSearch(res.data)
            }).catch((err) => {
                console.log(err);
            })
          console.log(searchParams.get("keyword"));
        }, [searchParams]);
  return (
    <div>
      <input
        type="search"
        className="form-control search-input"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="input-group-text search bg-light" id="search-addon">
        <i className="bi bi-search" onClick={handleSearch}></i>
      </span>
          <p key={setSearch.id}>test</p>
          <h3>{ setSearch.name}</h3>
          <h3>{ setSearch.price}</h3>
    </div>
  );
}

export default Search;