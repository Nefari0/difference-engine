import { useContext,useState } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox,InfoMessage } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";
import { uturnArrow } from "../../../SVG";
import { InlineMath } from "react-katex";
import { NumberPad } from "../../../KeyPad/NumberPad/nums.component";
import { ValueButtonPad,Label } from "./key.styles";
import RotationController from "./RotationControls/rotation-panel.component";

const LeverageKeys = (props) => {

    const { state,setState } = props

    const { d_e,F_e,leverTotalLength } = state

    const { 
        setCurrentView,
        setDisplayKeymap,
        displayKeymap,
        darkmode,
    } = useContext(ViewContext)

    const [textFieldSelection,setTextFieldSelection] = useState('leverTotalLength')

    return (
        <KeyBox>

            {displayKeymap && 
                <>
                    <InfoMessage 
                        style={{top:'-350px',left:'100px',borderRadius:'20px 0px 20px 20px'}}
                    >
                        <InlineMath>{'F_r'}</InlineMath> = output force (resistance)<br/> 
                    </InfoMessage>

                    <InfoMessage 
                        style={{top:'-450px',left:'150px',borderRadius:'20px 20px 20px 0px'}}
                    >
                        <InlineMath>{'F_e'}</InlineMath> = input force (effort) <br/> 
                    </InfoMessage>
                </>
            }

            <Button 
                styles={{right:'10px',zIndex:'0'}}
                onClick={() => setCurrentView('physics')}
                text={uturnArrow()}
            />

            <Button
                style={{right:'10px',top:'80px',zIndex:'0'}}
                buttonType={'image'}
                onClick={() => setDisplayKeymap(true)}
                text={'?'}
                buttonClass={'help'}
            />

            {/* EDIT VALUES */}
            <ValueButtonPad darkmode={darkmode}>
                
                <Label>edit values:</Label>

                <Button
                    styles={{right:'',zIndex:'3',fontSize:'22px',top:'40px',width:'150px'}}
                    buttonType={'image'}
                    buttonClass={'large'}
                    onClick={() => setTextFieldSelection('F_e')}
                    text={`F_e = ${F_e}`}
                    p={'Force appied (input)'}
                    selected={textFieldSelection === 'F_e'}
                />

                <Button
                    styles={{right:'',zIndex:'2',fontSize:'22px',top:'120px',width:'150px'}}
                    buttonType={'image'}
                    buttonClass={'large'}
                    onClick={() => setTextFieldSelection('d_e')}
                    text={`d_e = ${d_e}`}
                    p={`Distance of input to fulcrum`}
                    selected={textFieldSelection === 'd_e'}
                    error={parseFloat(d_e) === 0 || d_e.length < 1 || isNaN(d_e.split('')[0]) && isNaN(d_e.split('')[1])}
                />

                <Button
                    styles={{right:'',zIndex:'1',fontSize:'22px',top:'200px',width:'150px'}}
                    buttonType={'image'}
                    buttonClass={'large'}
                    onClick={() => setTextFieldSelection('leverTotalLength')}
                    text={`d_e+d_r = ${leverTotalLength}`}
                    p={`Total length of leverbar ${leverTotalLength <= parseFloat(d_e) && 'NOTE: this value must be greater than d_e'}`}
                    selected={textFieldSelection === 'leverTotalLength'}
                    error={parseFloat(leverTotalLength) <= parseFloat(d_e)}
                />
            </ValueButtonPad>

            <NumberPad
                state={state}
                setState={setState}
                inputField={textFieldSelection}
            />

            <RotationController
                state={state}
                setState={setState}
            />

        </KeyBox>
    )
}

export default LeverageKeys