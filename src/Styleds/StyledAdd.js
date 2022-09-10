import styled from "styled-components";

export default function StyledAdd({children}){
    return(
    <Addstyled>
        {children}
    </Addstyled>);
};

const Addstyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        border: none;
        width: 326px;
        height: 58px;
        border-radius: 5px;
        margin-bottom: 13px;
        background-color: #FFFFFF;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        padding-left: 15px;
        color: #000000;
    }
    .play{
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #A328D6;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 36px;
    }
`;