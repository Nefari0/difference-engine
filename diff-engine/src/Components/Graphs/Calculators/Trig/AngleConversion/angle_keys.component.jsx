import { useEffect,useContext } from "react";
import { KeyBox,AllClearButton } from "../../../KeyPad/input.styles";
import { backButton,Book } from "../../../SVG";
import { ViewContext } from "../../../../Context/view.context";
import Button from "../../../KeyPad/Button";
// import InputField from "../../../KeyPad/InputField";
import { NumberPad } from "../../../KeyPad/NumberPad/nums.component";
import { DegreeRadH1 } from "./display.styles";

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

    const {setInformation,darkmode} = useContext(ViewContext)

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

    const input = showDegrees ? "degrees":'radians'

    // -- Copy the converted value to clip board -- //
    const copyVal = () => {
        const value = showDegrees ? (degrees*(Math.PI/180)):(radians*(180/Math.PI))
        navigator.clipboard.writeText(JSON.stringify(value))
        setState({
            ...state,
            noticeContent:` ${value} ${!showDegrees ? "degrees":'radians'} copied to clipboard`
        })
    }

    const changeSign = (e) => {
        e.preventDefault()
        const mathArr = state[input].toString().split('')
        mathArr[0] != '-' ? mathArr.splice(0,0,'-') : mathArr.splice(0,1,'')

        setState({
            ...state,
            [input]:mathArr.join('')
        })
    }

    // console.log('SELECTED INPUT',typeof state[input])

    return (
        <KeyBox>

            <DegreeRadH1
                darkmode={darkmode}
            >
                {showDegrees ? "degrees":"radians"}: {(showDegrees ? degrees : radians).toString().substring(0,6)}
            </DegreeRadH1>

            <NumberPad
                state={state}
                setState={setState}
                inputField={!showDegrees ? "radians":"degrees"}
            />

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

            <Button
                buttonClass={'all_clear'}
                text={'AC'}
                style={{bottom:'-160px',right:'15px'}}
                onClick={(e) => execute(e,(!showDegrees ? "radians":"degrees"),'0')}
            />

            <Button
                styles={{left:'240px',bottom:'-158px',fontSize:'32px'}}
                onClick={(e) => changeSign(e)}
                text={'-'}
                p={'Change sign'}
                buttonClass={'operator'}
            />

        </KeyBox>
    )
}

export default UnitCircle