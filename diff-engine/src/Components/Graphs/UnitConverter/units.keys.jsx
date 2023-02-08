import { backButton } from "../SVG";
import { useEffect,useContext } from "react";
import { BaseButton,KeyBox,TinyButton,LargeButton,AllClearButton } from "../KeyPad/keypad.styles";
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

            <BaseButton
                style={{right:'170px'}}
                onClick={(e) => execute(e,'unitType','Mass')}
            >
                <strong>Mass</strong>
            </BaseButton>

            <BaseButton
                style={{right:'170px',top:`${vp}px`}}
                onClick={(e) => execute(e,'unitType','Length')}
            >
                <strong>Length</strong>
            </BaseButton>

            {/* <BaseButton
                style={{right:'80px',top:'90px'}}
                onClick={(e) => execute(e,'units','in')}
            >
                <h1>in</h1>
            </BaseButton> */}

            {/* <BaseButton
                style={{right:'80px',top:'180px'}}
                onClick={(e) => execute(e,'units','ft')}
            >
                <h1>ft</h1>
            </BaseButton> */}

            {/* <BaseButton
                style={{right:'80px',top:'270px'}}
                onClick={(e) => execute(e,'units','cm')}
            >
                <h1>cm</h1>
            </BaseButton> */}

            <BaseButton
                style={{right:'0px',zIndex:'0'}}
                onClick={(e) => close(e)}
            >
                {backButton()}
            </BaseButton>

            <BaseButton
                style={{right:'0px',top:`${vp}px`,zIndex:'0'}}
                onClick={(e) => setDisplayKeymap(true)}
            >
                <strong style={{fontWeight:'600',opacity:'.6',fontSize:'32px'}}>?</strong>
            </BaseButton>

            <BaseButton
                style={{left:'160px',bottom:`-195px`,zIndex:'0'}}
                onClick={(e) => pasteFromClipboard(e)}
            >
                <strong>paste</strong>
            </BaseButton>

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