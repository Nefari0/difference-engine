// import Button from "../../../../KeyPad/Button";
import Button from "../../../KeyPad/Button"

const vp = 80 // -- Vertical Position

const LengthKeys = (props) => {

    const { execute,close } = props

    return (
        <div>
            <Button
                style={{right:'80px',zIndex:'1',fontSize:'22px'}}
                onClick={(e) => execute(e,'units','mm')}
                text={'mm'}
                p={'Millimeter'}
                buttonClass={'operator'}
            />

            <Button
                style={{right:'80px',top:`${vp}px`,zIndex:'1',fontSize:'22px'}}
                onClick={(e) => execute(e,'units','in')}
                text={'in'}
                p={'Inches'}
                buttonClass={'operator'}
            />

            <Button
                style={{right:'80px',top:`${vp * 2}px`,fontSize:'22px'}}
                onClick={(e) => execute(e,'units','ft')}
                text={'ft'}
                p={'Feet'}
                buttonClass={'operator'}
            />

            <Button
                style={{right:'80px',top:`${vp * 3}px`,fontSize:'22px'}}
                onClick={(e) => execute(e,'units','cm')}
                text={'cm'}
                p={'Centimeter'}
                buttonClass={'operator'}
            />

        </div>
    )
}

export default LengthKeys