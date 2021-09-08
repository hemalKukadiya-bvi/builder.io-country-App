import React, { useState } from 'react'
import api from "../Services/api"
import Country from './Country';



interface Props {

}

export interface iArr {
    capital: string,
    population: string,
    latlang: string,
    flag: string,
    nameC: string
}


const Home = (props: Props) => {

    const [countryName, setcountryName] = useState<string>("")
    const [show, setShow] = useState<Boolean>(false)


    const [datas, setDatas] = useState<iArr[]>()
    console.log('datas', datas);

    const handleSubmit = () => {
        api.submitCountryName(countryName).then((res) => {
            let data = res.data

            if (data.length > 0) {
                setShow(true)
                setDatas(data)
            }
        })
    }

    return (
        <div className="mt-5">
            <div className="m-4">
                <label htmlFor="">Country Name </label>
                <input type="text" className="" placeholder="Country" value={countryName} onChange={(e) => { setcountryName(e.target.value) }} />

            </div>
            <button
                className={`btn ${countryName.length === 0 ? 'btn-secondary' : 'btn-primary'}`}
                onClick={() => handleSubmit()}
                disabled={countryName.length === 0 ? true : false}
            >Submit</button>
            <div className="container-fluid">
                <div className="row">


                    {show ? datas?.map((val, index) => (
                        <>
                            <div className="col-4 my-2 text-center">
                                <Country nameC={val.nameC} key={index} capital={val.capital} population={val.population}
                                    flag={val.flag} latlang={val.latlang} />
                            </div>
                        </>
                    ))

                        :
                        null
                    }

                </div>
            </div>
        </div>
    )
}

export default Home