import { ViewContext } from "../../../Context/view.context";
import { useContext } from "react";
import { OperatorPad } from "./nums.styles";
import { opsdata } from "./operators.data";
import Button from "../Button";

export const Operators = ({style,state,setState}) => {

    const {mathFunc} = state

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

    const mappedOperators = opsdata.map(el => {

        const display = (el.svg ? (el.svg) : (el.display))

        return (
            <Button
                key={el.val}
                onClick={(e) => setItems(e,el.val)}
                style={el.style}
                text={display}
                buttonClass={'operator'}
            />

            
        )
    })

    return (

        <OperatorPad>
            {mappedOperators}
        </OperatorPad>
    )
}