import { backButton } from "../SVG";
import { useEffect,useContext } from "react";
import { BaseButton,KeyBox,AllClearButton } from "../KeyPad/keypad.styles";
import Button from "../KeyPad/Button";
import LengthKeys from "./Length/length.keys";
import MassKeys from "./Mass/mass.keys";
import { ViewContext } from "../../Context/view.context";
import { NumberPad } from "../KeyPad/NumberPad/nums.component";

const vp = 80 // -- Vertical Position

const UnitsKeys = (props) => {

    const {
        state,
        close,
        execute,
        setState,
    } = props

    const {unitType} = state

    const {
        setDisplayKeymap,
        displayKeymap
    } = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            mathFunc:``,
            displayInput:false,
            polars:false,
        })
    },[])

    const pasteFromClipboard = (e) => {
        
        navigator.clipboard.readText()
        .then(text => {
                // --- verify that copied items are integers or floats in string format --- //
                try {
                    if (typeof(text) === 'string') {
                        
                            if (text.split('').length <= 30) {
                                setState({
                                    ...state,
                                    mathFunc:text
                                })
                            
                        } else {execute(e,'alert','The value you entered is too long. Enter a value that is less than 30 charecters long')}
                    } else {execute(e,'alert','Invalid input type for this calculation')}
                } catch (error) {
                    console.log(error)
                }
            })
            .catch(err => {
                execute(e,'alert','Failed to read clipboard contents: '+ err);
            });
    }

    return (
        <KeyBox displayKeymap={displayKeymap}>
            
            <NumberPad
                state={state}
                setState={setState}
            />

            {unitType === 'Length' && <LengthKeys execute={execute}/>}
            {unitType === 'Mass' && <MassKeys execute={execute}/>}

            <Button
                style={{right:'170px'}}
                onClick={(e) => execute(e,'unitType','Mass')}
                text={'Mass'}
            />

            <Button
                style={{right:'170px',top:`${vp}px`}}
                onClick={(e) => execute(e,'unitType','Length')}
                text={'Length'}
            />

            <Button
                style={{right:'0px',zIndex:'0'}}
                onClick={(e) => close(e)}
                text={backButton()}
            />

            <Button
                styles={{right:'0px',top:`${vp}px`,zIndex:'0',fontSize:'32px'}}
                onClick={(e) => setDisplayKeymap(true)}
                text={'?'}
            />

            <Button
                style={{left:'160px',bottom:`-195px`,zIndex:'0'}}
                onClick={(e) => pasteFromClipboard(e)}
                text={'paste'}
            />

            <AllClearButton
                style={{left:'0px',bottom:`-195px`,zIndex:'0'}}
                onClick={(e) => execute(e,'mathFunc','')}
            >
                <strong style={{fontSize:'40px',fontWeight:'200',opacity:'.8'}}>AC</strong>
            </AllClearButton>

        </KeyBox>
    )
}

export default UnitsKeys