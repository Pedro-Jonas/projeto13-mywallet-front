import styled from "styled-components";
import FormSignup from "./FormSign-up";

export default function Signup(){
    return(
    <SignupStyles>
        <div className="Logo">
            MyWallet
        </div>
        <FormSignup/>
    </SignupStyles>
    );
};

const SignupStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.Logo{
    margin-top: 95px;
    margin-bottom: 24px;
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
}
`;