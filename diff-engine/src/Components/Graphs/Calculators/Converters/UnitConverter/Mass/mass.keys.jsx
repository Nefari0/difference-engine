import Button from "../../../../KeyPad/Button"

const vp = 80 // -- Vertical Position

const MassKeys = (props) => {
    
    const { execute } = props

    return (
        <>
            <Button
                style={{right:'80px',zIndex:'1',fontSize:'22px'}}
                onClick={(e) => execute(e,'units','gm')}
                text={'gm'}
                p={'Gram'}
                buttonClass={'operator'}
            />

            <Button
                style={{right:'80px',top:`${vp}px`,zIndex:'1',fontSize:'22px'}}
                onClick={(e) => execute(e,'units','oz')}
                text={'oz'}
                p={'Ounce'}
                buttonClass={'operator'}
            />

            <Button
                styles={{right:'80px',top:`${vp*2}px`,fontSize:'22px'}}
                onClick={(e) => execute(e,'units','lb')}
                text={'lb'}
                p={'Pound'}
                buttonClass={'operator'}
            />

            <Button
                style={{right:'80px',top:`${vp*3}px`,fontSize:'22px'}}
                onClick={(e) => execute(e,'units','ct')}
                text={'ct'}
                p={'Carat'}
                buttonClass={'operator'}
            />

        </>
    )
}

export default MassKeys