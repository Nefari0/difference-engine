import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";

import { UnitsDisplay,UnitsDisplayContainer } from "./unit.styles";
import LengthDisplay from "./Length/lengths.display";
import MassDisplay from "./Mass/mass.display";
import TemperatureDisplay from "./Temperature/temp.display";

const Units = ({state,setState}) => {

    const { mathFunc,units,unitType } = state

    const { darkmode } = useContext(ViewContext)

    const copy = (value) => {
        if (isNumber(value) != 'input a number') {navigator.clipboard.writeText(value)
        setState({
            ...state,
            alert:`${value} copied to clipboard`
        })}
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
        </UnitsDisplayContainer>
    )
}

export default Units