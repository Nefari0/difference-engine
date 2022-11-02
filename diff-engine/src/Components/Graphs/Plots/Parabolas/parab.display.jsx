import { ParabOrigin,ParabLegend } from "./parab.styles"

const ParabolaDisplay = (props) => {

    const {
        cartCoords,
        h,
        k,
        xAspect,
        yAspect,
        otherPlots
    } = props

    // const focus = {
    //     position:'absolute',
    //     left:`${cartCoords[0][0]}px`,
    //     bottom:`${cartCoords[0][1]}px`,
    //     backgroundColor:'green',
    //     height:'10px',
    //     width:'10px',
    // }

    // console.log('cart coords',cartCoords[0])

    const vertex = {
        position:'absolute',
        left:`${xAspect*h}px`,
        bottom:`${yAspect*k}px`,
        // left:`${cartCoords[0][0]}px`,
        // bottom:`${cartCoords[0][1]}px`,
        height:'10px',
        width:'10px',
        backgroundColor:'blue',
        borderRadius:'50%',
    }
    
    const otherPlotsMap = otherPlots.map((el,i) => {
        // console.log(el[3],'here is el [3]')
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
            <ParabLegend>
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
                        <span style={{left:'-5px',width:'25px',height:'5px',backgroundColor:'red'}}></span>
                        <i>Parabola</i>
                    </li>
                </ul>
            </ParabLegend>
            {otherPlotsMap}
            {/* <span style={focus}></span> */}
            {/* <span style={vertex}></span> */}
        </ParabOrigin>
    )
}

export default ParabolaDisplay