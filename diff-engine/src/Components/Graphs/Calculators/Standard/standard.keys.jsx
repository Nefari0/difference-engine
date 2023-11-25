import { KeyBox,BaseButton,EqualButton,AllClearButton } from "../../KeyPad/input.styles";
import Button from "../../KeyPad/Button";
import { backButton,Book } from "../../SVG";
import { useEffect,useContext } from "react";
import { NumberPad } from "../../KeyPad/NumberPad/nums.component";
import { Operators } from "../../KeyPad/NumberPad/operators.components";
import { ViewContext } from "../../../Context/view.context";

const numpad = {
    left:'100px'
}

const StandardKeys = (props) => {

    const {
        state,
        setState,
        calculate,
        close
    } = props

    const { mathFunc } = state

    const {
        setInformation,
        darkmode,
        setDisplayKeymap
    } = useContext(ViewContext)

    const execution = (e) => {
        calculate(e,mathFunc)
    }

    const addCharacter = (val) => {setState({...state,mathFunc:mathFunc+val})}

    return (
        <KeyBox>

            <NumberPad
                styles={numpad}
                state={state}
                setState={setState}
            />

            <Operators
                state={state}
                setState={setState}
            />

            <Button
                style={{left:'-5px',bottom:'-115px',fontSize:'40px',width:'100px'}}
                buttonType={'image'}
                buttonClass={'operator'}
                text={'x^y'}
                p={'Exponentiation'}
                onClick={() => addCharacter('^')}
            />

            <Button
                style={{left:'-5px',bottom:'-35px',fontSize:'40px',color:'#f0595f'}}
                buttonType={'image'}
                text={'?'}
                buttonClass={'large'}
                onClick={(e) => setDisplayKeymap(true)}
            />

            <Button
                onClick={(e) => close(e)}
                p={'Home'}
                style={{opacity:'1',right:'0px',top:'80px'}}
                darkmode={darkmode}
                text={backButton()}
            />

            <Button
                onClick={(e) => setInformation('arith')}
                style={{right:'0px'}}
                darkmode={darkmode}
                text={Book()}
                p={'Documentation'}
            />

            <Button
                onClick={() => addCharacter(')')}
                text={')'}
                styles={{fontSize:'32px',right:'0px',top:'240px'}}
                buttonClass={'operator'}
            />
            <Button
                onClick={() => addCharacter('(')}
                text={'('}
                styles={{fontSize:'32px',right:'0px',top:'160px'}}
                buttonClass={'operator'}
            />

            <Button
                text={'='}
                style={{left:'-5px'}}
                onClick={(e) => execution(e)}
                buttonClass={'equal'}
                p={'Calculate'}
            />

            {/* --- CLEAR BUTTON --- */}
            <Button
                buttonClass={'all_clear'}
                style={{left:'-5px',top:'80px'}}
                text={'AC'}
                p={'All clear'}
                onClick={() => setState({...state,mathFunc:'',calculation:'0'})}
            />

        </KeyBox>
    )
}

export default StandardKeys