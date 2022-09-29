import React, { useState, useEffect, useReducer  , useContext} from "react";
import "../css/style.css";
// import { useSelector , useDispatch ,connect} from 'react-redux';
// import {fetchUsers} from "../action/index";
import axios from "axios";
import { Link , useParams} from "react-router-dom";
import { States } from "../context/noteState";

// const Main = ({userData , fetchUsers}) => {
const Main = (props) => {
  //icon name toggle
  //   let state=useSelector((data)=>data.items);
  //   const dispatch = useDispatch();

  //  console.log(state ,"hdsiuh");
  //   const mapStateToProps = state =>{
  //     return{
  //       userData:state.user
  //     }
  //   }
  //   const mapDispatchToProps = dispatch =>{
  //     return{
  //       fetchUsers:()=>dispatch(fetchUsers())
  //     }
  //   }
  // const [icon, setIcon] = useState(false);
  const [search, setSearch] = useState("");
  const {id}=useParams();
  const {colorMode} = useContext(States);
  const reducer = (state, action) => {
    switch (action.type) {
      case "Success":
        return {
          loading:true,
          user: action.payload,
          error: "",
        };
      case "Error":
        return {
          loading: false,
          user: {},
          error: "Opps Error",
        };

      default:
        return state;
    }
  };

  const initialState = {
    loading: false,
    user: [],
    error: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  

  //  async function getData(){
  //       let list =await axios.get("https://restcountries.com/v2/all");
  //       console.log(list.data);
  //       dispatch({
  //         type:"Success",
  //         payload:list.data,
  //       })

  //       dispatch({
  //         type:"Error",
  //       })
  //   }
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        dispatch({
          type: "Success",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "Error",
        });
      });
  }, []);

  return (
    <>
    { state.loading ? 
      <div style={colorMode} className="w-100 min-vh-100">    
        <main className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-12">
              <form className="d-flex ">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  style={colorMode}
                />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>

            <div className="col-lg-6  col-12">
              {/* <li className={`nav-item dropdown list-unstyled offset-lg-9 text-center bg-${colorMode.text} my-3 px-lg-2  my-lg-0`}>
                <Link
                  className={`nav-link dropdown-toggle text-${colorMode.opposite}`}
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fliter by region
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                       Africa
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      America
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                       Asian
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                       Europe
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                       Ocean
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* <select name="select" className={`offset-lg-9 outline-none text-${colorMode.opposite} text-center bg-${colorMode.text} my-3 px-lg-2 py-2  my-lg-0`}   value="all" id="">
                <option value="filter"> Fliter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asian">Asian</option>
                <option value="Europe">Europe</option>
                <option value="Ocean">Ocean</option>
              </select> */}
            </div>
          </div>

          {/* item */}
          {/* {
              userData.loading ? <h2>Loading...</h2> :userData.error ? <h2>{userData.error}</h2> : <h2>{userData.users.map((user)=>{
                  return(
                      <>
                          <p>{user.}</p>
                      </>
                  )
              })}</h2> 
            } */}
          <div className="d-flex justify-content-lg-between justify-content-center align-content-center   mt-5 flex-wrap flex-md-row flex-column">
            {state.user
              .filter((ele) => {
                if (ele.name.toLowerCase().includes(search.toLowerCase())) {
                  return ele;
                }
              })
              .map((ele, index) => {
                return (
                  <>
                  <Link to={`/sub/${ele.name}`} className="text-decoration-none">
                    <div
                      className="card mb-5"
                      style={{ width: " 18rem" }}
                      key={index + 1}
                    >
                      <img
                        src={ele.flags.png}
                        className="card-img-top img-fluid "
                        alt="..."
                        style={{ width: "100%", height: "200px" }}
                      />
                      <div className="card-body" style={colorMode}>
                        <h5 className="card-title px-3 py-md-2">{ele.name}</h5>
                        <p className="card-text py-0   px-3">
                          <span className="fw-bold"> Population: </span>
                          {ele.population}
                        </p>
                        <p className="card-text py-0  px-3">
                          <span className="fw-bold">Region: </span>
                          {ele.region}
                        </p>
                        <p className="card-text py-0  px-3">
                          <span className="fw-bold">Capital: </span>
                          {ele.capital}
                        </p>
                        {/* <a to="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                    </Link>
                  </>
                );
              })}
          </div>
        </main>

        <footer style={colorMode}>

        </footer>
      </div> : <div className="text-center d-flex w-100 min-vh-100 justify-content-center align-items-center"><h1>Loading...</h1> </div>}
    </>
  );
};
//
// export default connect(mapStateToProps,mapDispatchToProps)(Main);
export default Main;
