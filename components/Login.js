import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Login(){
    const [username, setUesrname] = useState("")
    const [password, setPassword] = useState(0)
    const sum = () =>{
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        setUesrname(username)
        setPassword(password)
    }
    return <Layout><h1>Login</h1> 
        <div>
            <label><b>Username</b></label><br />
            <input id="username"type="" /><br />
            <label><b>Password</b></label><br />
            <input id="password"type="" /><br />
            <button onClick={()=>(sum())}>Login</button><br />
            <label>
            <input type="" /> Remember me
            </label>
        </div>
    <div>
        <button >Cancel</button><br />
        <span> Forgot <a>password</a></span><br />
        <div>ID : {username} PW : {password} </div>
    </div>
    </Layout>
}


