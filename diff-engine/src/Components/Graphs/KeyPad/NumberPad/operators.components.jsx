import { ViewContext } from "../../../Context/view.context";
import { useContext } from "react";
import { BaseButton, } from "../homekeys.styles";
import { OperatorPad } from "./nums.styles";
import { numdata } from "./nums.data";
import { opsdata } from "./operators.data";
import Button from "../Button";

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

    // const mappedKeys = numdata.map(el => {

    //     const display = (el.svg ? (el.svg) : (el.val))

    //     return (
    //         <Button
    //             buttonClass={'tiny'}
    //             key={el.val}
    //             onClick={(e) => setItems(e,el.val)}
    //             text={display}
    //             styles={el.style}
    //         />

    //     )
    // })

    const mappedOperators = opsdata.map(el => {

        const display = (el.svg ? (el.svg) : (el.val))

        return (
            <Button
                key={el.val}
                onClick={(e) => setItems(e,el.val)}
                styles={el.style}
                text={display}
            />

            
        )
    })

    return (

        <OperatorPad>
            {/* {mappedKeys} */}
            {mappedOperators}
        </OperatorPad>
    )
}