import { useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { ButtonPanelContainer,ArrowTip,Pointer } from "./key.styles";
import { InfoMessage } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";

const AdjustmentPanel = (props) => {

    const { execution,inputParam1,inputParam2,text } = props

    const { darkmode } = useContext(ViewContext)

    return (
        <ButtonPanelContainer darkmode={darkmode}>

            <InfoMessage
                style={{
                    borderRadius:'20px 20px 20px 0px',
                    top:'-200px',
                    left:'-50px',
                    width:'90px',
                    boxShadow: 'none',
                    opacity:'.5',
                    fontSize:'12px',
                    fontWeight:'800',
                    color:'black'
                }}
            >
                {text}
            </InfoMessage>

            <Pointer darkmode={darkmode}>
                <ArrowTip></ArrowTip>
            </Pointer>

            <Button
                text={'+'}
                style={{position:'relative',fontSize:'30px'}}
                buttonClass={'large'}
                onClick={() => {execution(inputParam1)}}
            />

            <Button
                text={'-'}
                style={{position:'relative',fontSize:'30px'}}
                buttonClass={'large'}
                onClick={() => {execution(inputParam2)}}
            />

        </ButtonPanelContainer>
    )
}

export default AdjustmentPanel