import React, { useState } from 'react';
import Update from "./component/Update";

function Create() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState(0);
    console.log(name,email,age);
    const handlesubmit=async(e)=>{
e.preventDefault();
const adduser={name,email,age};

const res=await fetch("http://localhost:4000/api/",{
 method:"POST",
 body:JSON.stringify(adduser),
 headers:{
    "Content-Type":"application/json",
 }

})


const re=await res.json();
if(re)
{
    console.log("Data submited")
    alert("Your data saved");
}
else
{
    console.log("date submiited failed");
}

    }


   //same code with axios
// const handlesubmit = async (e) => {
//   e.preventDefault();
//   const adduser = { name, email, age };

//   try {
//     const response = await axios.post("http://localhost:4000/api/", adduser, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });

//     if (response.status === 200) {
//       console.log("Data submitted");
//     } else {
//       console.log("Data submission failed");
//     }
//   } catch (error) {
//     console.log("Data submission failed:", error.message);
//   }
// };

  return (
    <div className="container">
    <h2>Enter Data</h2>
    <form onSubmit={handlesubmit} >

<input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
<input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />

<input type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)} />

<input type="submit" name="submit" value="Save" className="btn btn-primary" />



    </form>
    </div>
  )
}

export default Create
