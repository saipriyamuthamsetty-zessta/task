import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const updateUsername = e => {
        setUsername(e.target.value);
    }

    const updatePassword = e => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        fetch('http://localhost:3000/signin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:username,
				password:password
			})
		})
		  .then(response=>response.json())
		  .then(data=>{
              let error=document.getElementById("error");
              error.textContent="";
              error.style.color="red";    
			  if(data!=="error logging in"){
                sessionStorage.setItem("username",data);
                history.push({pathname:'/dashboard'});
			  }else{
                error.textContent="Invalid username or password";
              }
		  })
    }

    return (
        <div>
            <div class="wrapper fadeInDown">
            <div id="formContent">
                <div class="fadeIn first">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" id="icon" alt="User Icon" />
                </div>
                <div>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" value={username} onChange={updateUsername} required/>
                    <div id="uname"></div>
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" value={password} onChange={updatePassword} required/>
                    <div id="error"></div>
                    <input type="submit" class="fadeIn fourth" value="Log In" onClick={()=>handleClick()}/>
                    <input type="submit" class="fadeIn fourth" value="Register" onClick={()=>history.push({ pathname: '/register' })}/>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Login;