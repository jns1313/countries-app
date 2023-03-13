import React, {useState, useEffect} from 'react'
import { APIURL } from './api'
import SearchBox from './SearchBox'
import FilterSelect from './FilterSelect'
import { Link } from 'react-router-dom'


export default function Countries() {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const countryData = async () => {
        try {
            const resp = await fetch(`${APIURL}/all`)

            const data = await resp.json()

            if(!resp.ok) throw new Error('Something went wrong..')

            console.log(data)

            setCountries(data)
            setLoading(false)
        } catch(error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const searchHandler = async (countryName) => {
        try {
            const resp = await fetch(`${APIURL}/name/${countryName}`)

            const data = await resp.json()

            if(!resp.ok) throw new Error('Something went wrong..')

            setCountries(data)
            setLoading(false)

        } catch(error) {
            setError(error.message)
            setLoading(false)

        }
    }

    const regionHandler = async (value) => {
        try {
            const resp = await fetch(`${APIURL}/region/${value}`)

            const data = await resp.json()

            if(!resp.ok) throw new Error('Something went wrong..')

            setCountries(data)
            setLoading(false)

        } catch(error) {
            setError(error.message)
            setLoading(false)

        }
    }

    useEffect(() => {
        countryData()
    }, [])

    return(
        <div className="countries-container">

            {!error && loading && <h4>Loading countries...</h4>}
            {error && !loading && <h4>Something went wrong...</h4>}

            <div className="search-tools">
                <SearchBox searchHandler={searchHandler} />
                <FilterSelect regionHandler={regionHandler} />
            </div>

            <div className="countries-wrapper">

            {countries && countries.map((country, index) => {
                return(
                    <Link to={`country/${country.name.common}`} key={country.name.common}>
                        <div className="country-card" key={index}>
                            <div className="country-img-container">
                                <img src={country.flags.png} alt="flag" />
                            </div>
                            <h4 className="country-name">{country.name.common}</h4>
                            <h4 className="country-info">Population: {new Intl.NumberFormat().format(country.population)}</h4>
                            <h4 className="country-info">Capital City: {country.capital}</h4>
                            <h4 className="country-info">Region: {country.region}</h4>
                        </div>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}