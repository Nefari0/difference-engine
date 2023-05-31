import { useContext } from "react"
import { ViewContext } from "../../../Context/view.context"
import { ParabOrigin,ParabLegend } from "./parab.styles"

const ParabolaDisplay = (props) => {

    const { darkmode } = useContext(ViewContext)

    const {
        xAspect,
        yAspect,
        otherPlots
    } = props
    
    const otherPlotsMap = otherPlots.map((el,i) => {
        const parameters = {
            left:`${xAspect * el[0]}px`,
            bottom:`${yAspect * el[1]}px`,

            backgroundColor:`${el[2] ? el[2] : 'red'}`,

            width:`${el[3] ? el[3]:'10'}px`,

            height:`${el[4] ? el[4]:'10'}px`,

            borderRadius:`${el[5] ? el[5] : '50'}%`,
            
            position:'absolute',
            transition: "all 1000ms",
            zIndex:'1'
        }
        return (
            <span key={i} style={parameters}></span>
        )
    })

    return (
        <ParabOrigin>
            <ParabLegend darkmode={darkmode}>
                <ul>
                    <li>
                        <span style={{borderRadius:'50%',backgroundColor:'blue'}}></span>
                        <i>Focus</i>
                    </li>

                    <li>
                        <span style={{borderRadius:'50%',backgroundColor:'green'}}></span>
                        <i>Vertex</i>
                    </li>

                    <li>
                        <span style={{left:'-5px',width:'25px',height:'5px',backgroundColor:'orange'}}></span>
                        <i>Directrix</i>
                    </li>

                    <li>
                        <span 
                            style={{
                                left:'-5px',
                                width:'25px',
                                height:'5px',
                                backgroundColor:`${!darkmode ? 'red' : 'white'}`
                            }}
                        ></span>
                        <i>Parabola</i>
                    </li>
                </ul>
            </ParabLegend>
            {otherPlotsMap}
        </ParabOrigin>
    )
}

export default ParabolaDisplay