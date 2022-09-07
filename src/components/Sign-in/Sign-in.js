import styled from "styled-components";
import FormSignin from "./FormSign-in";

export default function Login(){
    return(
    <LoginStyles>
        <div className="Logo">
            MyWallet
        </div>
        <FormSignin/>
    </LoginStyles>
    );
};

const LoginStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.Logo{
    margin-top: 159px;
    margin-bottom: 24px;
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
}
`;