import { useContext, useEffect } from "react";
import { ViewContext } from "../../../Context/view.context";
import Button from "../../KeyPad/Button";
import { KeyBox } from "../../KeyPad/input.styles";
import { backButton } from "../../SVG";

const PhysicsKeys = (props) => {

    const { setState,state,close } = props
    const degrees = 10
    const leverage = '\MA = \\frac{Fb}{Fa} '

    const { setCurrentView,setDisplayKeymap } = useContext(ViewContext)

    useEffect(() => {setState({...state,displayInput:false})},[])
    
    return (
        <KeyBox>
            <Button
                onClick={(e) => close(e)}
                style={{right:'10px'}}
                text={backButton()}
            />

            <Button
                style={{right:'10px',top:'80px'}}
                buttonType={'image'}
                onClick={() => setDisplayKeymap(true)}
                text={'?'}
                buttonClass={'help'}
            />

            <Button
                style={{left:'0px',top:'0px',fontSize:'16px'}}
                onClick={() => setCurrentView('leverage')}
                text={leverage}
                p={'Leverage'}
                buttonType={'image'}
            />


        </KeyBox>
    )
}

export default PhysicsKeys