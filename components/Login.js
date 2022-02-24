import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Login(){
    const [inputs, setInputs] = useState({})
    const {username,password} = inputs;
    const handleChange = (e) =>{
        e.preventDefault()
        const{value, id} = e.target;
        setInputs({...inputs, [id]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const res = {username, password}
        alert(`사용자이름: ${JSON.stringify(res)}`)
    }
    /*
    const sum = () =>{
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        setUesrname(username)
        setPassword(password)
    }*/
    return <Layout><h1>Login</h1> 
        <form >
            <label><b>Username</b></label><br />
            <input id="username"type="" onChange={handleChange}/><br />
            <label><b>Password</b></label><br />
            <input id="password"type=""onChange={handleChange} /><br />
            <button onClick={handleClick}>Login</button><br />
            <label>
            <input type="" /> Remember me
            </label>
            </form>
            <div>ID : {username} PW : {password} </div>
    <div>
        <button >Cancel</button><br />
        <span> Forgot <a>password</a></span><br />
        
    </div>
    </Layout>
}


