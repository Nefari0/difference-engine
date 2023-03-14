// import { ViewContext } from "../../../Context/view.context";
// import { useContext } from "react";
// import { BaseButton, } from "../keypad.styles";
import { NumPad } from "./nums.styles";
import { numdata } from "./nums.data";
import Button from "../Button";

const INPUT_TYPE = {
    mathFunc:'mathfunc',
    radians:'radians',
    degrees:'degrees'
}

export const NumberPad = ({styles,state,setState,inputType}) => {

    const {mathFunc,radians,degrees} = state

    const getInputType = (buttonType = INPUT_TYPE.mathFunc) => ({
        [INPUT_TYPE.mathFunc]:mathFunc,
        [INPUT_TYPE.degrees]:degrees,
        [INPUT_TYPE.radians]:radians
    },[inputType])

    const newCharacter = (inputField,val) => {
        const stringval = inputField.toString()
        const mathArr = stringval.split('')
        const previous = mathArr.splice(0,mathArr.length-1,1).join('')
        return (val.split('').length === 0 ? previous : mathFunc+val)
    }
    const setItems = (e,val) => {

        e.preventDefault()

        setState({
            ...state,
            mathFunc:newCharacter(mathFunc,val)
        })
    }

    const mappedKeys = numdata.map(el => {

        const display = (el.svg ? (el.svg) : (el.val))

        return (
            <Button
                key={el.val}
                onClick={(e) => setItems(e,el.val)}
                styles={el.style}
                text={display}
            />
            // <BaseButton
            //     key={el.val}
            //     onClick={(e) => setItems(e,el.val)}
            //     style={el.style}
            //     darkmode={darkmode}
            // >
            //     <strong>{display}</strong>
            // </BaseButton>
        )
    })

    return (

        <NumPad
            // darkmode={darkmode}
            style={styles}
        >
            {mappedKeys}
        </NumPad>
    )
}