import { UnitsDisplay,UnitsDisplayContainer } from "./unit.styles";

const Units = ({state,setState}) => {

    const { mathFunc,units } = state

    const millimeter = .1
    const centimeters = .01
    const inch = 0.00393701
    const foot = 0.0003281

    const copy = (value) => {
        navigator.clipboard.writeText(value)
        setState({
            ...state,
            alert:`${value} copied to clipboard`
        })
    }

    // --- This function converts all incoming input values into inches, which are then converted into all other values 
    const returnInches = () => {
        if (units === 'in') {
            return (mathFunc)
        } else if (units === 'mm') {
            return ((mathFunc/millimeter) * inch)
        } else if (units === 'ft') {
            return (mathFunc >= 1 ? (mathFunc*12) : (mathFunc/foot*inch))
        } else if (units === 'cm') {
            return ((mathFunc/centimeters) * inch)
        }
    }

    const cm = parseFloat(returnInches()/inch* centimeters).toFixed(10)
    const mm = parseFloat(returnInches()/inch*millimeter).toFixed(10)
    const inches = parseFloat(returnInches()).toFixed(10)
    const ft = parseFloat(returnInches()/inch * foot).toFixed(10)

    console.log(inches)

    return(
        <UnitsDisplayContainer>
            <h1>Unit Converter:</h1>
            <h4>input value:{mathFunc} {units}</h4>
            <UnitsDisplay>
                <thead>
                    <tr>
                        <th>value</th>
                        <th>unit</th>
                    </tr>
                </thead>
                <tbody>
                    {units != 'mm' && <tr onClick={() => copy(mm)}><td>{mm}</td><td>mm</td></tr>}
                    {units != 'cm' && <tr onClick={() => copy(cm)}><td>{cm}</td><td>cm</td></tr>}
                    {units != 'in' && <tr onClick={() => copy(inches)}><td>{inches}</td><td>in</td></tr>}
                    {units != 'ft' && <tr onClick={() => copy(ft)}><td>{ft}</td><td>ft</td></tr>}
                </tbody>
            </UnitsDisplay>
        </UnitsDisplayContainer>
    )
}

export default Units