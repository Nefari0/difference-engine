import { MathComponent } from "mathjax-react";
import { useEffect,useState } from "react";
import { KeyBox,LargeButton,ParamInput,Param,BaseButton  } from "../../../KeyPad/keypad.styles";
// import { } from "../../../graph.styles";
import { backButton } from "../../../SVG";

const backB = {
    right:'0px'
}

const degB = {
    position:'absolute',
    right:'15px',
    top:'120px'
}
const radB = {
    position:'absolute',
    right:'15px',
    top:'200px'
}

const UnitCircle = ({polarVector,linearVector,execute,inputHandler,state,setState}) => {

    const { degrees,showDegrees,radians,displayDegrees } = state

    // const getAngles = () => {
    //     return (displayDegrees ? degrees : radians * (180/Math.PI))
    // }


    useEffect(() => {
        setState({
            ...state,
            polars:true,
            displayInput:false,
            mathFunc:`radians / degrees`,
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

            <LargeButton
                style={backB}
                onClick={(e) => close(e)}
            >
                {backButton()}
            </LargeButton>

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

        </KeyBox>
    )
}

export default UnitCircle