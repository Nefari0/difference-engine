import { useEffect,useState,useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { KeyBox,AllClearButton } from "../KeyPad/keypad.styles";
import Button from "../KeyPad/Button";
import { backButton } from "../SVG";
import { NumberPad } from "../KeyPad/NumberPad/nums.component";

const PercentKeys = (props) => {

    const { 
        close,
        setState,
        state,
        execute
        } = props

    const {
        setDisplayKeymap,
    } = useContext(ViewContext)

    const [textFieldSelection,setTextFieldSelection] = useState('totalValue')

    useEffect(() => {
        setState({
            ...state,
            displayInput:false,
            totalValue:'',
            partialValue:''
        })
    },[])

    const allClear = () => {
        setState({
            ...state,
            totalValue:'',
            partialValue:''
        })
    }

    const changeSign = (e) => {
        e.preventDefault()
        const mathArr = state[textFieldSelection].split('')
        mathArr[0] != '-' ? mathArr.splice(0,0,'-') : mathArr.splice(0,1,'')

        setState({
            ...state,
            [textFieldSelection]:mathArr.join('')
        })
    }

    return (
        <KeyBox>
            <NumberPad 
                state={state} 
                setState={setState}
                inputField={textFieldSelection}
            />

            <Button
                style={{right:'90px'}}
                buttonClass={'large'}
                text={"total value"}
                p={'edit total value'}
                onClick={(e) => setTextFieldSelection("totalValue")}
            />

            <Button
                style={{right:'90px',top:'80px'}}
                buttonClass={'large'}
                text={"partial value"}
                p={'edit partial value'}
                onClick={(e) => setTextFieldSelection("partialValue")}
            />

            <Button
                style={{right:'90px',top:'160px'}}
                text={"percent"}
                p={'select to find value of percentage'}
                buttonClass={'large'}
                onClick={(e) => execute(e,"findPercentValue","percent")}
            />

            <Button
                style={{right:'90px',top:'240px',zIndex:'1'}}
                text={"value"}
                p={'select to find percentage of value'}
                buttonClass={'large'}
                onClick={(e) => execute(e,"findPercentValue","value")}
            />

            <Button
                style={{right:'265px',bottom:`-195px`,zIndex:'0',fontSize:'32px'}}
                onClick={(e) => changeSign(e)}
                text={'-'}
            />

            <AllClearButton
                style={{left:'0px',bottom:`-195px`,zIndex:'0'}}
                onClick={() => allClear()}
            >
                <strong style={{fontSize:'40px',fontWeight:'200',opacity:'.8'}}>AC</strong>
            </AllClearButton>

            <Button
                style={{right:'10px'}}
                text={backButton()}
                onClick={(e) => close(e)}
            />

            <Button
                styles={{right:'10px',top:`${80}px`,zIndex:'0',fontSize:'32px'}}
                onClick={(e) => setDisplayKeymap(true)}
                text={'?'}
            />
        </KeyBox>
    )
}

export default PercentKeys