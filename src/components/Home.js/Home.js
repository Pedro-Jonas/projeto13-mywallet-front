import { useContext } from "react";
import ContextLogin from "../../Contexts/ContextLogin";
import styled from "styled-components";
import {BiExit} from "react-icons/bi"
import {CgAdd} from "react-icons/cg"
import {CgRemove} from "react-icons/cg"

export default function Home(){
    const {name} = useContext(ContextLogin);
    console.log(name);
    const nome = "Jonas"
    return(
    <StyledHome>
        <div className="header">
            olá, {nome}
            <BiExit/>
        </div>
        <div className="records">
            <p>Não há registros de</p>
            <p>entrada ou saída</p>
        </div>
        <div className="options">
            <div className="option">
                <CgAdd className="icon"/>
                <div>
                    <p>Nova</p>
                    <p>entrada</p>
                </div>
            </div>
            <div className="option">
                <CgRemove/>
                <div>
                    <p>Nova</p>
                    <p>saída</p>
                </div>
            </div>
        </div>
    </StyledHome>
    );
};

const StyledHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.icon{
    font-size: 19px;
}
.header {
    display: flex;
    justify-content: space-between;
    width: 326px;
    padding: 25px 24px 22px 24px;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
};
.records {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 326px;
    height: 446px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #868686;
};
.options{
    display: flex;
    gap: 15px;
    margin-top: 13px;
};
.option{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0 10px 5px;
    background-color: #A328D6;
    width: 155px;
    height: 114px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
};

`;