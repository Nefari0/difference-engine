import { OperatorTable } from "./operators.styles"

const Vars = () => {
    return (
        <section>
            <h4>Default Variables:</h4>
            <OperatorTable>

                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>value</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>x,y,u</td>
                        <td>500 Linearly spaced elements:-250,250 </td>
                    </tr>
                </tbody>
            </OperatorTable>
        </section>
    )
}

export default Vars