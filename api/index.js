import axios from "axios";
const SERVER = `http://localhost:8080`
export const memberBmi = bmiRequest => axios.post(`${SERVER}/member/bmi`,bmiRequest)
export const memberGrade = gradeRequest => axios.post(`${SERVER}/member/grade`,gradeRequest)
export const memberCalc = CalcRequest => axios.post(`${SERVER}/member/calc`,CalcRequest)
export const memberLogin = loginRequest => axios.post(`${SERVER}/member/login`,loginRequest)
