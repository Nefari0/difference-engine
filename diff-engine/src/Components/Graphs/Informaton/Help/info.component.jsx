import { useState,useContext } from "react";
import { ViewContext } from "../../../Context/view.context";
import { DocumentContainer } from "./info.styles";
import Button from "../../KeyPad/Button";
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
        setInformation,
        darkmode,
    } = useContext(ViewContext)

    return (
        <DocumentContainer darkmode={darkmode}>
            <h1>Information</h1>

            {/* --- DISPLAY --- */}
            {information === 'arith' && <ArithmeticTable darkmode={darkmode}/>}
            {information === 'trig' && <Trig darkmode={darkmode}/>}
            {information === 'vars' && <Vars darkmode={darkmode}/>}
            {information === 'texts' && <Resource darkmode={darkmode}/>}


            {/* --- BUTTONS --- */}
            {/* <BaseButton
                onClick={() => setInformation('trig')}
                style={{bottom:'10px',left:'10px'}}
            >
                Trig
            </BaseButton> */}

            <Button
                onClick={() => setInformation('trig')}
                style={{bottom:'10px',left:'10px'}}
                text={'Trig'}
            />

            {/* <BaseButton
            onClick={() => setInformation('vars')}
                style={{bottom:'10px',left:'90px'}}
            >
                Vars
            </BaseButton> */}

            <Button
                onClick={() => setInformation('vars')}
                style={{bottom:'10px',left:'90px'}}
                text={'Vars'}
            />

            {/* <BaseButton
            // onClick={() => setView('arith')}
                onClick={() => setInformation('arith')}
                style={{bottom:'10px',left:'170px'}}
            >
                Arith
            </BaseButton> */}

            <Button
                // onClick={() => setView('arith')}
                onClick={() => setInformation('arith')}
                style={{bottom:'10px',left:'170px'}}
                text={'Arith'}
            />

            {/* <BaseButton
                onClick={() => setInformation('texts')}
                style={{bottom:'10px',left:'255px'}}
            >
                {Book()}
            </BaseButton> */}

            <Button
                onClick={() => setInformation('texts')}
                text={Book()}
                style={{bottom:'10px',left:'255px'}}
            />

            {/* <BaseButton
                // onClick={() => setState({...state,help:false})}
                onClick={() => setInformation(null)}
                style={{bottom:'10px',right:'10px'}}
            >
                close
            </BaseButton> */}

            <Button
                onClick={() => setInformation(null)}
                text={'close'}
                style={{bottom:'10px',right:'10px'}}
            />

        </DocumentContainer>
    )
}

export default Document