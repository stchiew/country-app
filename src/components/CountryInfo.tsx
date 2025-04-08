// CountryInfo.js
import React from 'react';
import { ICountryInfoProps } from './ICountryInfoProps';

const CountryInfo: React.FC<ICountryInfoProps> = ({ countryData }) => {
    return (
        <div>

            <h2>{countryData.name.common}</h2>
            <div className="row">
                <div className="dataRow">
                    <h4>Capital:</h4>
                    <span>{countryData.capital[0]}</span>
                </div>
            </div>
            <div className="row">
                <div className="dataRow">
                    <h4>Continent:</h4>
                    <span>{countryData.region}</span>
                </div>
            </div>
        </div>
    );
}

export default CountryInfo;
