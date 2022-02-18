
import React from "react";
import { useRoutes } from "react-router-dom";
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Counter from "./components/Counter";
import Grade from "./components/Grade";
import Login from "./components/Login";
import Home from "./pages/Home";


export default function App(){
  return useRoutes([
    {path: "/", element: <Home/>},
    {path: "bmi", element: <Bmi/>},
    {path: "calc", element: <Calc/>},
    {path: "grade", element: <Grade/>},
    {path: "login", element: <Login/>},
    {path: "counter", element: <Counter/>}
  ]);
}