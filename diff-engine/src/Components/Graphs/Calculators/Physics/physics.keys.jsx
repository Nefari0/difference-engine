import { useContext, useState } from "react";
import { ViewContext } from "../../../Context/view.context";
import Button from "../../KeyPad/Button";
import { KeyBox } from "../../KeyPad/input.styles";
import { backButton } from "../../SVG";

const PhysicsKeys = () => {

    const degrees = 10
    const leverage = '\MA = \\frac{Fb}{Fa} '

    const { setCurrentView,setDisplayKeymap } = useContext(ViewContext)
    
    return (
        <KeyBox>
            <Button
                style={{right:'10px'}}
                text={backButton()}
                onClick={() => setCurrentView(null)}
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
                // buttonType={'image'}
                onClick={() => setCurrentView('leverage')}
                // text={'?'}
                // buttonClass={'image'}
                // text={`\\phase{${degrees.toString().substring(0,3).replace(/^0/, '')}^\\circ}`}
                text={leverage}
                p={'Leverage'}
                buttonType={'image'}
            />


        </KeyBox>
    )
}

export default PhysicsKeys