import React, { useEffect, useState } from "react";
import axios from "axios";

function GitHubUser(props) {
  const usssr = props.userNme;
  const ApiUrl = "https://api.github.com/users/";

  const [isTrue, setIsTrue] = useState(false);
  const [msg, setMsg] = useState("User not found");
  const [user, setUser] = useState([]);
  const [usersRepo, setUserRepo] = useState([]);
  const [repUrl, setRepUrl] = useState("");

  useEffect(() => {
    fetch(ApiUrl + usssr)
      .then((res) => res.json())
      .then((upr) => {
        setUser(upr);
        setRepUrl(upr.repos_url);
      })
      .catch((error) => {
        console.error("Could not fetch data");
        setIsTrue(false);
      });
  }, [usssr]);

  useEffect(() => {
    if (isTrue) {
      fetch(repUrl)
        .then((response) => response.json())
        .then((upr) => {
          setUserRepo(upr);
          setMsg("");
        })
        .catch((error) => {
          console.error("Repo not found");
          setMsg("Repo not found");
        });
    }
  }, [isTrue, repUrl]);

  return (
    <div>
      <h4> Entered username {usssr} </h4>
      {isTrue && (
        <div>
          <img src={user.avatar_url} alt="Picture of user" height={200} width={200} className="rounded" />
          <h4> The username is {user.login}</h4>
          <div>
            <ul>
              {usersRepo.map((d) => (
                <li key={d.id}> Repo Name {d.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default GitHubUser;
