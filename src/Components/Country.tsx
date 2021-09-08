import React from 'react'
import { Link } from "react-router-dom";
import { iArr as Props } from './Home'

// interface Props {
//     capital: string,
//     population: string,
//     flag: string,
//     latlang: string,
//     nameC:string

// }

const Country = (props: Props) => {
    return (


        <div className=" border border-primary ">
            <div className="m-3">Capital : {props.capital}</div>
            <div className="m-3">Population : {props.population}</div>
            {/* <div className="m-3">Latitude : {props.latlang[0]}</div>
            <div className="m-3">Longitude : {props.latlang[1]}</div> */}
            <div className="m-3">Flag : <img  src={props.flag} height="70px" alt="" /></div>
            <Link to={{
                pathname: "./details",
                state: {
                    capital: props.capital,
                    countryName: props.nameC
                },
            }} className="btn btn-primary mb-3">Capital Weather</Link>
        </div>


    )
}
export default Country;
