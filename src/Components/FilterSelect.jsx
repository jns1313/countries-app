import React from 'react'

export default function FilterSearch({regionHandler}) {

    function selectHandler(e) {
        const region = e.target.value
        regionHandler(region)
    }

    return(
        <select onChange={selectHandler}>
            <option className="filter-option">Filter by region</option>
            <option className="filter-option" value="africa">Africa</option>
            <option className="filter-option" value="america">America</option>
            <option className="filter-option" value="asia">Asia</option>
            <option className="filter-option" value="europe">Europe</option>
            <option className="filter-option" value="oceania">Oceania</option>
        </select>
    )
}