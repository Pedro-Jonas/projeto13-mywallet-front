import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import ResetStyles from "../assets/ResetStyles";
import ContextLogin from "../Contexts/ContextLogin";
import Signin from "./Sign-in/Sign-in";
import Signup from "./Sign-up/Sign-up";
import Home from "./Home.js/Home";

export default function App(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [token, setToken] = useState("");

    return(
    <>
    <ResetStyles/>
    <AllStyleds>
    <ContextLogin.Provider value={{email, setEmail, password, setPassword, name, setName, token, setToken}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin/>}/> 
                <Route path="/Sign-up" element={<Signup/>}/> 
                <Route path="/Home" element={<Home/>}/> 
            </Routes>
        </BrowserRouter>
    </ContextLogin.Provider>
    </AllStyleds>
    </>
    );
};

const AllStyleds = styled.div`
font-family: 'Raleway', sans-serif;
`;