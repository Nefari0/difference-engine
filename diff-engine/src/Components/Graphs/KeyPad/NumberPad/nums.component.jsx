import { ViewContext } from "../../../Context/view.context";
import { useContext } from "react";
import { BaseButton, } from "../keypad.styles";
import { NumPad } from "./nums.styles";
import { numdata } from "./nums.data";
import Button from "../Button";

export const NumberPad = ({styles,state,setState}) => {

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