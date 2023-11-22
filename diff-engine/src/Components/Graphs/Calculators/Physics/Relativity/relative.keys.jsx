import { useContext,useState } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox } from "../../../KeyPad/input.styles";
import { NumberPad } from "../../../KeyPad/NumberPad/nums.component";
import Button from "../../../KeyPad/Button";
import { uturnArrow} from "../../../SVG";
import { ValueButtonPad,Label } from "./relative.styles";
import { coeffs } from "../../../coefficients";

const RelativityKeyPad = (props) => {

    // const c = 186000 // Speed of light
    const { state,setState } = props
    const { timeDilationSpeed } = state
    const { c_2,c_1 } = coeffs
    const c = (timeDilationSpeed === 'mps' ? c_2 : c_1)
    const { observerVelocity,timeInterval } = state

    const [textFieldSelection,setTextFieldSelection] = useState('observerVelocity')

    const {
        setCurrentView,
        setDisplayKeymap,
        darkmode
    } = useContext(ViewContext)

    // Velocity error
    function vError() { return ((observerVelocity.length <= 0 || parseFloat(observerVelocity) <= 0 || observerVelocity >= c) && true ) }

    // Time interval error
    function tError() { return ((timeInterval.length <= 0 || parseFloat(timeInterval) <= 0 )&& true)}

    return (
        <KeyBox>
            
            <NumberPad 
                state={state}
                setState={setState}
                inputField={textFieldSelection}
            />

            <Button
                text={uturnArrow()}
                styles={{right:'0px'}}
                onClick={() => setCurrentView('physics')}
            />

            <Button
                style={{right:'0px',top:'80px'}}
                buttonType={'image'}
                onClick={() => setDisplayKeymap(true)}
                text={'?'}
                buttonClass={'help'}
            />

            <ValueButtonPad darkmode={darkmode}>

                <Label>edit values</Label>

                <Button
                    styles={{right:'',zIndex:'3',fontSize:'22px',top:'40px',width:'150px'}}
                    buttonType={'image'}
                    buttonClass={'large'}
                    onClick={() => setTextFieldSelection('observerVelocity')}
                    text={`v = ${observerVelocity}`}
                    p={'observer velocity (v)'}
                    selected={textFieldSelection === 'observerVelocity'}
                    error={vError()}
                />

                <Button
                    styles={{right:'',zIndex:'3',fontSize:'22px',top:'120px',width:'150px'}}
                    buttonType={'image'}
                    buttonClass={'large'}
                    onClick={() => setTextFieldSelection('timeInterval')}
                    text={`\\Delta(t) = ${timeInterval}`}
                    p={'time interval'}
                    selected={textFieldSelection === 'timeInterval'}
                    error={tError()}
                />
                
            </ValueButtonPad>

        </KeyBox>
    )
}

export default RelativityKeyPad