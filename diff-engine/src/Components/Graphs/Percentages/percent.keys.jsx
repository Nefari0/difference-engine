import { KeyBox,BaseButton } from "../KeyPad/keypad.styles";
import Button from "../KeyPad/Button";
import { backButton } from "../SVG";
// import InputField from "../KeyPad/InputField";
import { NumberPad } from "../KeyPad/NumberPad/nums.component";
import { useEffect,useState } from "react";

const PercentKeys = (props) => {

    const { 
        close,
        setState,
        state,
        // mathFunc,
        // execute,
        inputHandler
     } = props

     const {
        baseNumber,
        percent
     } = state

    //  const inputValues = {baseNumber,percent}
    //  const inputMap = Object.keys(inputValues)
    //  .map((key,i) => {
    //     return (
    //     <InputField
    //         styles={{top:`${(i < 1 ? i : i*60)}px`,fontSize:'6px'}}
    //         key={i}
    //         value={inputValues[key]}
    //         onChange={inputHandler}
    //         i={`${key} = `}
    //         name={key}
    //         inputClass={'small'}
    //     />
    //     )
    //  })

    //  const [localState,setLocalState] = useState({
    //     base:'100',
    //     percent:'50'
    //  })

     useEffect(() => {
        setState({
            ...state,
            displayInput:false,
            mathFunc:'100'
        })
     },[])

    // const inputMap = Object.keys(state).map((key,i) => {
    //     return (
    //         <InputField
    //         styles={{top:`${(i < 1 ? i : i*60)}px`,fontSize:'6px'}}
    //         key={i}
    //         value={state[key]}
    //         onChange={inputHandler}
    //         i={`${key} = `}
    //         name={key}
    //         inputClass={'small'}
    //         />
    //     )
    // })

    return (
        <KeyBox>
            <NumberPad state={state} setState={setState}/>
            {/* {inputMap} */}
            {/* <InputField
                type='text'
                onChange={(e) => inputHandler(e)}
                value={baseNumber}
                name="mathFunc"
                inputClass={'small'}
                i={'Base Number'}
            /> */}

            {/* <InputField
                style={{position:'absolute',top:'90px'}}
                type='text'
                onChange={(e) => inputHandler(e)}
                value={percent}
                name="mathFunc"
                inputClass={'small'}
                i={'Percentage'}
            /> */}

            <Button
                style={{right:'10px'}}
                text={backButton()}
                onClick={(e) => close(e)}
            />
        </KeyBox>
    )
}

export default PercentKeys