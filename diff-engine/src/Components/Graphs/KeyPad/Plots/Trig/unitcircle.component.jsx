import { MathComponent } from "mathjax-react";
import { useEffect,useState } from "react";
import { KeyBox,LargeButton,ParamInput,Param,BaseButton  } from "../../keypad.styles";
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

    
    // const { showRadians } = localState
    const { degrees,showDegrees,radians } = state

    // const [localState,setLocalState] = useState({
    //     radians:.79
    // })

    // const { radians } = localState


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

    // const returnNewRadians = () => {
    //     return 
    // }
    // const radianInput = (e) => {
    //     e.preventDefault()
    //     const {name,value} = e.target
    //     setLocalState({...localState,[name]:value})
    //     var newDegreeVal = radians* (Math.PI/180)
    //     // execute(e,'degrees',newDegreeVal)
    //     inputHandler()
    //     console.log('new degree val',newDegreeVal)
    // }

    const close = (e) => {
        e.preventDefault()
        setState({
            ...state,
            displayInput:true,
            currentView:null,
            polars:false,
        })
        // execute(e,'currentView',null)
    }

    return (
        <KeyBox>

            {!showDegrees ? <Param>
            <i>radians </i>
            <ParamInput
                type='text'
                onChange={(e) => inputHandler(e)}
                value={radians}
                name="radians"
            />
            </Param>
            :
            <Param>
            <i>degrees </i>
            <ParamInput
                type='text'
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