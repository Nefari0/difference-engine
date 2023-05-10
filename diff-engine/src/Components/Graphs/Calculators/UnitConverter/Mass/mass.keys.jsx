import Button from "../../../KeyPad/Button"

const vp = 80 // -- Vertical Position

const MassKeys = (props) => {
    
    const { execute } = props

    return (
        <>
            <Button
                style={{right:'80px',zIndex:'1'}}
                onClick={(e) => execute(e,'units','gm')}
                text={'gm'}
                p={'Gram'}
            />

            <Button
                style={{right:'80px',top:`${vp}px`,zIndex:'1'}}
                onClick={(e) => execute(e,'units','oz')}
                text={'oz'}
                p={'Ounce'}
            />

            <Button
                styles={{right:'80px',top:`${vp*2}px`}}
                onClick={(e) => execute(e,'units','lb')}
                text={'lb'}
                p={'Pound'}
            />

            <Button
                style={{right:'80px',top:`${vp*3}px`}}
                onClick={(e) => execute(e,'units','ct')}
                text={'ct'}
                p={'Carat'}
            />

        </>
    )
}

export default MassKeys