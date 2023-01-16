import { BaseButton } from "../../KeyPad/keypad.styles";
// import { backButton } from "../../SVG";

const LengthKeys = (props) => {

    const { execute,close } = props

    return (
        <>
            <BaseButton
                style={{right:'80px'}}
                onClick={(e) => execute(e,'units','mm')}
            >
                <strong>mm</strong>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'90px'}}
                onClick={(e) => execute(e,'units','in')}
            >
                <strong>in</strong>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'180px'}}
                onClick={(e) => execute(e,'units','ft')}
            >
                <strong>ft</strong>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'270px'}}
                onClick={(e) => execute(e,'units','cm')}
            >
                <strong>cm</strong>
            </BaseButton>
        </>
    )
}

export default LengthKeys