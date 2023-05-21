import { useContext } from "react"
import { TanLine } from "../display.styles"

import { ViewContext } from "../../../../../Context/view.context"

const Tan = () => {

    const { darkmode } = useContext(ViewContext)

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
        backgroundColor:`${darkmode ? '#fff':'#555'}`,
    }

    return (
        <div style={dot}>
            <TanLine style={tanParams} darkmode={darkmode}></TanLine>
        </div>
    )
}

export default Tan