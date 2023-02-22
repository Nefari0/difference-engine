import { OperatorTable } from "./info.styles";

const ArithmeticTable = ({darkmode}) => {
    return (
        <section>
            <h4>Arithmetic operators:</h4>

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
                        <td>Multiplcation</td>
                        <td>*</td>
                        <td>4*5</td>
                    </tr>

                    <tr>
                        <td>Division</td>
                        <td>/</td>
                        <td>4/5</td>
                    </tr>

                    <tr>
                        <td>Addition</td>
                        <td>+</td>
                        <td>4+5</td>
                    </tr>

                    <tr>
                        <td>Subtraction</td>
                        <td>-</td>
                        <td>4-5</td>
                    </tr>

                    <tr>
                        <td>Exponentiation</td>
                        <td>^</td>
                        <td>x^5</td>
                    </tr>

                    <tr>
                        <td>Square Root</td>
                        <td>sqrt</td>
                        <td>sqrt(x)</td>
                    </tr>
                </tbody>

            </OperatorTable>
        </section>
    )
}

export default ArithmeticTable