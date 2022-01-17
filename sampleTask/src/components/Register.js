import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import Validator from 'validator';
//import Database from './Database';
import './Login.css';

const Register = () => {
    const history = useHistory();
    const [name,setName]=useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const updateName = e => {
        setName(e.target.value);
    }

    const updateUsername = e => {
        setUsername(e.target.value);
    }

    const updatePassword = e => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        fetch('http://localhost:3000/register',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
                name:name,
				email:username,
				password:password
			})
		})
		  .then(response=>response.json())
		  .then(user=>{
              let error=document.getElementById("error");
              error.textContent="";
              error.style.color="red";    
			  if(user){
                history.push({pathname:'/'});
			  }else{
                error.textContent="Username or password already exists";
              }
		  })
        // let error=document.getElementById("error");
        // error.textContent="";
        // error.style.color="red";
        // if (!Validator.isEmail(username)) {
        //     error.textContent="Enter valid Email";
        // }else if (password.length < 6) {
        //     error.textContent="Password is weak";
        // }else{
        //     Database.users.push({
        //         name:name,
        //         email:username,
        //         password:password
        //     });
        //     history.push({pathname:'/'});
        // }
    }

    return (
        <div>
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <div class="fadeIn first">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" id="icon" alt="User Icon" />
                    </div>
                    <div>
                        <input type="text" id="name" class="fadeIn second" name="name" placeholder="name" value={name} onChange={updateName} required/>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" value={username} onChange={updateUsername} required/>
                        <input type="text" id="password" class="fadeIn third" name="password" placeholder="password" value={password} onChange={updatePassword} required/>
                        <div id="error"></div>
                        <input type="submit" class="fadeIn fourth" value="Register" onClick={()=>handleClick()}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;