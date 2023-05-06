import { PercentDisplayContainer } from "./percent.styles";
import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";

const PercentDisplay = ({state}) => {
    
    const { darkmode } = useContext(ViewContext)
    const { percentValue,totalValue} = state

    const percentValNum = parseFloat(percentValue)
    const totalValNum = parseFloat(totalValue)/100

    const valueOfPercentage = parseFloat(percentValNum*totalValNum).toFixed(4) // -- Find value of percentage

    const percentageOfValue = parseFloat(valueOfPercentage/totalValNum).toFixed(4) // -- Finding the percentage of given values

    const isNumber = (param) => {return (param != 'NaN' ? param: 'input a number')} // -- Force a numerical value

    return(
        <PercentDisplayContainer darkmode={darkmode}>
            <h4>total value {totalValue}</h4>
            <h4>percentage {percentValue}%</h4>
            <strong>{isNumber(valueOfPercentage)}</strong>
            <strong>{isNumber(percentageOfValue)}%</strong>
        </PercentDisplayContainer>
    )
}

export default PercentDisplay