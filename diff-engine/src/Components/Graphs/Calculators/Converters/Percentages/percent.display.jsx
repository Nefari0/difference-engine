import { PercentDisplayContainer,PercentDisplayTable } from "./percent.styles";
import { useContext,useEffect } from "react";
import { ViewContext } from "../../../../Context/view.context";

const PercentDisplay = ({state}) => {
    
    const { darkmode,setScrollBar } = useContext(ViewContext)
    const { partialValue,totalValue,findPercentValue} = state

    const percentValNum = parseFloat(partialValue)
    const totalValNum = parseFloat(totalValue)/100 // --- 1 percent value of total value
    const valueOfPercentage = parseFloat(percentValNum*totalValNum).toFixed(4) // -- Find value of percentage
    const percentageOfValue = parseFloat(percentValNum/totalValNum).toFixed(4) // -- Finding the percentage of given values

    useEffect(() => {setScrollBar(false)},[])

    const isNumber = (param) => {return (param != 'NaN' ? param: 'cannot compute values')} // -- Force a numerical value

    const returnZeros = (param) => { // -- Return message if length < 1 || !'0'
        return (
            param.length < 1 && param != '0' ? 'input a non-zero value' : param
            )
    } 

    return(
        <PercentDisplayContainer darkmode={darkmode}>
            <h1>Percentages:{findPercentValue}</h1>

            <PercentDisplayTable darkmode={darkmode}>
                <thead>
                    <tr><th id={'totalValue'}>total value</th><th>{returnZeros(totalValue)}</th></tr>
                    <tr><td id={'partialValue'}>partial value</td><td>{returnZeros(partialValue)}</td></tr>
                </thead>
                <tbody>
                    {findPercentValue === 'percent' &&
                        <tr>
                            <td>value of percentage:</td>
                            <td> {isNumber(valueOfPercentage)}</td>
                        </tr>
                    }

                    {findPercentValue === 'value' && 
                        <tr>
                            <td>percentage of value:</td>
                            <td>{isNumber(percentageOfValue)}</td>
                        </tr>
                    }
                </tbody>
            </PercentDisplayTable>
            
        </PercentDisplayContainer>
    )
}

export default PercentDisplay