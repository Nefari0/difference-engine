import { useState } from "react";
import { DocumentContainer } from "./operators.styles";
import { BaseButton } from "../../KeyPad/keypad.styles";
import { OperatorTable } from "./operators.styles";
import Trig from "./trig.items";
import Vars from "./vars.items";
import ArithmeticTable from "./arithmetic.items";

const  Document = ({setState,state}) => {

    const [view,setView] = useState('vars')

    return (
        <DocumentContainer>
            <h1>Information</h1>

            {/* --- DISPLAY --- */}
            <ArithmeticTable />
            {view === 'trig' && <Trig />}
            {view === 'vars' && <Vars />}


            {/* --- BUTTONS --- */}
            <BaseButton
            onClick={() => setView('trig')}
                style={{bottom:'10px',left:'10px'}}
            >
                Trig
            </BaseButton>

            <BaseButton
            onClick={() => setView('vars')}
                style={{bottom:'10px',left:'100px'}}
            >
                Variables
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