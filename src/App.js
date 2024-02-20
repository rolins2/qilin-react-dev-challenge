import React, { lazy, useState } from "react";
import RegistrationForm from "./RegistrationForm";
import GitHubUser from "./GitHubUser";
//const GitHubUser = lazy(()=>import('./GitHubUser'));
export default function App({}) {

    const [gitUsr,setGitUsr] = useState("");
    const [isSubmitted,setIsSubmitted] = useState(false);

  function handleSubmit(e){
    e.preventDefault();

    setIsSubmitted(true);
    
  }

function handleChange(e){
  console.log(e.target.value);
    setGitUsr(e.target.value);

}

  return (
    <div >
    
      {/* Add any additional instructions or guidance for candidates here */}

      <RegistrationForm />


     <div className="container">

     <form onSubmit={handleSubmit}>  

<label> Enter Github username</label>
<input required name = "gName" type = "text" onChange={handleChange}></input>

<button type = "submit"> Submit </button>
</form>

{isSubmitted && <GitHubUser userNme = {gitUsr}/>}

     </div>


    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
  logo: {
    width: "100px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
  description: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.5",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
};
