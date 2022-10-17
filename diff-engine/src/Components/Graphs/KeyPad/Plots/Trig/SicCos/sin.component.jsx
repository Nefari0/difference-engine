import { ThetaOrigin,SinPart } from "../display.styles"

const Sin = ({radians}) => {

    console.log('here are the radians',Math.sin(parseFloat(radians)))

    const rotation = {
        top:'-40px',
        left:'-10px',
        transform: `rotate(180deg)`,
        zIndex:'0'
    }

    return(
        <ThetaOrigin style={Math.sin(parseFloat(radians)) < 0 ? rotation : null}>
            <SinPart radians={parseFloat(radians)}></SinPart>
        </ThetaOrigin>
    )
}

export default Sin