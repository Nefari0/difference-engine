import { backButton } from "../SVG";
import { useEffect } from "react";
import { numdata } from "../KeyPad/NumberPad/nums.data";
import { BaseButton,KeyBox } from "../KeyPad/keypad.styles";

const UnitsKeys = (props) => {

    const {
        state,
        close,
        execute,
        setState,
    } = props

    const {mathFunc} = state

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`1`,
            displayInput:false,
            polars:false
        })
    },[])

    const setItems = (e,val) => {

        const mathArr = mathFunc.split('')
        const findDecimalPoint = mathArr.filter(el => {return (el === '.')}) // -- Can't add more than one decimal point

        const newCharacter = () => {            
            const previous = mathArr.splice(0,mathArr.length-1,1).join('')

            return (val.split('').length === 0 ? previous : mathFunc+val)
        }

        e.preventDefault()

        if (val != findDecimalPoint[0]) {
            setState({
                ...state,
                mathFunc:newCharacter()
            })
        }
        
    }

    const mappedNumberKeys = numdata.map((el,i) => {

        const display = (el.svg ? (el.svg) : (el.val))
        return (
            !el.operator && 
            <BaseButton
                key={i}
                style={el.style}
                onClick={(e) => setItems(e,el.val)}
            >
                <strong>{display}</strong>
            </BaseButton>
        )
    })

    return (
        <KeyBox>
            
            {mappedNumberKeys}

            <BaseButton
                style={{right:'80px'}}
                onClick={(e) => execute(e,'units','mm')}
            >
                <h1>mm</h1>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'90px'}}
                onClick={(e) => execute(e,'units','in')}
            >
                <h1>in</h1>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'180px'}}
                onClick={(e) => execute(e,'units','ft')}
            >
                <h1>ft</h1>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'270px'}}
                onClick={(e) => execute(e,'units','cm')}
            >
                <h1>cm</h1>
            </BaseButton>

            <BaseButton
                style={{right:'0px'}}
                onClick={(e) => close(e)}
            >
                {backButton()}
            </BaseButton>

        </KeyBox>
    )
}

export default UnitsKeys