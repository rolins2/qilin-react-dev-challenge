import React, { lazy, useEffect, useState } from "react";
import RegistrationForm from "./RegistrationForm";
import GitHubUser from "./GitHubUser";
//const GitHubUser = lazy(()=>import('./GitHubUser'));
import { ThemeContext, themes } from "./ThemeSwitcher";
import ThemeBtn from "./ThemeButton";
export default function App() {

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


const [themeMode , setThemeMode] = useState(themes.light);

const body = document.body
useEffect(()=>{
  switch(themeMode){
    case themes.light:
      body.classList.remove('bg-dark')
      body.classList.remove('text-light')

      body.classList.add('bg-light');
      body.classList.add('text-dark');
      break;
    case themes.dark:

       body.classList.remove('bg-light')
       body.classList.remove('text-dark')


        body.classList.add('bg-dark');
        body.classList.add('text-light');
        break;


    default:
      body.classList.remove('bg-dark')
      body.classList.remove('text-light')

      body.classList.add('bg-light');
      body.classList.add('text-dark');

    
  }
},[themeMode])



  

function handleOnClick(){
  themeMode === themes.light ? setThemeMode(themes.dark) : setThemeMode(themes.light);
}
  return (

    

    <ThemeContext.Provider value = { {themeMode ,handleOnClick}}>
      <div >
        <ThemeBtn theme={themeMode}/>
    
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
    </ThemeContext.Provider>
  
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
