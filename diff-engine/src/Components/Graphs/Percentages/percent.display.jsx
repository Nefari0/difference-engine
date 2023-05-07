import { PercentDisplayContainer } from "./percent.styles";
import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";

const PercentDisplay = ({state}) => {
    
    const { darkmode } = useContext(ViewContext)
    const { partialValue,totalValue,findPercentValue} = state

    const percentValNum = parseFloat(partialValue)
    const totalValNum = parseFloat(totalValue)/100 // --- 1 percent value of total value

    const valueOfPercentage = parseFloat(percentValNum*totalValNum).toFixed(4) // -- Find value of percentage

    const percentageOfValue = parseFloat(percentValNum/totalValNum).toFixed(4) // -- Finding the percentage of given values

    const isNumber = (param) => {return (param != 'NaN' ? param: 'input a number')} // -- Force a numerical value

    return(
        <PercentDisplayContainer darkmode={darkmode}>
            <h4>total value {totalValue}</h4>
            <h4>partial value {partialValue}</h4>
            <strong>
                {findPercentValue === 'percent' && isNumber(valueOfPercentage)}
                {findPercentValue === 'value' && isNumber(percentageOfValue)}
            </strong>
        </PercentDisplayContainer>
    )
}

export default PercentDisplay