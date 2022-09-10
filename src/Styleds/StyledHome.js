import styled from "styled-components";

export default function StyledForm({children}){
    return(
        <StyledHome>
            {children}
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
.recordsvalid {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 326px;
    height: 446px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: black;
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
    border-radius: 5px;
    padding: 10px 0 10px 5px;
    background-color: #A328D6;
    width: 152px;
    height: 114px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
};

.Allregisters{
    height: 415px;
    overflow: scroll;
}
.register{
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
    padding: 0 12px 0 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
}
.descripition{
    display: flex;
    gap: 10px;
};
.register p{
    color: #C6C6C6;
};

.register h1{
    color: #000000;
};

.entrance h2{
    color: #03AC00;
};

.exit h2{
    color: #C70000;
};

.balance{
    display: flex;
    justify-content: space-between;
    padding: 0 12px 0 12px;
};

.positive{
    color: #03AC00;
}

.negative{
    color: #C70000;
}

.exit{
    margin-top: 25px;
    padding-left: 12px;
};

`;
