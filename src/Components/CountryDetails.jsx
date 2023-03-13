import React, {useState, useEffect} from 'react'
import { APIURL } from './api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function CountryDetails() {

    const [countryInfo, setCountryInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const {countryName} = useParams()


    useEffect(() => {

        const countryData = async () => {

            try {
                const resp = await fetch(`${APIURL}/name/${countryName}`)
    
                const data = await resp.json()
    
                if(!resp.ok) throw new Error('Something went wrong..')
    
                setCountryInfo(data)
                setLoading(false)
                setError(false)
    
            } catch(error) {
                setLoading(false)
                setError(error.message)
            }
        }
        
        countryData()

    },[countryName])


    return(
        <div className="details-container">
            <button className="btn">
                <Link to='/'>Back</Link>
            </button>
            {!loading && error && <h4>Something went wrong..</h4>}
            {!error && loading && <h4>Loading country information..</h4>}
            {countryInfo && countryInfo.map((country, index) => {
                return(
                    <div className="details-card" key={index}>
                        <div className="details-img-container">
                            <img src={country.flags.png} alt="flag" />
                        </div>
                        <h4 className="details-title">{country.name.common}</h4>
                        <h4 className="details-info">Capital City: {country.capital}</h4>
                        <h4 className="details-info">Population: {new Intl.NumberFormat().format(country.population)}</h4>
                        <h4 className="details-info">Region: {country.region}</h4>
                        <h4 className="details-info">Timezone: {country.timezones}</h4>
                        <h4 className="details-info">Sub-Region: {country.subregion}</h4>
                    </div>
                )
            })}
        </div>
    )
}