import { BaseButton, } from "../keypad.styles";
import { NumPad } from "./nums.styles";
import { numdata } from "./nums.data";

export const NumberPad = ({styles,state,setState}) => {

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

    const mappedKeys = numdata.map(el => {

        const display = (el.svg ? (el.svg) : (el.val))

        return (
            <BaseButton
                key={el.val}
                onClick={(e) => setItems(e,el.val)}
                style={el.style}
            >
                <strong>{display}</strong>
            </BaseButton>
        )
    })

    return (

        <NumPad style={styles}>
            {mappedKeys}

            
        </NumPad>
    )
}