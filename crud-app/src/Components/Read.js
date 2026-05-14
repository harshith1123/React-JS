import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    const [apiData,setApiData] = useState([]);

    function retrieveData(){
        axios.get('https://crud-api.free.beeceptor.com/crud-api')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setApiData(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        retrieveData();
    },[])
    
  return (
    <div>
      <div className="row">
        <div className="col md-12">
            <div className='mb-2 mt-2'>
                <Link to="/create">
                    <button type="submit" className='btn btn-primary'>Create New Data</button>
                </Link>                                            
            </div>
            <table className='table table-bordered table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        apiData.map((item)=>{
                            return(
                                <>
                                    <tr >
                                        <td>{item.id}</td>
                                        <td>{item.u_name}</td>
                                        <td>{item.u_email}</td>
                                        <td>{item.u_age}</td>
                                        <td>
                                        <Link to="/edit">
                                            <button type="submit" className='btn btn-success'>Edit</button>
                                        </Link>                                            
                                        </td>
                                        <td>
                                            <Link to="/delete">
                                                <button type="submit" className='btn btn-danger'>Delete</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                    </tbody>
                <tbody>

                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Read
