import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function Update() {

  const {id}=useParams();
  //console.log(id);
  
  
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState(0);
    console.log(name,email,age);
   
    ///
    const handlesubmit=async(e)=>{
e.preventDefault();

const adduser={name,email,age};



const res=await fetch(`http://localhost:4000/api/${id}`,{
 method:'PATCH',
 body:JSON.stringify(adduser),
 headers:{
    "Content-Type":"application/json",
 }

})


const re=await res.json();
console.log(re);
if(re)
{
    console.log("Data submited")
    alert('Data Updated')
    
}
else
{
    console.log("date submiited failed");
}

    }



    const getonedata=async()=>
    {


const user=await fetch(`http://localhost:4000/api/${id}`,{
  method:'GET',
});

const res=await user.json();
//console.log(res.data.age);
if(res)
{
  setAge(res.data.age);
  setName(res.data.name);
  setEmail(res.data.email);
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
useEffect(()=>{

  getonedata();
},[]);




  return (
    <div className="container">
    <h2>Update Details</h2>
    <form onSubmit={handlesubmit} >

<input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
<input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />

<input type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)} />

<input type="submit" name="submit" value="Save" className="btn btn-primary" />



    </form>
    </div>
  )
}

export default Update
