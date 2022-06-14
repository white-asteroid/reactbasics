import { useState } from "react";
import axios from "axios";
const App = () => {
  const  [users, setUser]=useState("");
  // const fetchData = () => {
  //   fetch('http://localhost:8000/api',{
  //     method: "GET",
  //   })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data.users);
  //     setUser(data.users);
  //   })
  //   .catch((err)=>console.log(err));
    
  // };
  function fetchData(){
  axios
  .get('http://localhost:8000/api')
  .then(({data})=>{
    setUser(data.users);
    console.log(data.users);
  })
  .catch((err)=>console.log(err));}
  return(
    <><div>
      {/* {{users && users.map(
        (user) =>{
          user.name
        }
      )} */}
      {users && users.map((user)=><div>{user.name} is {user.age} years old</div>)}
    </div><div className="container">
        <button onClick={fetchData}>click and fetch</button>

      </div></>
  )
}

export default App;