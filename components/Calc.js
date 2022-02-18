import React, { useState } from "react";
import Layout from "../containers/Layout";

export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [result,setResult] = useState(0)
    const sum = () => {
        let num1 = document.getElementById('num1').value
        console.log('숫자1 : '+num1)
        let num2 = document.getElementById('num2').value
        console.log('숫자2 : '+num2)
        setNum1(num1)
        setOpcode(document.getElementById('opcode').value)
        setNum2(num2)
        switch(opcode){
            case "+": 
            return setResult(Number(num1) + Number(num2)) 
            case "-": 
            return setResult(Number(num1) - Number(num2))  
            case "*":
            return setResult(Number(num1) * Number(num2)) 
            case "/":
            return setResult(Number(num1) / Number(num2))  
            case "%":
            return setResult(Number(num1) % Number(num2))  
            default:
        } 
        
    }
    return <Layout><h1>Calc</h1>
        <form action="">
            <label htmlFor=""><b>Num1 </b></label>
            <input id="num1"type=""/><br />
            <label htmlFor=""><b>Opcode </b></label>
            <select name="" id="opcode">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
            </select>
            <br />
            <label htmlFor=""><b>Num2 </b></label>
            <input id="num2"type="" /><br />
            <button onClick={()=>{sum()}}>계산하기</button>
        </form>
            <div>결과 : {num1} {opcode} {num2} = {result}</div>
    </Layout>
}