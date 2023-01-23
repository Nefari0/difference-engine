import { useState } from "react";
import { DocumentContainer } from "./info.styles";
import { BaseButton } from "../../KeyPad/keypad.styles";
import { OperatorTable } from "./info.styles";
import Trig from "./trig.items";
import Vars from "./vars.items";
import Resource from "./resource.items";
import ArithmeticTable from "./arithmetic.items";
import { Book } from "../../SVG";

const  Document = ({setState,state,selection}) => {

    const [view,setView] = useState('arith')

    return (
        <DocumentContainer>
            <h1>Information</h1>

            {/* --- DISPLAY --- */}
            {view === 'arith' && <ArithmeticTable />}
            {view === 'trig' && <Trig />}
            {view === 'vars' && <Vars />}
            {view === 'texts' && <Resource />}


            {/* --- BUTTONS --- */}
            <BaseButton
            onClick={() => setView('trig')}
                style={{bottom:'10px',left:'10px'}}
            >
                Trig
            </BaseButton>

            <BaseButton
            onClick={() => setView('vars')}
                style={{bottom:'10px',left:'90px'}}
            >
                Vars
            </BaseButton>

            <BaseButton
            onClick={() => setView('arith')}
                style={{bottom:'10px',left:'170px'}}
            >
                Arith
            </BaseButton>

            <BaseButton
            onClick={() => setView('texts')}
                style={{bottom:'10px',left:'255px'}}
            >
                {Book()}
            </BaseButton>

            <BaseButton
                style={{bottom:'10px',right:'10px'}}
                onClick={() => setState({...state,help:false})}
            >
                close
            </BaseButton>

        </DocumentContainer>
    )
}

export default Document