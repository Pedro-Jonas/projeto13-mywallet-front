import { useState } from "react";
import StyledAdd from "../../Styleds/StyledAdd";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function FormExit(){
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const token = localStorage.getItem("token");
    const  navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
    };

    function sucess(){
        alert("Registro cadastrado com sucesso");
        navigate("/Home");
    };

    function error(){
        alert("Por favor verique os campos novamente");
    }; 

    function submit(){
        const verfstr = value.toString().includes(',');
        let newvalue = value;
        if (verfstr){
            newvalue = value.replace(',' , '.');
        };
        let verf = parseFloat(newvalue).toFixed(2);

        if (!isNaN(verf)  && description !== ""){
            verf = verf.toString().replace("." , ",");
            const exit = {
                value: verf,
                description,
                type: "Exit"
            };
            const request = axios.post("http://localhost:5000/registers", exit, {
                headers: {
                  'Authorization': `Bearer ${token}` 
                }
            });
            request.then(()=> sucess());
            request.catch(()=> error());
        } else {
            alert("Por favor verique os campos novamente")
        };
    };

    return (
    <StyledAdd>
    <form onSubmit={handleForm}>
        <div className="inputs">
        <div className="input">
            <input type="text" onChange={(e)=> setValue(e.target.value)} required  placeholder="Valor" />
        </div>
        <div className="input" >
            <input type="text" onChange={(e)=> setDescription(e.target.value)} required  placeholder="Descrição" />
        </div>  
        </div>
        <div>
        <div className="play" onClick={()=> submit()}>
            Salvar saída
        </div>
        </div>
	</form>
    </StyledAdd>
    );
};