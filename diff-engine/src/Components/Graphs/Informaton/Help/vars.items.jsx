import { OperatorTable } from "./info.styles"
import { min,max } from "../../graph.component"

const total = Math.abs(min)+max
const minValue = min/100
const maxValue = max/100

const Vars = ({darkmode}) => {
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