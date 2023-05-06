import { KeyBox,AllClearButton } from "../KeyPad/keypad.styles";
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

    const [selection,setSelection] = useState('totalValue')

    useEffect(() => {
        setState({
            ...state,
            displayInput:false,
            mathFunc:'1',
            totalValue:'100',
            percentValue:'50'
        })
    },[])

    const allClear = () => {
        setState({
            ...state,
            totalValue:'',
            percentValue:''
        })
    }

    const changeSign = (e) => {
        e.preventDefault()
        const mathArr = state[selection].split('')
        mathArr[0] != '-' ? mathArr.splice(0,0,'-') : mathArr.splice(0,1,'')

        setState({
            ...state,
            [selection]:mathArr.join('')
        })
    }

    return (
        <KeyBox>
            <NumberPad 
                state={state} 
                setState={setState}
                inputField={selection}
            />

            <Button
                style={{right:'90px'}}
                text={"total value"}
                onClick={(e) => setSelection("totalValue")}
            />

            <Button
                style={{right:'90px',top:'80px'}}
                text={"value"}
                onClick={(e) => setSelection("percentValue")}
            />

            <Button
                style={{right:'265px',bottom:`-195px`,zIndex:'0',fontSize:'32px'}}
                onClick={(e) => changeSign(e)}
                text={'-'}
            />

            <Button
                style={{right:'10px'}}
                text={backButton()}
                onClick={(e) => close(e)}
            />

            <AllClearButton
                style={{left:'0px',bottom:`-195px`,zIndex:'0'}}
                onClick={() => allClear()}
            >
                <strong style={{fontSize:'40px',fontWeight:'200',opacity:'.8'}}>AC</strong>
            </AllClearButton>
        </KeyBox>
    )
}

export default PercentKeys