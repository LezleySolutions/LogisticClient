import axios from "axios";
import React, {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import NavDash from "./NavDash";
import './Assets/Header.css'
import moment from 'moment'

const MainDash = () => {
    const navigate = useNavigate();
    const [usersData , setUsersData] = useState([])
    useEffect(() =>{
      setUsersData([])
      const config = {
        method: "GET",
        url: "https://api.dicelogistic.tech/con/allContacts",
      };
      axios(config)
        .then((response) => {
          console.log(response.data, "res");
          let a = response.data.reverse()
          setUsersData(a)
        });
    },[])
  return (
    <>
    <div>
    <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">   
    <NavDash />
                
                <div className="container-fluid">
                    <div className="card shadow mb-4">
                        <div className="card-header ">
                            <h6 className="m-2 font-weight-bold text-primary">Users</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive" style={{maxHeight:'100vh' , overflow:"auto"}}>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>Date</th>
                                            <th>Message</th>
                                        </tr>
                                    </thead>
                                    {
                                      usersData.length < 0?null :
                                      usersData.map((items , index) =>{
                                        let id = index +1
                                        return(
                                    <tbody key={index}>
                                        <tr>
                                            <td>{id}</td>
                                            <td>{items.name}</td>
                                            <td>{items.email}</td>
                                            <td>{moment(items.created_at).format("MMM-DD-YYYY hh:mm")} </td>
                                            <td>{items.message}</td>
                                        </tr>
                                    </tbody>
                                        )
                                      })
                                    }
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer className="sticky-footer">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span className='fs-6'>Copyright &copy; Dice Logistic 2023</span>
                    </div>
                </div>
            </footer>

        </div>
    </div>
      {/* <button
        type="submit"
        className="form-control btn btn-primary submit px-3"
        onClick={() => {
            localStorage.clear("")
            navigate('/admin')
        }}
      >
        Logout
      </button> */}
    </>
  );
};

export default MainDash;
