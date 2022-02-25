import React, { useState } from "react";
import { memberGrade } from "../api";
import Layout from "../containers/Layout";
export default function Grade(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {name, kor, eng, math} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, id} = e.target;
        setInputs({...inputs, [id]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberGrade({name, kor, eng, math}).then( res => {setResult(res.data)}).catch(err => console.log(`에러발생 : ${err}`))
    }

    return<Layout>
        <form>
        <h1>Grade</h1>
            <label htmlFor=""><b>Name</b></label>
            <input id="name"type="" onChange={handleChange}/><br />
            <label htmlFor=""><b>Kor</b></label>
            <input id="kor"type="" onChange={handleChange}/><br />
            <label htmlFor=""><b>Eng</b></label>
            <input id="eng"type="" onChange={handleChange}/><br />
            <label htmlFor=""><b>Math</b></label>
            <input id="math"type="" onChange={handleChange}/><br />
            <button onClick={handleClick}>결과확인</button>
        </form>    
            <div>{result}</div>
    </Layout>
}