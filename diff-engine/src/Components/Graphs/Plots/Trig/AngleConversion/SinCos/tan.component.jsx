import { TanLine } from "../display.styles"

const Tan = () => {

    const tanParams = {
        transform:`rotate(90deg)`,
        left:'-95px',
        zIndex:'100000'
    }

    const dot = {
        position:'absolute',
        right:'-5px',
        width:'10px',
        top:'-2.5px',
        height:'10px',
        borderRadius:'50%',
        backgroundColor:'black',
    }

    return (
        <div style={dot}>
            <TanLine style={tanParams}></TanLine>
        </div>
    )
}

export default Tan