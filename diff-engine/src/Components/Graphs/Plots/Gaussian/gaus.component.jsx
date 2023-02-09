import { useState,useEffect,useContext } from "react";
import { KeyBox,BaseButton,LargeButton,Param,ParamInput } from "../../KeyPad/keypad.styles";
// import { ParamInput } from "../../../graph.styles";
import { MathComponent } from "mathjax-react";
import { backButton,ExecuteButton } from "../../SVG";
import { ViewContext } from "../../../Context/view.context";

const eButton = {
    right:'10px',
    top:'5px'
}
const back = {
    right:'10px',
    bottom:'-15px'
}

const Gaussian = (props) => {

    const {
        inputHandler,
        execute,
        formatFunction,
        state,
        linearVector,
        setState,
        close
    } = props
    const [h,setH] = useState(.999)

    const {darkmode} = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`y = exp(-4*log(2)*x^2/h^2)`,
            displayInput:false
        })
    },[])

    return (
        <KeyBox style={{color:`${darkmode ? '#fff':'black'}`}}>
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
                {ExecuteButton()}
            </LargeButton>

            <LargeButton
                style={back}
                onClick={(e) => close(e)}
            >
                {backButton()}
            </LargeButton>

        </KeyBox>
    )
}

export default Gaussian