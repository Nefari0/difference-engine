import { useContext } from "react"
import { ViewContext } from "../../../Context/view.context"
// import { EllipseOrigin } from "./ellipse.styles";
import { KeyBox } from "../../KeyPad/input.styles"
import Button from "../../KeyPad/Button"
import { uturnArrow,ExecuteButton } from "../../SVG"

const back = {
    right:'10px',
    top:'85px'
}

const eButton = {
    right:'10px',
    top:'5px',
}

const Ellipse = (props) => {

    const { linearVector } = props

    const { darkmode,setCurrentView } = useContext(ViewContext)

    const h = -5
    const k = 2
    const a = 2
    const b = 4

    const ellipse = `(x-${h})^2/${a}^2 + (y-${k})^2/${b}^2 - 1`

    return (
        <KeyBox style={{color:`${darkmode ? '#fff':'black'}`}}>

            <Button
                style={back}
                onClick={() => setCurrentView('plots')}
                text={uturnArrow()}
            />

            <Button
                style={eButton}
                onClick={() => linearVector(ellipse)}
                text={ExecuteButton()}
            />

        </KeyBox>
    )    
}

export default Ellipse