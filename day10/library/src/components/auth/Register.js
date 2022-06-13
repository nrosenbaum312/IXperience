import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/firebase';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onRegisterClicked(e){
      e.preventDefault();

      try{
          const userCred = await createUserWithEmailAndPassword(auth, email, password);

          console.log(userCred);
          navigate("/");
      } catch(err){
          alert(err.message);
      }
  }
  
  
    return (
    <div className="container my-5">
      <div className="card card-body p-4 m-5">
        <h3>Register To Library</h3>
        <hr></hr>
        <form onSubmit={onRegisterClicked}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary px-5 me-1">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
