import {useEffect} from 'react'
import Welcome from './Welcome';
import { Link } from 'react-router-dom';
import './LogIn.css';

{/* import LogIn from "LogIn"; */}

function LogIn(){
  {/* JS start here */}

  // password 
  function toggleHidePass(){
    let x = document.getElementById("password-input")
    if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }

  // signup pass
  function toggleHidePassSignUp() { 
    let x = document.getElementById("sign-up-password-input")
    if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }

useEffect(() => {
  document.getElementById("log-in-button").addEventListener("click", function() {
    document.getElementById("log-in-overlay").style.display= "block"
  })

  document.getElementById("close-modal-li").addEventListener("click", function() {
    document.getElementById("log-in-overlay").style.display= "none"
  })


  document.getElementById("sign-up-button").addEventListener("click", function() {
    document.getElementById("sign-up-overlay").style.display= "block"
  })

  document.getElementById("close-modal-su").addEventListener("click", function() {
    document.getElementById("sign-up-overlay").style.display= "none"
  })
}, [])



{/* JS start here */}

  return (
    <div>
{/* html start here */}

<div className="body"> 
  
  {/* <!--   Log in modal begins here --> */}
    <div id="log-in-overlay">
      <div id="log-in-modal">
        
        <h3>Log in information</h3>
  
        <div className="row-center">
          <form action="/login" method="post">
            <input id="email-input" name="email" placeholder="Email"/>
            <br />
            <input id="password-input" name="password" placeholder="Password"/>
          <input id="checkbox" type ="checkbox" onClick = {toggleHidePass} className = "checked" />
        <button id="log-in">Log In</button>
          </form>
        </div>
        <br />
        <button id="close-modal-li">Back</button>
        
      </div>
    </div>
    {/* <!--  Log in modal ends here --> */}
    
    {/* <!--   Sign Up modal begins here --> */}
  <div id="sign-up-overlay">
    <div id="sign-up-modal">
      
      <h3>Sign Up</h3>
  
      <div className="row-center">
        <form action="/users" method="post">
          <input id="sign-up-email-input" name="email" placeholder="Email"/>
          <br />
          <input id="sign-up-password-input" name="password" placeholder="Password"/>
        <input id="checkbox" type ="checkbox" onClick = {toggleHidePass} className = "checked" />
      <button id="submit">Submit</button>
        </form>
      </div>
      <br />
      <button id="close-modal-su">Back</button>
      
    </div>
  </div>
  {/* <!--  Sign Up modal ends here --> */}

  
{/* <!-- Log In / Sign Up / Guest Buttons begin here --> */}
  <div className="container-box">
      
        <div className="row-center">
          <div className="logo"></div>
        </div>
        <br />

      <div className="row-center">
        <button id="log-in-button"><h4>Log In</h4></button>
    </div>

    
      <div className="row-center">
        <button id="sign-up-button"><h4>Sign Up</h4></button>
      </div>

    
      <div className="row-center">
        <Link to="/Welcome"><button id="guest"><h4>Guest</h4></button></Link>
      </div>
  </div>
{/* <!-- Log In / Sign Up / Guest Buttons end here --> */}
</div>

{/* html end here */}
    </div>
  )

}

export default LogIn