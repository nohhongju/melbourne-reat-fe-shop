import React, { useState }from "react";
import Layout from "../containers/Layout";
export default function Counter (){
    const[count, setCount] = useState(0);

    return (<Layout>
    <button onClick={()=>{setCount (count + 1)}}>+</button><br />
    <button onClick={()=>{setCount (count - 1)}} >-</button><br />
    <div>{count}</div>
    </Layout>)
}