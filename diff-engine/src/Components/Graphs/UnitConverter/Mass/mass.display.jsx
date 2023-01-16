import { useEffect } from "react"

const MassDisplay = (props) => {

    const { state,copy,setState,isNumber } = props
    const { units,mathFunc } = state

    useEffect(() => {
        setState({
            ...state,
            units:'gm'
        })
    },[])

    const fragment = 10 // -- Scales unit
    const ounce = 1
    const gram = 28.34952
    const pound = .0625
    const carat = 141.7476

    const returnOunces = () => {
        if (units === 'oz') {
            return ( mathFunc )
        } else if (units === 'gm') {
            return ((mathFunc/gram))
        } else if (units === 'lb') {
            return (mathFunc/pound)
        } else if (units === 'ct') {
            return (mathFunc/carat)
        }
    }

    const gm = parseFloat(returnOunces() * gram).toFixed(10)
    const oz = parseFloat(returnOunces() * ounce).toFixed(10)
    const lb = parseFloat(returnOunces() * pound).toFixed(10)
    const ct = parseFloat(returnOunces() * carat).toFixed(10)

    return (
        <tbody>
            {units !== 'gm' && <tr onClick={() => copy(gm)}><td>{isNumber(gm)}</td><td>gm</td></tr>}
            {units !== 'oz' && <tr onClick={() => copy(oz)}><td>{isNumber(oz)}</td><td>oz</td></tr>}
            {units !== 'lb' && <tr onClick={() => copy(lb)}><td>{isNumber(lb)}</td><td>lb</td></tr>}
            {units !== 'ct' && <tr onClick={() => copy(ct)}><td>{isNumber(ct)}</td><td>ct</td></tr>}
        </tbody>
    )
}

export default MassDisplay