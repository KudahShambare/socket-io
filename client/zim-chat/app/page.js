"use client";
import React, { use, useState } from "react";
import {
  MDBContainer,

  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function Home() {
  const [email,setEmail] = useState("")
  const [password,setPasssword] = useState("")

  const handleSubmit = () => {
    //validate email && strong password
 console.log(email,password);
  //let emailRegex = /*@*.*/ 
//send data to the server
  fetch()

  };

  return (
    <div>
  <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

<MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>{
  e.preventDefault();
  setEmail(e.target.value)
}}/>
<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>{
  e.preventDefault();
  setPasssword(e.target.value)
}}/>

<div className="d-flex justify-content-between mx-3 mb-4">
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
  <a href="!#">Forgot password?</a>
</div>

<MDBBtn className="mb-4" onClick={handleSubmit}>Sign in</MDBBtn>

<div className="text-center">
  <p>Not a member? <a href="#!">Register</a></p>



</div>

</MDBContainer>
    </div>
  );
}
