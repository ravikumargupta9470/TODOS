import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';

function Read() {
  const [userdata, setUserdata] = useState([]); // Initialize as an empty array

  // Fetch data from API
  async function getData() {
    try {
      let res = await fetch('http://localhost:4000/api');
         res = await res.json();
         setUserdata(res.data); // Set state with the actual data
         console.log(res.data)
         console.log(userdata)
    } catch (error) {
      console.error('Error fetching data:', error); // Log errors
    }
  }

  const handledelete = async (id) => {
    try {
      console.log(id);
  
      // Use template literals to embed the id in the URL
      const response = await fetch(`http://localhost:4000/api/${id}`, {
        method: "DELETE"
      });
  
      if (response.ok) {
       
        const result = await response.json();
        alert("Data Deleted");
        setTimeout(()=>{
          getData();
        },100);
      } else {
        alert("Error in delete: " + response.statusText);
      }
    } catch (error) {
      // Handle any errors that occurred during the fetch
      alert("An error occurred: " + error.message);
    }
  };
  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  // Log updated userdata
  useEffect(() => {
    console.log('Updated userdata:', userdata);
  }, [userdata]);


  

  // Render component
  return (
    <div>
   
      {userdata.length > 0 ? (
        userdata.map((ele) => (
          <div className="card" >
 
          <div className="card-body">
            <h5 className="card-title">Name: {ele.name}</h5>
            <p className="card-text">Email: {ele.email}</p>
            <a >Age: {ele.age}</a>
            <a className='btn btn-danger' onClick={()=>handledelete(ele._id)} >Delete</a>
            <Link to={`/update/${ele._id}`}   className='btn btn-success' name="Edit" value="Edit">Edit</Link>
          </div>
        </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Read;
