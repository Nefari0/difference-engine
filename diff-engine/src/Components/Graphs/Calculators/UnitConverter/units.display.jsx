import { useContext,useEffect } from "react";
import { ViewContext } from "../../../Context/view.context";

import { UnitsDisplay,UnitsDisplayContainer } from "./unit.styles";
import LengthDisplay from "./Length/lengths.display";
import MassDisplay from "./Mass/mass.display";
import TemperatureDisplay from "./Temperature/temp.display";
import Button from "../../KeyPad/Button";

const Units = ({state,setState,execute}) => {

    const { mathFunc,units,unitType } = state

    const { darkmode,setScrollBar } = useContext(ViewContext)

    useEffect(() => {setScrollBar(false)},[])

    const copy = (value,unit) => {
        if (isNumber(value) != 'input a number') {
            navigator.clipboard.writeText(value)
            setState({
                ...state,
                noticeContent:`${value} ${unit} copied to clipboard`
            })
        }
    }
        
    const pasteFromClipboard = (e) => {
        e.preventDefault()
        
        try {

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
        } catch (error) {execute(e,'alert',"Sorry, this function might not be compatible with the browser you're using",error)}

    }

    const isNumber = (param) => {return (param != 'NaN' ? param : 'input a number')}

    return(
        <UnitsDisplayContainer
            darkmode={darkmode}
        >
            <h1>Unit Converter:{unitType}</h1>
            <h4>input value:{mathFunc} {units}</h4>
            <UnitsDisplay
                darkmode={darkmode}
            >
                <thead>
                    <tr>
                        <th>value</th>
                        <th>unit</th>
                    </tr>
                </thead>
                
                    {unitType === 'Length' && <LengthDisplay
                        isNumber={isNumber}
                        copy={copy}
                        state={state}
                        setState={setState}
                    />}

                    {unitType === 'Mass' && <MassDisplay
                        isNumber={isNumber}
                        copy={copy}
                        state={state}
                        setState={setState}
                    />}

                    {unitType === 'Temperature' && <TemperatureDisplay
                        isNumber={isNumber}
                        copy={copy}
                        state={state}
                        setState={setState}
                    />}

            </UnitsDisplay>
            <Button
                text={'paste'}
                styles={{bottom:'0px',left:'0px',width:'75px'}}
                buttonClass={'tiny'}
                onClick={(e) => pasteFromClipboard(e)}
            />
        </UnitsDisplayContainer>
    )
}

export default Units