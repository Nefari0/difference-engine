import { OperatorTable } from "./info.styles"
const Trig = ({darkmode}) => {
    return (
        <section>
            <h4>Trig functions:</h4>
            <OperatorTable darkmode={darkmode}>

                <thead>
                    <tr>
                        <th>Operator</th>
                        <th>Symbol</th>
                        <th>Syntax example</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Sine</td>
                        <td>sin</td>
                        <td>sin(x)</td>
                    </tr>

                    <tr>
                        <td>Cosine</td>
                        <td>cos</td>
                        <td>cos(x)</td>
                    </tr>

                    <tr>
                        <td>Tangent</td>
                        <td>tan</td>
                        <td>tan(x)</td>
                    </tr>
                </tbody>
            </OperatorTable>
        </section>
    )
}

export default Trig