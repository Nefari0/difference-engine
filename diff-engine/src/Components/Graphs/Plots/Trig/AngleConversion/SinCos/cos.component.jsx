import { CosPart,ThetaOrigin } from "../display.styles"

const Cos = ({radians}) => {

    const rotation = {
        top:'-40px',
        left:'-10px',
        transform: `rotate(180deg)`,
        zIndex:'0'
    }

    return(
        <ThetaOrigin style={Math.cos(parseFloat(radians)) < 0 ? rotation : null}>
            <CosPart radians={radians}></CosPart>
        </ThetaOrigin>
    )
}

export default Cos