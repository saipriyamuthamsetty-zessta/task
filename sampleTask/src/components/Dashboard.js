import React from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';

const Dashboard=()=>{
    const history=useHistory();
    const User=sessionStorage.getItem("username");
    return(
        <div className="dashboard">
            <nav className="logout">
                <p onClick={()=>history.push('/')}>signout</p>
            </nav>
            <p>Hi {User}, Welcome to Dashboard page</p>
        </div>
    );
}

export default Dashboard;