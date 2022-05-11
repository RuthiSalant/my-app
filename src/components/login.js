import { IoAddOutline } from "react-icons/io5";
import '../css/login.css';
import { useState } from 'react';
import { GetUserByNamePassword, postUser, getPassByEmail } from '../api/user'

export function Login() {
  const [hideForm, setHideForm] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newId, setNewId] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [forgotp, setForgotp] = useState(false);
  const [open, setOpen] = useState(false);

  async function login() {
    await GetUserByNamePassword(name, password)
  }
  async function register() {
    await postUser(newName, newPassword, newEmail, newId, newPhone);
  }
  function setstate(){
    setForgotp(true);
    setOpen(!open)
  }

  return (
    <div id="all">
      {hideForm ?
        <div className="pen-title">
          <h1>Hello teacher</h1>
        </div>
        :
        <span>.</span>
      }
      <div id="container" className="container">
        <div className="card"></div>
        {hideForm ?
          <div className="card" id='a' >
            <button className="buttonn" onClick={() => setHideForm(false)}><IoAddOutline /></button>

            <h1 className="title">Login</h1>

            <form>
              <div className="input-container">
                <input type="#{type}" id="name" required="required" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="#{label}">Username</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="#{type}" id="password" required="required" onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="#{label}">Password</label>
                <div className="bar"></div>
              </div>
              <div className="button-container">
                <button onClick={login}><span>GO</span></button>
              </div>
              <div className="footer" ><a onClick={setstate}>Forgot your password?</a></div>
              {forgotp && <ForgotPassword open={open} setOpen={setOpen}/>}
            </form>
          </div> :
          <div className="card alt"  >
            <div className="toggle"></div>
            <h1 className="title">Register
              <div className="close" onClick={() => setHideForm(true)}></div>
            </h1>
            <form>
              <div className="input-container" id='b' >
                <input type="#{type}" id="newName" required="required" onChange={(e) => setNewName(e.target.value)} />
                <label htmlFor="#{label}">Username</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="#{type}" id="newPassword" required="required" onChange={(e) => setNewPassword(e.target.value)} />
                <label htmlFor="#{label}">Password</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="#{type}" id="newEmail" required="required" onChange={(e) => setNewEmail(e.target.value)} />
                <label htmlFor="#{label}">Email</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="#{type}" id="newId" required="required" onChange={(e) => setNewId(e.target.value)} />
                <label htmlFor="#{label}">ID</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="#{type}" id="newPhone" required="required" onChange={(e) => setNewPhone(e.target.value)} />
                <label htmlFor="#{label}">Phone</label>
                <div className="bar"></div>
              </div>
              <div className="button-container">
                <button onClick={register}><span>Next</span></button>
              </div>
            </form>
          </div>}
      </div>
    </div>
  )
}


function ForgotPassword(props) {
  const [verifyEmail, setVerifyEmail] = useState("");

  document.getElementById("name").required = false;
  document.getElementById("password").required = false;

   function ConfirmPassword(){
    getPassByEmail(verifyEmail);
    props.setOpen(!props.open)
   }
  return (
    <div >
      {props.open?
      <div>
      <br></br>
      <div>
        <h2 className='forgotPass' style={{ color: "#ed2553" }}>Please verify your identity!</h2>
        <div className="input-container">
          <input type="#{type}" id="newEmail" required="required" onChange={(e)=>setVerifyEmail(e.target.value)}/>
          <label htmlFor="#{label}">Email</label>
          <div className="bar"></div>
        </div>
        <div className="button-container">
          <button onClick={ConfirmPassword}><span>Submit</span></button>
        </div>
      </div>
      </div>:
      <h1></h1>}
    </div>
  )
}
