import React, { useEffect } from 'react'
import './Nav.css'
const Nav = () => {
    useEffect(()=>{
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        signUpButton.addEventListener('click', ()=> container.classList.add('right-panel-active')
        );
        signInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active')
        );
    })
    
    return(
<div>
<div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
               
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button class="su" >Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign In</h1>
               
                <span>or use your account</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#" target="_blank">I Forgot my Password</a>
                <button class="si">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To Keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Wanderer!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</div>
 
  )
}

export default Nav