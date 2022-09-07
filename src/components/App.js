import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import ResetStyles from "../assets/ResetStyles";
import ContextLogin from "../Contexts/ContextLogin";
import Signin from "./Sign-in/Sign-in";

export default function App(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    return(
    <>
    <ResetStyles/>
    <AllStyleds>
    <ContextLogin.Provider value={{email, setEmail, password, setPassword, token, setToken}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin/>}/> 
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