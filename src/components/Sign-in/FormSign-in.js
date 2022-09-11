import { useContext } from "react";
import ContextLogin from "../../Contexts/ContextLogin";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StyledForm from "../../Styleds/StyledForm";

export default function FormSignin(){
    const {email, setEmail} = useContext(ContextLogin);
    const {password, setPassword} = useContext(ContextLogin);
    const {setToken} = useContext(ContextLogin);
    const {setName} = useContext(ContextLogin);
    const  navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
    };

    function sucess(resposta){
        console.log(resposta.data)
        setToken(resposta.data.token);
        setName(resposta.data.name);
        navigate("/Home")
    };

    function error(){
        alert("Por favor preencha os campos novamente");
    }; 

    function submit(){
        if (email !== ""  && password !== ""){
            const login = {
                email,
	            password
            };
            const request = axios.post("http://localhost:5000/sign-in", login);
            request.then((resposta)=> sucess(resposta))
            request.catch(()=> error())
        } else {
            alert("Por favor preencha os campos novamente");
        };
    };

    return (
    <StyledForm>
    <form onSubmit={handleForm}>
        <div className="inputs">
        <div className="input">
            <input type="email" onChange={(e)=> setEmail(e.target.value)} required  placeholder="E-mail" />
        </div>
        <div className="input" >
            <input type="password" onChange={(e)=> setPassword(e.target.value)} required  placeholder="Senha" />
        </div>  
        </div>
        <div>
        <div className="play" onClick={()=> submit()}>
            Entrar
        </div>
        <div className="link">
            <Link to={"/Sign-up"}>
                Primeira vez? Cadastre-se!
            </Link>
        </div>
        </div>
	</form>
    </StyledForm>
    );
};