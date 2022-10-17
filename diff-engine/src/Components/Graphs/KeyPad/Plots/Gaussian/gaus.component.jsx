import { useState,useEffect } from "react";
import { KeyBox,BaseButton,LargeButton,Param,ParamInput } from "../../keypad.styles";
// import { ParamInput } from "../../../graph.styles";
import { MathComponent } from "mathjax-react";
import { backButton } from "../../../SVG";

const eButton = {
    right:'0px'
}
const back = {
    right:'0px',
    bottom:'0px'
}

// const input = {left}

const Gaussian = ({inputHandler,execute,formatFunction,state,linearVector,setState}) => {

    const [h,setH] = useState(.999)

    useEffect(() => {
        setState({...state,mathFunc:`exp(-4*log(2)*x^2/h^2)`})
    },[])

    return (
        <KeyBox>
            <Param>
                <i>h = </i>
                <ParamInput
                    type='text'
                    onChange={(e) => setH(e.target.value)}
                    value={h}
                    name="h"
                />
            </Param>

            <LargeButton
                style={eButton}
                onClick={() => linearVector(`exp(-4*log(2)*x^2/${h}^2)`)}
            >
                Execute
            </LargeButton>

            <LargeButton
                style={back}
                onClick={(e) => execute(e,'currentView',null)}
            >
                {backButton()}
            </LargeButton>

        </KeyBox>
    )
}

export default Gaussian