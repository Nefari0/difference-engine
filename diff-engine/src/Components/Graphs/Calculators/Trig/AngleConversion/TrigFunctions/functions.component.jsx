import { TrigFunctionDisplay } from "./function.styles";

export const TrigFunctions = (props) => {

    const { degrees,showDegrees,radians,darkmode } = props

    const getTan = () => {
        return (showDegrees ? `${Math.tan(degrees).toFixed(2)}` : `${Math.tan(radians).toFixed(2)}`)
    }

    const getCos= () => {return ( showDegrees ? `- ${Math.cos(degrees).toFixed(2)}` : `${Math.cos(radians).toFixed(2)}`)}

    const getSin = () => {return ( showDegrees ? `${Math.sin(degrees).toFixed(2)}` : `${Math.sin(radians).toFixed(2)}`)}

    return (
        <TrigFunctionDisplay darkmode={darkmode}>
            <li><i>sin {getSin()}</i></li>
            <li><i>cos {getCos()}</i></li>
            <li><i>tan {getTan()}</i></li>
        </TrigFunctionDisplay>
    )
}