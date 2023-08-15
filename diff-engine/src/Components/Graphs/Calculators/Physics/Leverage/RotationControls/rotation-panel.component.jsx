import { RotationControlContainer } from "./rotation-panel.styles";
import Button from "../../../../KeyPad/Button";

const RotationController = ({state,setState}) => {
    const { leverRotation } = state
    const rotations = [-10,-15,-20,-30]
    const rotationMap = rotations.map((el,i) => {
        return (
            <Button
                key={i}
                text={`${Math.abs(-el)}^\\circ`} 
                buttonClass={'tiny'}
                buttonType={'image'}
                onClick={() => setRotation(el)}
                selected={leverRotation === el}
            />
        )
    })
    const setRotation = (param) => {
        setState({
            ...state,
            leverRotation:param
        })
    }
    return (
        <RotationControlContainer>
           {rotationMap}
        </RotationControlContainer>
    )
}

export default RotationController