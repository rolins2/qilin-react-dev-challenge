import React from 'react'
import { Button } from 'bootstrap'


function RegistrationForm() {
  return (
    <div>
      

       <div className='container'>   
       <body className="d-flex align-items-center py-4 bg-body-tertiary">
   

    

    
<main className="form-signin w-100 m-auto">
  <form>
    <h1 className="h3 mb-3 fw-normal"> <em> Registration Form</em> </h1>

    <div className="form-floating">
      <input type="text" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Name</label>
    </div>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Confirm Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
     
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
  </form>
</main>
<script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

    

</body>
        
       </div>
    </div>
  )
}

export default RegistrationForm