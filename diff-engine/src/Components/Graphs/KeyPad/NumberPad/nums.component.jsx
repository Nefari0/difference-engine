import { useEffect, useState } from "react";
import { NumPad } from "./nums.styles";
import { numdata } from "./nums.data";
import Button from "../Button";

export const NumberPad = ({styles,state,setState,inputField}) => {

    const [input,setInput] = useState('mathFunc') // -- Selects text input body to be edited

    useEffect(() => {
        if (inputField) {setInput(inputField)}
    },[inputField])

    const newCharacter = (val) => {
        const stringval = state[input].toString()
        const mathArr = stringval.split('')
        const previous = mathArr.splice(0,mathArr.length-1,1).join('')
        return (val.split('').length === 0 ? previous : state[input]+val)
    }

    const setItems = (e,val) => {
        e.preventDefault()
        setState({
            ...state,
            [input]:newCharacter(val)
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
        )
    })

    return (

        <NumPad
            style={styles}
        >
            {mappedKeys}
        </NumPad>
    )
}