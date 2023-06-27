import {useEffect,useContext} from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox } from "../../../KeyPad/input.styles";
import InputField from "../../../KeyPad/InputField";
import Button from "../../../KeyPad/Button";
import { uturnArrow } from "../../../SVG";

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

    const { setCurrentView } = useContext(ViewContext)

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
                onClick={() => setCurrentView('converters')}
                styles={{right:'10px'}}
                text={uturnArrow()}
            />

        </KeyBox>
    )
}

export default FractionKeys