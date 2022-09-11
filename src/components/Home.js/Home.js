import { useContext } from "react";
import ContextLogin from "../../Contexts/ContextLogin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import StyledHome from "../../Styleds/StyledHome"
import {BiExit} from "react-icons/bi"
import {CgAdd} from "react-icons/cg"
import {CgRemove} from "react-icons/cg"



export default function Home(){
    const {name} = useContext(ContextLogin);
    const {token} = useContext(ContextLogin);
    const [verif, setVerif] = useState([]);
    const navigate = useNavigate();

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
    
    /*  
    let verif = [{value:"98,90" , type: "Entrance", decription: "salário", _Id: "7267764", date: "26/09"}, 
    {value: "122,67" , type: "Exit", decription: "almoço", _Id: "726777664", date: "29/09"},
    {value:"98,90" , type: "Entrance", decription: "salário", _Id: "726776764", date: "26/09"},
    {value:"98,90" , type: "Entrance", decription: "salário", _Id: "726776564", date: "26/09"}, 
    {value:"98,90" , type: "Entrance", decription: "salário", _Id: "7264227764", date: "26/09"},
    {value: "122,67" , type: "Exit", decription: "almoço", _Id: "72677127664", date: "29/09"},
    {value: "122,67" , type: "Exit", decription: "almoço", _Id: "726709177664", date: "29/09"},
    {value: "122,67" , type: "Exit", decription: "almoço", _Id: "726712377664", date: "29/09"},
    {value: "122,67" , type: "Exit", decription: "almoço", _Id: "7267112477664", date: "29/09"},
    {value: "122,67" , type: "Exit", decription: "almoço", _Id: "726764277664", date: "29/09"},
    {value: "122,67" , type: "Exit", decription: "almoço", _Id: "71267776644", date: "29/09"},
    {value: "122,67" , type: "Exit", decription: "almoço", _Id: "72617776664", date: "29/09"}
    ];
    */
    const totalEntrances = verif.filter((element)=>{
        return element.type === "Entrance"
    })

    const totalExits = verif.filter((element)=>{
        return element.type === "Exit"
    })

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
            {verif.map((register)=>{
            const type = register.type;
            return(
            (type === "Entrance")?
            (<div key={register._Id} className="register entrance">
                <div className="descripition">
                    <p>{register.date}</p>
                    <h1>{register.description}</h1>
                </div>
                <div>
                    <h2>{register.value}</h2>
                </div>
            </div>) : 
            (<div key={register._Id} className="register exit">
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