import React from 'react'
import { Button } from 'bootstrap'
import { useState } from 'react'



function RegistrationForm() {

  const [formData , setFormData] = useState({
    uname : '',
    email: '',
    password :'',
    cpassword : ''
  })

  const [errors, setErrors] =  useState({});

  function handleChange(e){
    const {name,value} = e.target;

    // for pervious data 
    setFormData({...formData, [name]: value});

  //  console.log(e.target.value);
  }


  function handleSubmit(e){
    e.preventDefault();
    // object to store errors 
    const validateErrors =  {}
   
    if (formData.uname === ""){
       validateErrors.uname =  "Username is required "
    }
    if(formData.email === ""){
     validateErrors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
     validateErrors.email = "Email is not valid"
   
    }// regular expression to check for valid email


    if(formData.password = ""){
      validateErrors.password = "Password is required "
    } else if(formData.password.length > 8 ){
        validateErrors.password = "Password length too  short min 8 characters"
    }

    if(formData.cpassword !== formData.password){
      validateErrors.cpassword = "Passwords do not match"
    }

    setErrors(validateErrors)

    if(Object.keys(validateErrors).length === 0){
      alert("Form Submitted Successfully");
    }
   }




  return (
    <div>
      

       <div className='container'>   
       <body className="d-flex align-items-center py-4 bg-body-tertiary">
   

    

    
<main className="form-signin w-100 m-auto">
  <form onSubmit={handleSubmit}>
    <h1 className="h3 mb-3 fw-normal"> <em> Registration Form</em> </h1>

    <div className="form-floating">
      <input name = "uname" type="text" className="form-control" id="floatingPassword" placeholder="Name" autoComplete='off' onChange={handleChange}/>
      {errors.uname && <span> {errors.uname}</span>}
      <label for="floatingPassword">Name</label>
    </div>

    <div className="form-floating">
      <input name = "email"  type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange}/>
      {errors.email && <span> {errors.email}</span>}

      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input  name = "password" type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange}/>
      {errors.password && <span> {errors.password}</span>}

      <label for="floatingPassword">Password</label>
    </div>
    <div className="form-floating">
      <input name = "cpassword" type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange}/>
      {errors.cpassword && <span> {errors.cpassword}</span>}

      <label for="floatingPassword">Confirm Password</label>
    </div>

    <div className="form-check text-start my-3">
     
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Register Now </button>
  </form>
</main>
<script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

    

</body>
        
       </div>
    </div>
  )
}

export default RegistrationForm