import { useState,useEffect,useContext } from "react";
import { KeyBox,Param,ParamInput } from "../../KeyPad/input.styles";
import { MathComponent } from "mathjax-react";
import { ExecuteButton,uturnArrow } from "../../SVG";
import { ViewContext } from "../../../Context/view.context";
import Button from "../../KeyPad/Button";
import InputField from "../../KeyPad/InputField";

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

    const {darkmode,setCurrentView} = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`y = exp(-4*log(2)*x^2/h^2)`,
            displayInput:false
        })
        linearVector(`exp(-4*log(2)*x^2/${h}^2)`)
    },[])

    return (
        <KeyBox style={{color:`${darkmode ? '#fff':'black'}`}}>

            <InputField
                type='text'
                onChange={(e) => setH(e.target.value)}
                value={h}
                inputClass={'small'}
                name={"h"}
                i={'h = '}
            />

            <Button
                style={eButton}
                onClick={() => linearVector(`exp(-4*log(2)*x^2/${h}^2)`)}
                text={ExecuteButton()}
            />

            <Button
                style={back}
                onClick={() => setCurrentView('plots')}
                text={uturnArrow()}
            />

        </KeyBox>
    )
}

export default Gaussian