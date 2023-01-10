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

// const input = {left}

const Gaussian = ({inputHandler,execute,formatFunction,state,linearVector,setState}) => {

    const [h,setH] = useState(.999)

    const {setCurrentView} = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`y = exp(-4*log(2)*x^2/h^2)`,
            displayInput:false
        })
    },[])

    const goHome = (e) => {
        e.preventDefault()
        setState({
            ...state,
            mathFunc:'x^2',
            displayInput:true,
            currentView:null
        })
        setCurrentView(null)
    }

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
                {ExecuteButton()}
            </LargeButton>

            <LargeButton
                style={back}
                onClick={(e) => goHome(e)}
            >
                {backButton()}
            </LargeButton>

        </KeyBox>
    )
}

export default Gaussian