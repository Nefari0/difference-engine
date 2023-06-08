import { useContext } from "react";
import { ViewContext } from "../../../Context/view.context";

const VectorMap = (props) => {

    const { darkmode,showPlotValues } = useContext(ViewContext)

    const { 
        returnPlots,
        state,
        nonPolarOrigin
    } = props
    
    const { 
        yAspect,
        xAspect,
        polars,
    } = state

    const defineBackground = () => {
        if (!showPlotValues) {
            return (darkmode ? 'white' : 'red')
        }
    }

    const truncateValues = (x,y) => {
        const yValue = y
        const xValue = (x-5)
        const truncateX = xValue.toString().substring(0,5)
        const truncateY = yValue.toString().substring(0,5)

        return ('X '+truncateX+' '+'Y '+truncateY)
    }

    const mappedPlots = returnPlots().map((el,i) => {
        var locations = {
            bottom: `${yAspect*el[1]}px`,
            left: `${xAspect*el[0]}px`,
            borderRadius: "50%",
            backgroundColor:defineBackground(),
            position: "absolute",
            transition: "all 1000ms",
            width: `${showPlotValues ? '30' : '3'}px`,
            height:`${'3'}px`,
            fontSize:'6px',
            fontWeight:'800',
            color:`${darkmode ? '#fff' : '#555'}`
          };
        return (
           <p
                key={i} 
                style={locations}
            >
                {showPlotValues && (i % 40 === 0 ? truncateValues(el[0],el[1]) : null)}
            </p>
            
        )
    })

    return (
        <div 
            style={{
                position:'absolute',
                right:`${!polars ? nonPolarOrigin : '0'}px`
            }}
        >
            {mappedPlots}
        </div>)
}

export default VectorMap