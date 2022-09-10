import { useState } from "react";
import StyledAdd from "../../Styleds/StyledAdd";

export default function FormEntrance(){
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    function handleForm(e){
        e.preventDefault();
    };
    /*
    function sucess(resposta){
        setToken(resposta.data.token);
        navigate("/hoje")
    };

    function error(){
        alert("Email ou senha inválida");
    }; 
    */
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
                type: "Entrance"
            }
            alert(`${verf} ${verfstr} ${exit}` )
        }
    };
        /*
            console.log(login);
            const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", login);
            request.then((resposta)=> sucess(resposta))
            request.catch(()=> error())
        }
    }*/
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
            Salvar entrada
        </div>
        </div>
	</form>
    </StyledAdd>
    );
};