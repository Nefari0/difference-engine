import { RotationControlContainer } from "./rotation-panel.styles";
import Button from "../../../../KeyPad/Button";

const RotationController = ({state,setState}) => {
    const { leverRotation } = state
    const rotations = [-10,-15,-20,-30]
    const rotationMap = rotations.map(el => {
        return (
            <Button
                text={`${el}^\\circ`} 
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
            {/* <Button
                text={'10^\\circ'} 
                buttonClass={'tiny'}
                buttonType={'image'}
                onClick={() => setRotation(-10)}
                selected={leverRotation === -10}
            />
            <Button
               text={'15^\\circ'} 
               buttonClass={'tiny'}
               buttonType={'image'}
               onClick={() => setRotation(-15)}
            />
            <Button   
                text={'20^\\circ'} 
                buttonType={'image'}
                buttonClass={'tiny'}
                onClick={() => setRotation(-20)}
            />
            <Button
                text={'30^\\circ'} 
                buttonType={'image'}
                buttonClass={'tiny'}
                onClick={() => setRotation(-30)}
           /> */}
           {rotationMap}
        </RotationControlContainer>
    )
}

export default RotationController