import { useState,useEffect,useContext } from "react";
import { KeyBox,Param,ParamInput } from "../../KeyPad/keypad.styles";
// import { ParamInput } from "../../../graph.styles";
import { MathComponent } from "mathjax-react";
import { backButton,ExecuteButton } from "../../SVG";
import { ViewContext } from "../../../Context/view.context";
import Button from "../../KeyPad/Button";

const eButton = {
    right:'10px',
    top:'5px',
}
const back = {
    right:'10px',
    top:'85px'
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

            <Button
                style={eButton}
                onClick={() => linearVector(`exp(-4*log(2)*x^2/${h}^2)`)}
                text={ExecuteButton()}
            />
            {/* </LargeButton> */}

            <Button
                style={back}
                onClick={(e) => close(e)}
                text={backButton()}
            />
            {/* </LargeButton> */}

        </KeyBox>
    )
}

export default Gaussian