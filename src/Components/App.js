import React from 'react';
import Countries from './Countries';
import CountryDetails from './CountryDetails';
import { Routes, Route } from 'react-router-dom';
// Rest countries API
// https://restcountries.com/


export default function App() {

    return(
        <main>
            <header className="header">
                <h1>Capital Cities of the World: Population and Basic Information</h1>
            </header>
            <section>
                <Routes>
                    <Route path="/" element={<Countries />}/>
                    <Route path="/country/:countryName" element={<CountryDetails />} />
                </Routes>
            </section>
        </main>
    )
}