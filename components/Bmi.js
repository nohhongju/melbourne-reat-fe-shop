import React, { useState }from "react";
import Layout from "../containers/Layout";
export default function Bmi(){
    const [name, setName] = useState("")
    const [tall, setTall] = useState(0)
    const [weight, setWeigt] = useState(0)
    const sum = () => {
        let name = document.getElementById('name').value
        let tall = document.getElementById('tall').value
        let weight = document.getElementById('weight').value
        setName(name)
        setTall(tall)
        setWeigt(weight)
    }
    return <Layout><h1>Bmi</h1>
        <div>
            <label htmlFor=""><b>Name </b></label>
            <input id="name"type="" /><br />
            <label htmlFor=""><b>Tall </b></label>
            <input id="tall"type="" /><br />
            <label htmlFor=""><b>Weight </b></label>
            <input id="weight"type="" /><br />
            <button onClick={()=>{sum()}} >확인하기</button>
            <div>이름 : {name} 키 : {tall} 몸무게 : {weight}</div>
        </div>
    </Layout>
}
