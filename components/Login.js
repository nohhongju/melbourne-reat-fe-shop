import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Login(){
    const [count, setCount] = useState(0)
    return <Layout><h1>Login</h1>
    <form> 
        <div>
            <label><b>Username</b></label><br />
            <input type="" /><br />
            <label><b>Password</b></label><br />
            <input type="" /><br />
            <button>Login</button><br />
            <label>
            <input type="" /> Remember me
            </label>
        </div>
    <div>
        <button>Cancel</button><br />
        <span> Forgot <a>password</a></span>
    </div>
    </form>
    </Layout>
}


