import { KeyBox,BaseButton,LargeButton,Param,ParamInput,CloseHelp } from "../KeyPad/keypad.styles";
import { backButton } from "../SVG";
import { useState,useEffect, useContext } from "react";
import { ViewContext } from "../../Context/view.context";

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
            execute(e,'alert',errorMessage)
            return
            
        } else {inputHandler(e)}
    }

    return (
        <KeyBox>
            <Param>
                <ParamInput
                    type='text'
                    onChange={(e) => input(e)}
                    value={mathFunc}
                    name="mathFunc"
                />
            </Param>
            <CloseHelp
                onClick={(e) => execute(e,'help',!state.help)}
                style={{right:'10px',top:'85px'}}
            >
                <strong>?</strong>
            </CloseHelp>

            <BaseButton 
                onClick={(e) => close(e)}
                style={{right:'10px'}}
            >
                {backButton()}
            </BaseButton>

        </KeyBox>
    )
}

export default FractionKeys