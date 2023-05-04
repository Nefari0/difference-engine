import { KeyBox,BaseButton } from "../KeyPad/keypad.styles";
import Button from "../KeyPad/Button";
import { backButton } from "../SVG";
import { NumberPad } from "../KeyPad/NumberPad/nums.component";
import { useEffect,useState } from "react";

const PercentKeys = (props) => {

    const { 
        close,
        setState,
        state,
     } = props

     const [selection,setSelection] = useState('baseNumber')

     useEffect(() => {
        setState({
            ...state,
            displayInput:false,
            mathFunc:'100'
        })
     },[])

    return (
        <KeyBox>
            <NumberPad 
                state={state} 
                setState={setState}
                inputField={selection}
            />

            <Button
                style={{right:'90px'}}
                text={"base number"}
                onClick={(e) => setSelection("baseNumber")}
            />

            <Button
                style={{right:'90px',top:'80px'}}
                text={"percent"}
                onClick={(e) => setSelection("percent")}
            />

            <Button
                style={{right:'90px',top:'160px'}}
                text={"math Func"}
                onClick={(e) => setSelection("mathFunc")}
            />

            <Button
                style={{right:'10px'}}
                text={backButton()}
                onClick={(e) => close(e)}
            />
        </KeyBox>
    )
}

export default PercentKeys