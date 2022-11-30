import { MathComponent } from "mathjax-react";
import { useEffect,useState } from "react";
import { KeyBox,LargeButton,ParamInput,Param,BaseButton,CloseHelp  } from "../../../KeyPad/keypad.styles";
import { backButton } from "../../../SVG";

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

const UnitCircle = ({polarVector,linearVector,execute,inputHandler,state,setState}) => {

    const { degrees,showDegrees,radians,displayDegrees } = state

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

    const close = (e) => {
        e.preventDefault()
        setState({
            ...state,
            displayInput:true,
            currentView:null,
            polars:false,
            mathFunc:'cos(3 * x) + sin(2 * x)',    
            showUnitCircleAngles:false
        })
    }

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

            {!showDegrees ? <Param>
            <i>radians </i>
            <ParamInput
                type='number'
                onChange={(e) => inputHandler(e)}
                value={radians}
                name="radians"
            />
            </Param>
            :
            <Param>
            <i>degrees </i>
            <ParamInput
                type='number'
                onChange={(e) => inputHandler(e)}
                value={degrees}
                name="degrees"
            />
            </Param>}

            <BaseButton
                style={backB}
                onClick={(e) => close(e)}
            >
                {backButton()}
            </BaseButton>

            <BaseButton
                onClick={(e) => execute(e,'showDegrees',true)}
                style={degB}
            >
                degrees
            </BaseButton>

            <BaseButton
                onClick={(e) => execute(e,'showDegrees',false)}
                style={radB}
            >
                radians
            </BaseButton>
            
            <CloseHelp
                onClick={(e) => execute(e,'help',!state.help)}
                style={infoB}
            >
                <strong>?</strong>
            </CloseHelp>

            <BaseButton
                onClick={(e) => execute(e,'showUnitCircleAngles',!state.showUnitCircleAngles)}
                style={toggleUnitCircle}
            >
                angles
            </BaseButton>
            
            <BaseButton
                style={copyButton}
                onClick={() => copyVal()}
            >
                {!showDegrees ? 'copy degrees':'copy radians'}
            </BaseButton>

        </KeyBox>
    )
}

export default UnitCircle