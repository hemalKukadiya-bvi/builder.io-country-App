import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import api from "../Services/api"


interface Props {
    // capital:object

}

interface IData {
    Temperature: number,
    Humidity: string,
    Wind_Speed: string,
    Capital: string

}


const Details = (props: Props) => {

    const location = useLocation()

    const [data, setData] = useState<IData>({
        Temperature: 0, Humidity: "", Wind_Speed: "", Capital: ""
    })

    const { capital, countryName }: any = location.state



    useEffect(() => {
        if(capital){
             api.getWeatherData(capital)
            .then((res) => {
                setData({
                    Temperature: res.data.current.temperature,
                    Humidity: res.data.current.humidity,
                    Wind_Speed: res.data.current.wind_speed,
                    Capital: capital
                })
            })
        }
        else{
            return
        }
       

    }, [capital])

    return (
        <>

            <Link to='/' className="btn btn-primary my-3">Home</Link>
            <div className="container text-center">
                <h2 className="text-success">{countryName}</h2>
                <ul className="list-unstyled">
                    <li className="">Capital : {data.Capital}</li>
                    <li className="">Temperature : {data.Temperature}</li>
                    <li className="">Humidity : {data.Humidity}</li>
                    <li className="">Wind Speed : {data.Wind_Speed}</li>

                </ul>

            </div>
        </>
    )
}

export default Details


