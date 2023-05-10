import { useEffect,useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { backButton } from "../SVG";
import { NumberPad } from "../KeyPad/NumberPad/nums.component";
import { KeyBox,AllClearButton,InfoMessage } from "../KeyPad/homekeys.styles";
import Button from "../KeyPad/Button";

import TemperatureKeys from "./Temperature/temp.keys";
import LengthKeys from "./Length/length.keys";
import MassKeys from "./Mass/mass.keys";

const vp = 80 // -- Vertical Position

const UnitsKeys = (props) => {

    const {
        state,
        close,
        execute,
        setState,
    } = props

    const {unitType,mathFunc} = state

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

    const changeSign = (e) => {
        e.preventDefault()
        const mathArr = mathFunc.split('')
        mathArr[0] != '-' ? mathArr.splice(0,0,'-') : mathArr.splice(0,1,'')
        execute(e,'mathFunc',mathArr.join(''))
    }

    // const pasteFromClipboard = (e) => {
    //     e.preventDefault()
        
    //     try {

    //         navigator.clipboard.readText()
    //         .then(text => {
    //                 // --- verify that copied items are integers or floats in string format --- //
    //                 try {
    //                     if (typeof(text) === 'string') {
                            
    //                             if (text.split('').length <= 30) {
    //                                 setState({
    //                                     ...state,
    //                                     mathFunc:text
    //                                 })
                                
    //                         } else {execute(e,'alert','The value you entered is too long. Enter a value that is less than 30 charecters long')}
    //                     } else {execute(e,'alert','Invalid input type for this calculation')}
    //                 } catch (error) {
    //                     console.log(error)
    //                 }
    //             })
    //             .catch(err => {
    //                 // console.log('err',err)
    //                 execute(e,'alert','Failed to read clipboard contents: '+ err);
    //             });
    //     } catch (error) {execute(e,'alert',"Sorry, this function might not be compatible with the browser you're using",error)}

    // }

    return (
        
        <KeyBox displayKeymap={displayKeymap}>

        {/* HINT BOX */}
        {displayKeymap && <InfoMessage style={{zIndex:'10',top:'-160px',left:'150px'}}>Click item to copy it's value</InfoMessage>}

            <NumberPad
                state={state}
                setState={setState}
            />

            {unitType === 'Length' && <LengthKeys execute={execute}/>}
            {unitType === 'Mass' && <MassKeys execute={execute}/>}
            {unitType === "Temperature" && <TemperatureKeys execute={execute} />}

            <Button
                style={{right:'160px'}}
                onClick={(e) => execute(e,'unitType','Mass')}
                text={'Mass'}
            />

            <Button
                style={{right:'160px',top:`${vp}px`}}
                onClick={(e) => execute(e,'unitType','Length')}
                text={'Length'}
            />

            <Button
                style={{right:'160px',top:`${vp*2}px`}}
                onClick={(e) => execute(e,'unitType','Temperature')}
                text={'Temp'}
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

            {/* <Button
                buttonClass={'tiny'}
                style={{right:'0px',bottom:`-195px`,zIndex:'0'}}
                onClick={(e) => pasteFromClipboard(e)}
                text={'paste'}
                p={'Paste text from clipboard'}
            /> */}

            <Button
                style={{right:'265px',bottom:`-195px`,zIndex:'0',fontSize:'32px'}}
                onClick={(e) => changeSign(e)}
                text={'-'}
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