import { useEffect,useContext } from "react";
import { KeyBox } from "../../../KeyPad/keypad.styles";
import { backButton,Book } from "../../../SVG";
import { ViewContext } from "../../../../Context/view.context";
import Button from "../../../KeyPad/Button";
import InputField from "../../../KeyPad/InputField";
import { NumberPad } from "../../../KeyPad/NumberPad/nums.component";

const backB = {
    right:'15px',

    top:'180px'
}

const degB = {
    right:'15px',
    top:'100px'
}
const radB = {
    right:'15px',
    top:'20px'
}

const infoB = {
    top:'180px',
    right:'95px'
}

const toggleUnitCircle = {
    top:'100px',
    right:'95px'
}

const copyButton = {
    top:'20px',
    right:'95px'
}

const UnitCircle = (props) => {

    const {
        execute,
        inputHandler,
        state,
        setState,
        close
    } = props
    const { degrees,showDegrees,radians } = state

    const {setInformation} = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            polars:true,
            displayInput:false,
            mathFunc:`angles`,
            polarCoords:[],
            cartCoords:[],
        })
    },[])

    // -- Copy the converted value to clip board -- //
    const copyVal = () => {
        const value = showDegrees ? (degrees*(Math.PI/180)):(radians*(180/Math.PI))
        navigator.clipboard.writeText(JSON.stringify(value))
        setState({
            ...state,
            alert:` ${value} ${!showDegrees ? "degrees":'radians'} copied to clipboard`
        })
    }

    return (
        <KeyBox>

            {/* <NumberPad
                state={state}
                setState={setState}
            /> */}

            {!showDegrees ? 
            <InputField
                type='number'
                onChange={(e) => inputHandler(e)}
                value={radians}
                name="radians"
                inputClass={'small'}
                i={'rads = '}
            />
            :
            <InputField
                type='number'
                onChange={(e) => inputHandler(e)}
                value={degrees}
                name="degrees"
                inputClass={'small'}
                i={'degs = '}
            />}

            <Button
                styles={backB}
                onClick={(e) => close(e)}
                text={backButton()}
            />

            <Button
                onClick={(e) => execute(e,'showDegrees',true)}
                style={degB}
                text={'deg'}
            />

            <Button
                onClick={(e) => execute(e,'showDegrees',false)}
                style={radB}
                text={'rad'}
            />
            
            <Button
                onClick={(e) => setInformation('trig')}
                style={infoB}
                text={Book()}
            />

            <Button
                onClick={(e) => execute(e,'showUnitCircleAngles',!state.showUnitCircleAngles)}
                style={toggleUnitCircle}
                text={'unit circle'}
            />
            
            <Button
                style={copyButton}
                onClick={() => copyVal()}
                text={!showDegrees ? 'copy degrees':'copy radians'}
            />

        </KeyBox>
    )
}

export default UnitCircle