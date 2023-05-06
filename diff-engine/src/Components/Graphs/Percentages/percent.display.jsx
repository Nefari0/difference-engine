import { PercentDisplayContainer } from "./percent.styles";
import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";

const PercentDisplay = ({state}) => {
    
    const { darkmode } = useContext(ViewContext)
    const { percentValue,totalValue} = state

    const percentValNum = parseFloat(percentValue)
    const totalValNum = parseFloat(totalValue)/100

    const result = parseFloat(percentValNum*totalValNum).toFixed(4)

    const isNumber = (param) => {return (param != 'NaN' ? param: 'input a number')} // Force a numerical value

    return(
        <PercentDisplayContainer darkmode={darkmode}>
            <h4>total value {totalValue}</h4>
            <h4>percentage {percentValue}%</h4>
            <strong>{isNumber(result)}</strong>
        </PercentDisplayContainer>
    )
}

export default PercentDisplay