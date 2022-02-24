import React, { useState } from "react";
import Layout from "../containers/Layout";

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const {num1, num2, opcode, result} = inputs;
    
    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const res = {num1, num2, opcode} 
        alert(`사용자이름: ${JSON.stringify(res)}`)
    }
    /*const sum = () => {
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
        
    }*/
    return <Layout>
        <form>
        <h1>Calc</h1>
            <label htmlFor=""><b>Num1 </b></label>
            <input type="text" name="num1" onChange={handleChange}/><br />
            <label htmlFor=""><b>Opcode </b></label>
            <select name="opcode" id=""onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
            </select>
            <br />
            <label htmlFor=""><b>Num2 </b></label>
            <input type="text" name="num2" onChange={handleChange}/><br />
            <button onClick={handleClick}>계산하기</button>
        </form>
            <div>결과 : {num1} {opcode} {num2} = {result}</div>
    </Layout>
}