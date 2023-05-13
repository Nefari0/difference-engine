import { KeyBox } from "../../KeyPad/input.styles";
import InputField from "../../KeyPad/InputField";
import Button from "../../KeyPad/Button";
import { backButton } from "../../SVG";
import {useEffect} from "react";

const errorMessage = 'Only numbers can be entered into this input field. Note: A decimal point must be present as the first element'

const FractionKeys = (props) => {

    const {
        state,
        setState,
        inputHandler,
        execute,
        close
    } = props

    const { mathFunc } = state

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`.25`,
            displayInput:false,
            polars:false
        })
    },[])

    const input = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        const currentValueArr = value.split('')
        const valString = currentValueArr.slice(1).join('')
        const length = currentValueArr.length
        
        if (length === 0 || isNaN(valString)) {
            execute(e,'noticeContent',errorMessage)
            return
            
        } else {inputHandler(e)}
    }

    return (
        <KeyBox>

            <InputField
                inputClass={'small'}
                type='number'
                onChange={(e) => input(e)}
                value={mathFunc}
                name="mathFunc"
            />

            <Button 
                onClick={(e) => close(e)}
                styles={{right:'10px'}}
                text={backButton()}
            />

        </KeyBox>
    )
}

export default FractionKeys