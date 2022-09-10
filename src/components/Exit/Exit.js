import FormExit from "./FormExit";
import styled from "styled-components";

export default function Exit(){
    return(
        <StyledExit>
        <div className="header">
            Nova saída
        </div>
        <FormExit/>
        </StyledExit>
    );
};

const StyledExit = styled.div `
display: flex;
flex-direction: column;
align-items: center;
.header {
    width: 340px;
    margin-top: 25px;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
};
`;

