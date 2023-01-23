import { BaseButton } from "../../KeyPad/keypad.styles";

const vp = 80 // -- Vertical Position

const MassKeys = (props) => {
    
    const { execute } = props

    return (
        <>
            <BaseButton
                style={{right:'80px',zIndex:'1'}}
                onClick={(e) => execute(e,'units','gm')}
            >
                <strong>gm</strong>
                <p>Gram</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${vp}px`,zIndex:'1'}}
                onClick={(e) => execute(e,'units','oz')}
            >
                <strong>oz</strong>
                <p>Ounce</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${vp*2}px`}}
                onClick={(e) => execute(e,'units','lb')}
            >
                <strong>lb</strong>
                <p>Pound</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${vp*3}px`}}
                onClick={(e) => execute(e,'units','ct')}
            >
                <strong>ct</strong>
                <p>Carat</p>
            </BaseButton>
        </>
    )
}

export default MassKeys