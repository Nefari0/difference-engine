import { useContext,useState } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox } from "../../../KeyPad/input.styles";
import { NumberPad } from "../../../KeyPad/NumberPad/nums.component";
import Button from "../../../KeyPad/Button";
import { uturnArrow} from "../../../SVG";
import { ValueButtonPad,Label,RelativityInfo } from "./relative.styles";
import { coeffs } from "../../../coefficients";
// import { InfoMessage } from "../../../KeyPad/input.styles";
import { BlockMath } from "react-katex";

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
        darkmode,
        displayKeymap
    } = useContext(ViewContext)

    // Velocity error
    function vError() { return ((observerVelocity.length <= 0 || parseFloat(observerVelocity) <= 0 || observerVelocity >= c) && true ) }

    // Time interval error
    function tError() { return ((timeInterval.length <= 0 || parseFloat(timeInterval) <= 0 )&& true)}

    return (
        <KeyBox>

            {displayKeymap && <RelativityInfo>
                <BlockMath math={`c = \\text{speed of light in miles per second}`} />
                <BlockMath math={`\\Delta(t) = \\text{time interval (in seconds)}`} />
                <BlockMath math={'v = \\text{velocity (in miles per second)}'}/>
                <p>The time dilation equation determines how much time (in seconds) passes for stationary observers relative to observers in motion</p>
                <BlockMath math={`L = \\text{length of object}`} />
                <p>
                    The length contraction equation determines how much shorter an object in motion appears to stationary observers.
                    The length visual displays the percentage an object's length will appear to decrease given it's velocity.
                </p>
            </RelativityInfo>}
            
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
                    styles={{zIndex:'3',fontSize:'22px',width:'150px',top:'120px'}}
                    buttonType={'image'}
                    buttonClass={'large'}
                    onClick={() => setTextFieldSelection('observerVelocity')}
                    text={`v = ${observerVelocity.toString().substring(0,6)}`}
                    p={'observer velocity (v)'}
                    selected={textFieldSelection === 'observerVelocity'}
                    error={vError()}
                />

                <Button
                    styles={{top:'40px',zIndex:'3',fontSize:'22px',width:'150px'}}
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