import { OperatorTable } from "./info.styles"
import { useContext } from "react"
import { ViewContext } from "../../../Context/view.context"

const Vars = ({darkmode}) => {
    const { range } = useContext(ViewContext)
    const { min,max } = range
    const total = Math.abs(min)+max
    const minValue = min/100
    const maxValue = max/100
    return (
        <section>
            <h4>Default Variables:</h4>
            <OperatorTable darkmode={darkmode}>

                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>value</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>x,y,u</td>
                        <td>{total} Linearly spaced elements:{minValue},{maxValue} </td>
                    </tr>
                </tbody>
            </OperatorTable>
        </section>
    )
}

export default Vars