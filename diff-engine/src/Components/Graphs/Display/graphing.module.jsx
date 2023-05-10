import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { Origin } from "./display.styles";
import CogDisplay from "../GearCalculators/involute.display";
import ParabolaDisplay from "../Plots/Parabolas/parab.display";
import UnitCirclDisplay from "../Plots/Trig/AngleConversion/display.component";
import CircleGraph from "../Plots/Trig/overlay.component";
import { BaseButton } from "../KeyPad/HomeKeys/homekeys.styles";
import { CopyIcon } from "../SVG";


const GraphingModule = (props) => {

    const { 
        state,
        setState,
        // returnPlots,
        // vectorMap,
        execute
    } = props

    const {
        xAspect,
        yAspect,
        polars,
        otherPlots,
        polarCoords,
        cartCoords,
        showUnitCircleAngles
    } = state

    const {
        currentView,
        darkmode
    } = useContext(ViewContext)

    const vectorMap = (coordArray) => {
        const mappedItems = coordArray.map((el,i) => {
          var locations = {
            bottom: `${yAspect*el[1]}px`,
            left: `${xAspect*el[0]}px`,
            borderRadius: "50%",
            backgroundColor: `${darkmode ? 'white' : 'red'}`,
            position: "absolute",
            transition: "all 1000ms",
            width: "2px",
            height: "2px"
          };
          return <p style={locations} key={i}></p>;
        })
        return <div>{mappedItems}</div>
      }
      
      const returnPlots = () => {
        return (polars === true ? polarCoords : cartCoords)
      }

      const copy = () => {
        // console.log(returnPlots()[0])
        if (returnPlots()[0]) {
          navigator.clipboard.writeText(JSON.stringify(returnPlots()))
          setState({...state,noticeContent:"X and Y coordinates copied to clipboard"})
        } else {
          setState({...state,alert:`There are no coordinates yet. Please run the calculation by pressing the "Cartesian" or "Polar" button below`})
        }
      }

    return (
        <Origin
            xAspect={xAspect}
            yAspect={yAspect}
            polars={polars}
        >

            {!currentView && 
                <BaseButton 
                    style={{position:'absolute',width:'75px',height:'75px',left:'-110px',top:'-250px',zIndex:'1',opacity:'.6 '}}
                    onClick={() => copy()}
                >
                    {CopyIcon()}
                </BaseButton>
            }


            {/* BASIC PLOTS */}
            {vectorMap(returnPlots())}

            {/* GEAR CALCULATOR */}
            {currentView === 'gear_calculator' &&
                <CogDisplay
                    state={state}
                />
            }

            {/* PARABOLA */}
            {currentView === 'parabolas' && <ParabolaDisplay
                otherPlots={otherPlots}
                xAspect={xAspect}
                yAspect={yAspect}
                cartCoords={cartCoords}
            />}

            {/* TRIG */}
            {currentView === 'unit_circle' && !showUnitCircleAngles &&
                <UnitCirclDisplay
                vectorMap={vectorMap}
                execute={execute}
                state={state}
            />}

            {polars && <CircleGraph showUnitCircleAngles={showUnitCircleAngles}/>}

        </Origin>
    )
}

export default GraphingModule