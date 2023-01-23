import { useState,useContext } from "react";
import { ViewContext } from "../../../Context/view.context";
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

    const {
        information,
        setInformation
    } = useContext(ViewContext)

    return (
        <DocumentContainer>
            <h1>Information</h1>

            {/* --- DISPLAY --- */}
            {information === 'arith' && <ArithmeticTable />}
            {information === 'trig' && <Trig />}
            {information === 'vars' && <Vars />}
            {information === 'texts' && <Resource />}


            {/* --- BUTTONS --- */}
            <BaseButton
                onClick={() => setInformation('trig')}
                style={{bottom:'10px',left:'10px'}}
            >
                Trig
            </BaseButton>

            <BaseButton
            onClick={() => setInformation('vars')}
                style={{bottom:'10px',left:'90px'}}
            >
                Vars
            </BaseButton>

            <BaseButton
            // onClick={() => setView('arith')}
                onClick={() => setInformation('arith')}
                style={{bottom:'10px',left:'170px'}}
            >
                Arith
            </BaseButton>

            <BaseButton
                onClick={() => setInformation('texts')}
                style={{bottom:'10px',left:'255px'}}
            >
                {Book()}
            </BaseButton>

            <BaseButton
                // onClick={() => setState({...state,help:false})}
                onClick={() => setInformation(null)}
                style={{bottom:'10px',right:'10px'}}
            >
                close
            </BaseButton>

        </DocumentContainer>
    )
}

export default Document