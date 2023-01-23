import { backButton } from "../SVG";
import { useEffect,useContext } from "react";
import { numdata } from "../KeyPad/NumberPad/nums.data";
import { BaseButton,KeyBox } from "../KeyPad/keypad.styles";
import LengthKeys from "./Length/length.keys";
import MassKeys from "./Mass/mass.keys";
import { ViewContext } from "../../Context/view.context";

const vp = 80 // -- Vertical Position

const UnitsKeys = (props) => {

    const {
        state,
        close,
        execute,
        setState,
    } = props

    const {mathFunc,unitType} = state

    const {
        setDisplayKeymap,
        displayKeymap
    } = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`1`,
            displayInput:false,
            polars:false,
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
                <p>{el.val}</p>
            </BaseButton>
        )
    })

    return (
        <KeyBox displayKeymap={displayKeymap}>
            
            {mappedNumberKeys}

            {unitType === 'Length' && <LengthKeys execute={execute}/>}
            {unitType === 'Mass' && <MassKeys execute={execute}/>}

            <BaseButton
                style={{right:'170px'}}
                onClick={(e) => execute(e,'unitType','Mass')}
            >
                <strong>Mass</strong>
            </BaseButton>

            <BaseButton
                style={{right:'170px',top:`${vp}px`}}
                onClick={(e) => execute(e,'unitType','Length')}
            >
                <strong>Length</strong>
            </BaseButton>

            {/* <BaseButton
                style={{right:'80px',top:'90px'}}
                onClick={(e) => execute(e,'units','in')}
            >
                <h1>in</h1>
            </BaseButton> */}

            {/* <BaseButton
                style={{right:'80px',top:'180px'}}
                onClick={(e) => execute(e,'units','ft')}
            >
                <h1>ft</h1>
            </BaseButton> */}

            {/* <BaseButton
                style={{right:'80px',top:'270px'}}
                onClick={(e) => execute(e,'units','cm')}
            >
                <h1>cm</h1>
            </BaseButton> */}

            <BaseButton
                style={{right:'0px',zIndex:'0'}}
                onClick={(e) => close(e)}
            >
                {backButton()}
            </BaseButton>

            <BaseButton
                style={{right:'0px',top:`${vp}px`,zIndex:'0'}}
                onClick={(e) => setDisplayKeymap(true)}
            >
                <strong style={{fontWeight:'600',opacity:'.6',fontSize:'32px'}}>?</strong>
            </BaseButton>

        </KeyBox>
    )
}

export default UnitsKeys