import React, { useState }from "react";
import Layout from "../containers/Layout";
import axios from "axios";

export default function Bmi(){
    const [inputs,setInputs] = useState({})
    const {name, weight, height} = inputs;
    
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
            
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        alert(`사용자이름: ${JSON.stringify(bmiRequest)}`)
        /*
            axios.get(`http://localhost:8080/member/bmi/aaa/180.5/80.5`)
             .then((res) => {
                    alert(`답장이 도착했습니다.[내용] ${JSON.stringify(res.data)}`)
             })*/
    }
    /*const sum = () => {
        let name = document.getElementById('name').value
        let height = document.getElementById('height').value
        let weight = document.getElementById('weight').value
        setName(name)
        setHeight(height)
        setWeigt(weight)
    }*/
    return <Layout>
        <form>
        <h1>Bmi</h1>
        <div>
            <label htmlFor=""><b>Name </b></label>
            <input type="text" name="name" onChange={handleChange} /><br />
            <label htmlFor=""><b>Height </b></label>
            <input type="text" name="height" onChange={handleChange} /><br />
            <label htmlFor=""><b>Weight </b></label>
            <input type="text" name="weight" onChange={handleChange} /><br />
            <button onClick={handleClick} >BMI 체크</button>
        </div>
        </form>
    </Layout>
}
