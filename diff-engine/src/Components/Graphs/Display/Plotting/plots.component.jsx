import { useContext,useState } from "react";
import { ViewContext } from "../../../Context/view.context";
import { CoordinatePair } from "./plots.styles";

const VectorMap = (props) => {

    const { darkmode,showPlotValues,setAlert } = useContext(ViewContext)

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

    const [selected,setSelected] = useState(null)

    const defineBackground = () => {
        if (!showPlotValues) {
            return (darkmode ? 'white' : 'red')
        }
    }

    const truncateValues = (x,y) => {
        try {
            const yValue = y
            const xValue = (x-5)
            const truncateX = xValue.toString().substring(0,5)
            const truncateY = yValue.toString().substring(0,5)

            return ('X '+truncateX+' '+'Y '+truncateY)

        } catch (err) {

            return (null)
            
        }
    }

    const mappedPlots = returnPlots().map((el,i) => {
        var locations = {
            bottom: `${yAspect*el[1]}px`,
            left: `${xAspect*el[0]}px`,
            backgroundColor:defineBackground(),
            position: "absolute",
            transition: "all 1000ms",
            fontSize:'6px',
            fontWeight:'800',
            color:`${darkmode ? '#fff' : '#555'}`,
            // display:`${i % 40 === 0 && showPlotValues === true ? 'none' : 'inline'}`
          };
        return (
                <CoordinatePair 
                    showPlotValues={showPlotValues}
                    key={i}
                    style={locations}
                    indexVal={i}
                    darkmode={darkmode}
                    onClick={() => setSelected(i)}
                    selected={selected}
                >
                    {showPlotValues && i % 40 === 0 && 
                    <p>
                        {truncateValues(el[0],el[1])}
                    </p>
                    }
                  
                </CoordinatePair>
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