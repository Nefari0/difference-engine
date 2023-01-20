import { BaseButton } from "../../KeyPad/keypad.styles";

const MassKeys = (props) => {
    
    const { execute } = props

    return (
        <>
            <BaseButton
                style={{right:'80px'}}
                onClick={(e) => execute(e,'units','gm')}
            >
                <strong>gm</strong>
                <p>Gram</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'85px'}}
                onClick={(e) => execute(e,'units','oz')}
            >
                <strong>oz</strong>
                <p>Ounce</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${85*2}px`}}
                onClick={(e) => execute(e,'units','lb')}
            >
                <strong>lb</strong>
                <p>Pound</p>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:`${85*3}px`}}
                onClick={(e) => execute(e,'units','ct')}
            >
                <strong>ct</strong>
                <p>Carat</p>
            </BaseButton>
        </>
    )
}

export default MassKeys