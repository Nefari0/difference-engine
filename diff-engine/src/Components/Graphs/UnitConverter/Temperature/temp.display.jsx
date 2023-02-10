import { useEffect } from "react";

const TemperatureDisplay = (props) => {

    const { state,copy,setState,isNumber } = props
    const { units,mathFunc } = state

    useEffect(() => {
        setState({
            ...state,
            units:'celsius'
        })
    },[])

    const celsius = 32
    const fahrenheit = 1

    const returnFahenheit = () => {
        if (units === 'fahrenheit') {
            return (mathFunc)
        }
         else if (units === 'celsius') {
            return (mathFunc*1.8)
        }

    }
    const c = parseFloat((returnFahenheit()-celsius)*.5556).toFixed(5)
    const f = (parseFloat(returnFahenheit()+celsius)).toFixed(5)

    return (
        <tbody>
            {units !== 'celsius' && <tr onClick={() => copy(c)}><td>{isNumber(c)}</td><td>C</td></tr>}
            {units !== 'fahrenheit' && <tr onClick={() => copy(f)}><td>{isNumber(f)}</td><td>F</td></tr>}
        </tbody>
    )
}

export default TemperatureDisplay