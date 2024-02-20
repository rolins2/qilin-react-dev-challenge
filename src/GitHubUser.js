import React, { useEffect, useState }  from "react";
import axios from "axios";
function GitHubUser(userNme){

    
 const ApiUrl = "https://api.github.com/users/";

 const [user,setUser] = useState([]);
 const  [usersRepo,setUserRepo] = useState([]);
 const [repUrl,setRepUrl] = useState("");
  try{

    // useEffect(()=>{
    //      axios.get(ApiUrl + "mojombo")
    //     .then((res)=>{setUser(res.data)
    //       setRepUrl(user.repos_url)
    //     });

    fetch(ApiUrl +"mojombo")
    .then((res)=>res.json())
    .then((upr)=>{setUser(upr)
    setRepUrl(upr.repos_url)
    })
        .catch((error)=> console.error("Couldnt fetch data"))

     

    
    

   
  }catch(err){
    console.log("Error found "+err);
  }


//   useEffect(()=>{
//     axios.get(repUrl)
//     .then((res)=>{setUserRepo(res.data)})
// })
 

fetch(repUrl)
.then((response)=>response.json())
.then((upr)=>{setUserRepo(upr)})
.catch((error)=> console.error("Repo no found"))

const usr = [
    {name: "Max"},
    {name : "lappin"}
]

    return (
        <div> Some github code

          <h1>  </h1>  

        <div> 
        <img src = {user.avatar_url} alt="Picture of user"/>

        {user.login}


            {user.repos_url};
        
        </div>

        <div> 
            <ul>
            {usersRepo.map((d)=>( 
                    <li> key = {d.name}</li>
                ))}

            </ul>
               
        </div>

        </div>
    )
}

export default GitHubUser;