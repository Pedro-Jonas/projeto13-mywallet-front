import { useContext } from "react";
import ContextLogin from "../../Contexts/ContextLogin";
import { useState } from "react";
import { Link } from "react-router-dom";
import StyledForm from "../../Styleds/StyledForm";

export default function FormSignup(){
    const {email, setEmail} = useContext(ContextLogin);
    const {password, setPassword} = useContext(ContextLogin);
    const {name, setName} = useContext(ContextLogin);
    const [confirmation, setConfirmation] = useState("");

    function handleForm(e){
        e.preventDefault();
    }
    /*
    function sucess(){
        alert("Cadastro realizado com sucesso, vá para tela de login para iniciar");

    }

    function error(){
        alert("Por favor preencha os campos novamente");
    }
    */
    function submit(){
        if (email !== ""  && password !== "" && name !== "" && password === confirmation ){
            const cadastro = {
                email,
	            name,
	            password
            };
            console.log(cadastro);
        } else {
            alert("Por favor preencha os campos novamente");
        };/*
            const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastro);
            request.then(()=> sucess());
            request.catch(()=> error());
        };*/
    }

    return(
        <StyledForm>
        <form onSubmit={handleForm}>
            <div className="inputs">
                <div className="input" >
                    <input type="text" onChange={(e)=> setName(e.target.value)} required  placeholder="Nome" />
                </div> 
                <div className="input">
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} required  placeholder="E-mail" />
                </div>
                <div className="input" >
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} required  placeholder="Senha" />
                </div> 
                <div className="input" >
                    <input type="password" onChange={(e)=> setConfirmation(e.target.value)} required  placeholder="Comfirme a senha" />
                </div> 
            </div>
        <div>
        <div className="play" onClick={()=> submit()}>
            cadastrar
        </div>
        <div className="link">
            <Link to={"/"}>
                Já tem uma conta? Entre agora!  
            </Link>
        </div>
        </div>
	    </form>
        </StyledForm>
    );
};