import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [name, setName] = useState("")
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const sum = () =>{
        let name = document.getElementById('name').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
    }
    return<Layout><h1>Grade</h1>
        <div>
            <label htmlFor=""><b>name</b></label>
            <input id="name"type="" /><br />
            <label htmlFor=""><b>kor</b></label>
            <input id="kor"type="" /><br />
            <label htmlFor=""><b>eng</b></label>
            <input id="eng"type="" /><br />
            <label htmlFor=""><b>math</b></label>
            <input id="math"type="" /><br />
            <button onClick={()=>{sum()}}>결과확인</button>
            <div>이름 : {name} 국어 : {kor} 영어 : {eng} 수학 : {math}</div>
            </div>
    </Layout>
}