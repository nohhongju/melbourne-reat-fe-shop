import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs;
    const handleChange = (e) =>{
        e.preventDefault()
        const{value, id} = e.target;
        setInputs({...inputs, [id]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const res = {name, kor, eng, math}
        alert(`사용자이름: ${JSON.stringify(res)}`)
    }
   /*
    const sum = () =>{
        let name = document.getElementById('name').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
    }*/
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
            <div>이름 : {name} 국어 : {kor} 영어 : {eng} 수학 : {math}</div>
    </Layout>
}