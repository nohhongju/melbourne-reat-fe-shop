import React, { useState } from "react";
import { memberLogin } from "../api";
import Layout from "../containers/Layout";
export default function Login(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {username,password} = inputs;
    
    const handleChange = (e) =>{
        e.preventDefault()
        const{value, id} = e.target;
        setInputs({...inputs, [id]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberLogin({username, password}).then(res => {setResult(res.data)}).catch(err =>console.log(`에러발생 : ${err}`))
    }
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
            <div>{result}</div>
    <div>
        <button >Cancel</button><br />
        <span> Forgot <a>password</a></span><br />
        
    </div>
    </Layout>
}


