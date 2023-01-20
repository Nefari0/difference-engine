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
                <p>Millimeter</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${85}px`}}
                onClick={(e) => execute(e,'units','in')}
            >
                <strong>in</strong>
                <p>Inches</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${85 * 2}px`}}
                onClick={(e) => execute(e,'units','ft')}
            >
                <strong>ft</strong>
                <p>Feet</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${85 * 3}px`}}
                onClick={(e) => execute(e,'units','cm')}
            >
                <strong>cm</strong>
                <p>Centimeter</p>
            </BaseButton>
        </>
    )
}

export default LengthKeys