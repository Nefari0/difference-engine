import { useContext } from "react";
import { ViewContext } from "../../../Context/view.context";

const VectorMap = (props) => {

    const { darkmode } = useContext(ViewContext)

    const { 
        showPlotValues,
        returnPlots,
        state,
        nonPolarOrigin
    } = props
    
    const { 
        yAspect,
        xAspect,
        polars,
    } = state

    const mappedPlots = returnPlots().map((el,i) => {
        var locations = {
            bottom: `${yAspect*el[1]}px`,
            left: `${xAspect*el[0]}px`,
            borderRadius: "50%",
            backgroundColor: `${!showPlotValues ? (darkmode ? 'white' : 'red') : null}`,
            position: "absolute",
            transition: "all 1000ms",
            width: "3px",
            height: "3px",
            fontSize:'2px',
          };
        return (
            <p key={i} style={locations}></p>
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