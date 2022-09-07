import { useContext } from "react";
import ContextLogin from "../../Contexts/ContextLogin";
import { Link } from "react-router-dom";
import StyledForm from "../../Styleds/StyledForm";

export default function FormSignin(){
    const {email, setEmail} = useContext(ContextLogin);
    const {password, setPassword} = useContext(ContextLogin);
    const {setToken} = useContext(ContextLogin);


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
        console.log(email, password);
        if (email !== ""  && password !== ""){
            const login = {
                email: email,
	            password: password,
            }
            console.log(login, setToken)
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