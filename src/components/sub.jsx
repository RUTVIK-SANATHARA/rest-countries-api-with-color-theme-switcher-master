import React, { useEffect, useState , useContext } from 'react'
// import Navbar from './Navbar'
import { Link, useParams } from "react-router-dom"
import axios from 'axios';
import { States } from '../context/noteState';

const Sub = (props) => {
    let { id } = useParams();
    const {colorMode} = useContext(States);
    const [state, setstate] = useState([])
    useEffect(() => {
        axios.get(`https://restcountries.com/v2/name/${id}`)
        .then(res=>{
            setstate(res.data)
        }).catch(error=>{
            console.log(error)
        })
        
    }, [])
    return (
        <>
            {/* <Navbar /> */}
            <div  style={colorMode} className="w-100 min-vh-100" >
            <div className="container py-5">
                <button className="btn btn-light px-5 shadow-sm"><Link to="/" className="text-decoration-none text-dark"> <span> <i className="fa-solid fa-arrow-left"></i> </span> Back </Link></button>
            </div>

            <div className="container"   >
                <div className="row my-lg-5">
                    {
                        state.map((ele,index) => { 
                               
                            return (
                                <> 
                                     
                                    <div className="col-12 col-md-6 pe-5">
                                        <img src={ele.flags.svg} alt="flags" style={{ width: "100%", height: "500px" }} />
                                    </div>
                                    <div className="col-12 col-md-6 px-5 pt-5">
                                           <div className="row">
                                               <div className="col-12 col-md-6">
                                                  <h1>{ele.name}</h1>
                                                  <p className="pt-4"><span className="fw-bold">Native Name: </span>{ele.nativeName}</p>
                                                  <p className="pt-4"><span className="fw-bold">Population: </span> {ele.population}</p>
                                                  <p className="pt-4"><span className="fw-bold">Region: </span>{ele.region}</p>
                                                  <p className="pt-4"><span className="fw-bold">Sub Region: </span> {ele.subregion}</p>
                                                  <p className="pt-4"><span className="fw-bold">Capital: </span>{ele.capital}</p>
                                               </div>
                                               <div className="col-12 col-md-6 pt-5">
                                                <p className="pt-4"><span className="fw-bold">Top Level Domain: </span>{ele.topLevelDomain}</p>
                                                <p className="pt-4"><span className="fw-bold">Currencies: </span>{ele.currencies[0].code}</p>
                                                <p className="pt-4"><span className="fw-bold">Languages: </span>{ele.languages[0].name}</p>
                                               </div>
                                           </div>

                                           <div className="row">
                                                <div className="col-12">
                                                   
                                                <p className="pt-4"><span className="fw-bold">Border Countries: </span> {  ele.borders + " ,".replace(/^,|,$/g, "")}  {/* slice(0,-1) */ } </p>
                                                </div>
                                           </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </>
    )
}

export default Sub