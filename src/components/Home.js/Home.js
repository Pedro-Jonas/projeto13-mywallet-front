import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import StyledHome from "../../Styleds/StyledHome";
import {BiExit} from "react-icons/bi";
import {CgAdd} from "react-icons/cg";
import {CgRemove} from "react-icons/cg";

export default function Home(){
    const [verif, setVerif] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    useEffect(()=> {
        const request = axios.get("http://localhost:5000/registers", {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
        });
        request.then((res) => {
            setVerif(res.data);
        });
        request.catch((error) => {
            console.error(error)
        });
    }, [token]);
    
    const totalEntrances = verif.filter((element)=>{
        return element.type === "Entrance"
    });

    const totalExits = verif.filter((element)=>{
        return element.type === "Exit"
    });

    function sum(array){
        let acum = 0;
        array.forEach(element => {
            let newvalue = element.value.toString().replace(",", ".")
            acum += parseFloat(newvalue);
        });
        return acum;
    };

    const balance = (sum(totalEntrances) - sum(totalExits)).toFixed(2);

    function NewEntrance(){
        navigate("/Entrance");
    };

    function NewExit(){
        navigate("/Exit");
    };

    function comeBack(){
        navigate("/");
    };
    
    return(
    <StyledHome>
        <div className="header">
            olá, {name}
            <BiExit onClick={()=> comeBack()}/>
        </div>
        {(verif.length > 0)?
        (<div className="recordsvalid ">
        <div className="Allregisters">
            {verif.map((register, index)=>{
            const type = register.type;
            return(
            (type === "Entrance")?
            (<div key={index} className="register entrance">
                <div className="descripition">
                    <p>{register.date}</p>
                    <h1>{register.description}</h1>
                </div>
                <div>
                    <h2>{register.value}</h2>
                </div>
            </div>) : 
            (<div key={index} className="register exit">
                <div className="descripition">
                    <p>{register.date}</p>
                    <h1>{register.description}</h1>
                </div>
                <div>
                    <h2>{register.value}</h2>
                </div>
            </div>)
        );
        })}
        </div>
            <div className="balance">
                <div>
                    Saldo
                </div>
                {balance >= 0?
                (<div className="positive"> 
                    {balance.toString().replace(".",",")}
                </div>
                )
                :
                (<div className="negative">
                    {balance.toString().replace(".",",")}
                </div>
                )}
            </div>
        </div>)
        :(
        <div className="records">
            <p>Não há registros de</p>
            <p>entrada ou saída</p>
        </div>
        )}
        <div className="options">
            <div className="option" onClick={()=> NewEntrance()}>
                <CgAdd className="icon"/>
                <div>
                    <p>Nova</p>
                    <p>entrada</p>
                </div>
            </div>
            <div className="option" onClick={()=> NewExit()}>
                <CgRemove/>
                <div>
                    <p>Nova</p>
                    <p>saída</p>
                </div>
            </div>
        </div>
    </StyledHome>
    );
};