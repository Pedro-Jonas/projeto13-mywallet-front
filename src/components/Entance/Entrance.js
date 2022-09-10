import FormEntrance from "./FormEntrance";
import styled from "styled-components";

export default function Entrance(){
    return(
        <StyledEntrance>
        <div className="header">
            Nova entrada
        </div>
        <FormEntrance/>
        </StyledEntrance>
    );
};

const StyledEntrance = styled.div `
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