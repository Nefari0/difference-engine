import Button from "../../../../KeyPad/Button"

const vp = 80 // -- Vertical Position

const MassKeys = (props) => {
    
    const { execute,units } = props

    return (
        <>
            <Button
                style={{right:'80px',zIndex:'1',fontSize:'22px'}}
                onClick={(e) => execute(e,'units','gm')}
                text={'gm'}
                p={'Gram'}
                buttonClass={'operator'}
                selected={units === 'gm'}
            />

            <Button
                style={{right:'80px',top:`${vp}px`,zIndex:'1',fontSize:'22px'}}
                onClick={(e) => execute(e,'units','oz')}
                text={'oz'}
                p={'Ounce'}
                buttonClass={'operator'}
                selected={units === 'oz'}
            />

            <Button
                styles={{right:'80px',top:`${vp*2}px`,fontSize:'22px'}}
                onClick={(e) => execute(e,'units','lb')}
                text={'lb'}
                p={'Pound'}
                buttonClass={'operator'}
                selected={units === 'lb'}
            />

            <Button
                style={{right:'80px',top:`${vp*3}px`,fontSize:'22px'}}
                onClick={(e) => execute(e,'units','ct')}
                text={'ct'}
                p={'Carat'}
                buttonClass={'operator'}
                selected={units === 'ct'}
            />

        </>
    )
}

export default MassKeys