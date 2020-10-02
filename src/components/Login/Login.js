import React, {useState} from 'react';  
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase.js';
import FacebookLogo from '../../images/facebook.svg';


const Login=()=>{

const [email, setEmail] =useState('');
const history = useHistory ('');
const [password, setPassword] = useState ('');

const LoginHandler = (e) =>{
	e.preventDefault();

	auth.signInWithEmailAndPassword(email,password)
	.then((auth) =>{
		history.push("/");
	})
	.catch((e) =>{
		if(e.message === "The password is invalid or the user does not have a password."){
			alert("Please check your credentials again");
		}else if (e.message === "There is no user record corresponding to this identifier. The user may have been deleted."){
			history.push("/register");
		} else {
			alert (e.message);
		}
	})
}

 return(
 	<div className="login">
		 <img src={FacebookLogo} className="login__logo" alt="Facebook Logo"/>
 		<div className="login__container">
 		<h3> Log In To Facebook </h3>
 		<form>
 			<center>
 				<input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
 			</center>
 			<center>
 				<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
 			</center>
 			<center>
 				<button type="submit" className="login__button" onClick={LoginHandler}>Log In</button>
 			</center>
 			<center>
				<div className="login__register">
 					<h5>Forgetten Password ?</h5>
					<h3 className="dot">.</h3>
					<Link to="/register" style={{textDecoration: 'none'}}>
 				 		<h5 className="login__registerButton"> Sign Up For Facebook</h5> 
 				 </Link>
				</div>
			</center>
 		</form>
    	</div>
	</div>
 	);
 }

export default Login;