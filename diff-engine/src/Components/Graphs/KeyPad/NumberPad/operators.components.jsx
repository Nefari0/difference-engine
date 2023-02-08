import { ViewContext } from "../../../Context/view.context";
import { useContext } from "react";
import { BaseButton, } from "../keypad.styles";
import { OperatorPad } from "./nums.styles";
import { numdata } from "./nums.data";
import { opsdata } from "./operators.data";

export const Operators = ({styles,state,setState}) => {

    const {mathFunc} = state

    const {darkmode} = useContext(ViewContext)

    const setItems = (e,val) => {

        const newCharacter = () => {            
            const mathArr = mathFunc.split('')
            const previous = mathArr.splice(0,mathArr.length-1,1).join('')
            return (val.split('').length === 0 ? previous : mathFunc+val)
        }

        e.preventDefault()

        setState({
            ...state,
            mathFunc:newCharacter()
        })
    }

    const mappedKeys = numdata.map(el => {

        const display = (el.svg ? (el.svg) : (el.val))

        return (
            <BaseButton
                key={el.val}
                onClick={(e) => setItems(e,el.val)}
            >
                <strong>{display}</strong>
            </BaseButton>
        )
    })

    const mappedOperators = opsdata.map(el => {

        const display = (el.svg ? (el.svg) : (el.val))

        return (
            <BaseButton
                key={el.val}
                onClick={(e) => setItems(e,el.val)}
                style={el.style}
                darkmode={darkmode}
            >
                <strong>{display}</strong>
            </BaseButton>
        )
    })

    return (

        <OperatorPad>
            {/* {mappedKeys} */}
            {mappedOperators}
        </OperatorPad>
    )
}