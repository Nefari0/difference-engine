import { BaseButton } from "../../KeyPad/keypad.styles";
// import { backButton } from "../../SVG";

const vp = 80 // -- Vertical Position

const LengthKeys = (props) => {

    const { execute,close } = props

    return (
        <div>
            <BaseButton
                style={{right:'80px',zIndex:'1'}}
                onClick={(e) => execute(e,'units','mm')}
            >
                <strong>mm</strong>
                <p>Millimeter</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${vp}px`,zIndex:'1'}}
                onClick={(e) => execute(e,'units','in')}
            >
                <strong>in</strong>
                <p>Inches</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${vp * 2}px`}}
                onClick={(e) => execute(e,'units','ft')}
            >
                <strong>ft</strong>
                <p>Feet</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${vp * 3}px`}}
                onClick={(e) => execute(e,'units','cm')}
            >
                <strong>cm</strong>
                <p>Centimeter</p>
            </BaseButton>
        </div>
    )
}

export default LengthKeys