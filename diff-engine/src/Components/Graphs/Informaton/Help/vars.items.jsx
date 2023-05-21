import { OperatorTable } from "./info.styles"

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
                        <td>500 Linearly spaced elements:-2.5,2.5 </td>
                    </tr>
                </tbody>
            </OperatorTable>
        </section>
    )
}

export default Vars