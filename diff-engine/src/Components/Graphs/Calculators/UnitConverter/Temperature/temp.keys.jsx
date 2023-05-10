import Button from "../../../KeyPad/Button"

const vp = 80 // -- Vertical Position

const TemperatureKeys = ({execute}) => {

    return (
        <>

            <Button
                style={{right:'80px',zIndex:'1'}}
                onClick={(e) => execute(e,'units','celsius')}
                text={'C'}
                p={'celsius'}
            />

            <Button
                style={{right:'80px',zIndex:'1',top:`${vp}px`}}
                onClick={(e) => execute(e,'units','fahrenheit')}
                text={'F'}
                p={'fahrenheit'}
            />

        </>
    )
}

export default TemperatureKeys