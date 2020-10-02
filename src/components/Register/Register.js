import React, {useState} from 'react';  
import {useHistory} from 'react-router-dom';
import './Register.css';
import {auth} from '../../firebase.js'
import FacebookLogo from '../../images/facebook.svg';

const Register=()=>{
  const history = useHistory('');
  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');


const RegisterHandler = (e) =>{
  e.preventDefault();

  auth.createUserWithEmailAndPassword(email,password)
  .then((auth) =>{
    if(auth.user){
      auth.user.updateProfile({
        displayName: firstName+ " " + lastName
      }).then((s) => {
        history.push("/")
      })
    }
  }).catch((e)=>{
    alert(e.message);
  })
}

 return(
 	<div className="register">
     	 <img src={FacebookLogo} className="login__logo" alt="Facebook Logo"/>
 		<div className="register__container">
      <h1>Create A New Account</h1>
      <h3>Its quick and easy</h3>
      <form>
        <center>
          <input type="name" className="register__name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
          <input type="name" className="register__name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
        </center>
        <center>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </center>
        <center>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </center>
        <h5 className="register__gender">Gender </h5>
          <div className="register__radiocontainer">
            <input type="radio" name="gender" value="Male" />
            <label> Male </label>
            <input type="radio" name="gender" value="Female" />
            <label> Female </label>
            <input type="radio" name="gender" value="Other" />
            <label> Other </label>
          </div> 

        <p className = "register__policy">
        By clicking Sign up, you agree to our {" "}
        <span> Terms, Data Policy</span> and <span> Cookie Policy </span>. You may recieve SMS notification from us and can opt out at any time.  
        </p>
      <center>
        <button type="submit" className="register__button" onClick={RegisterHandler} >Create A New Account</button>
      </center>    
    </form>	
    </div>
  </div>
 );
 }

export default Register;