import { useEffect,useState,useContext } from "react";
import { ViewContext } from "../../../Context/view.context";
import { KeyBox,AllClearButton,InfoMessage } from "../../KeyPad/input.styles";
import Button from "../../KeyPad/Button";
import { backButton } from "../../SVG";
import { NumberPad } from "../../KeyPad/NumberPad/nums.component";
import { GuideText } from "./percent.styles";

const PercentKeys = (props) => {

    const { 
        close,
        setState,
        state,
        execute
        } = props

    const {
        setDisplayKeymap,
        displayKeymap,
        darkmode
    } = useContext(ViewContext)

    const [textFieldSelection,setTextFieldSelection] = useState('totalValue')

    useEffect(() => {
        setState({
            ...state,
            displayInput:false,
            totalValue:'',
            partialValue:'',
            polars:false,
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
        <KeyBox darkmode={darkmode}>

            {displayKeymap &&
            <InfoMessage style={{zIndex:'10',top:'-180px',left:'150px',width:'200px',fontSize:'12px'}}>
                Total value and partial value must be non-zero numbers. You can edit these values by selecting the buttons below.
            </InfoMessage>}

            <NumberPad 
                state={state} 
                setState={setState}
                inputField={textFieldSelection}
            />
            {/* EDIT VALUES */}
            <GuideText
                darkmode={darkmode}
            >
                Edit Values:
            </GuideText>

            <Button
                style={{right:'90px',top:'30px',zIndex:'2'}}
                buttonClass={'large'}
                text={"total value"}
                p={'edit total value'}
                onClick={(e) => setTextFieldSelection("totalValue")}
            />

            <Button
                style={{right:'90px',top:'110px',zIndex:'1'}}
                buttonClass={'large'}
                text={"partial value"}
                p={'edit partial value'}
                onClick={(e) => setTextFieldSelection("partialValue")}
            />

            {/* SELECT TYPE OF COMPUTATION */}

            <GuideText 
                darkmode={darkmode}
                style={{top:'190px'}}
            >
                Computation:
            </GuideText>

            <Button
                style={{right:'90px',top:'220px'}}
                text={"percent"}
                p={'select to find value of percentage'}
                buttonClass={'large'}
                onClick={(e) => execute(e,"findPercentValue","percent")}
            />

            <Button
                style={{right:'90px',top:'300px',zIndex:'1'}}
                text={"value"}
                p={'select to find percentage of value'}
                buttonClass={'large'}
                onClick={(e) => execute(e,"findPercentValue","value")}
            />

            <Button
                style={{right:'265px',bottom:`-195px`,zIndex:'1',fontSize:'32px'}}
                onClick={(e) => changeSign(e)}
                text={'-'}
                p={'Change sign'}
                buttonClass={'operator'}
            />

            <Button
                buttonClass={'all_clear'}
                text={'AC'}
                p={'All clear'}
                style={{left:'0px',bottom:`-195px`,zIndex:'1'}}
                onClick={() => allClear()}
            />

            <Button
                style={{right:'10px',top:'30px'}}
                text={backButton()}
                onClick={(e) => close(e)}
                p={'Home'}
            />

            <Button
                styles={{right:'10px',top:`${110}px`,zIndex:'0',fontSize:'32px'}}
                onClick={(e) => setDisplayKeymap(true)}
                buttonType={'image'}
                text={'?'}
                buttonClass={'help'}
            />
        </KeyBox>
    )
}

export default PercentKeys