// import logo from './logo.svg';
import './App.css';
// import './node_modules/ '
import { useState } from 'react';
function App() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const handleSubmit= (event)=>{
    // console.log(even)
    event.preventDefault();
    console.log("state -> ",email,psw);
  }

  return (
    
    <form onSubmit={handleSubmit} className="offset-4">
      <div className="mb-3 col-4">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
          type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input 
        value={psw}
        onChange={(event)=>{setPsw(event.target.value);}}
        type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  );
}

export default App;
