import { useEffect } from "react"

const LengthDisplay = (props) => {

    const { state,copy,isNumber,setState } = props
    const { units,mathFunc } = state

    useEffect(() => {
        setState({
            ...state,
            units:'in'
        })
    },[])

    const millimeter = .1
    const centimeters = .01
    const inch = 0.00393701
    const foot = 0.0003281

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

    return (
        <tbody>
            {units !== 'mm' && <tr onClick={() => copy(mm)}><td>{isNumber(mm)}</td><td>mm</td></tr>}    
            {units !== 'cm' && <tr onClick={() => copy(cm)}><td>{isNumber(cm)}</td><td>cm</td></tr>}
            {units !== 'in' && <tr onClick={() => copy(inches)}><td>{isNumber(inches)}</td><td>in</td></tr>}
            {units !== 'ft' && <tr onClick={() => copy(ft)}><td>{isNumber(ft)}</td><td>ft</td></tr>}
        </tbody>
    )
}

export default LengthDisplay