import { BaseButton, } from "../keypad.styles";
import { NumPad } from "./nums.styles";
import { numdata } from "./nums.data";

export const NumberPad = ({styles,state,setState}) => {

    const {mathFunc} = state

    const setItems = (e,val) => {

        e.preventDefault()
        setState({
            ...state,
            mathFunc:mathFunc+val
        })
    }

    const mappedKeys = numdata.map(el => {
        const display = (el.svg ? (el.svg) : (el.val))
        const backSpace = () => {
            const mathArr = mathFunc.split('')
            const mathLength = mathArr.length
            return (el.val.split('').length === 0 ? console.log(mathArr) : el.val)
        }

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