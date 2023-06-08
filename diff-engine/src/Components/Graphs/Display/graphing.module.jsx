import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { Origin,ZeroMarker } from "./display.styles";
import CogDisplay from "../Calculators/GearCalculators/involute.display";
import ParabolaDisplay from "../Plots/Parabolas/parab.display";
import UnitCirclDisplay from "../Calculators/Trig/AngleConversion/display.component";
import VectorMap from "./Plotting/plots.component";
// import EllipseDisplay from "../Plots/Ellipses/ellipse.keys";
// import Ellipse from "../Plots/Ellipses/ellipse.keys";
import CircleGraph from "../Calculators/Trig/overlay.component";

const nonPolarOrigin = '125'

const GraphingModule = (props) => {

    const { 
        state,
        setState,
        returnPlots,
        vectorMap,
        execute
    } = props

    const {
        xAspect,
        yAspect,
        polars,
        otherPlots,
        cartCoords,
        showUnitCircleAngles,
    } = state

    const { currentView } = useContext(ViewContext)

    return (
        <Origin
            xAspect={xAspect}
            yAspect={yAspect}
            polars={polars}
            nonPolarOrigin={nonPolarOrigin}
        >

            {/* BASIC PLOTS */}
            <VectorMap 
                returnPlots={returnPlots}
                state={state}
                nonPolarOrigin={nonPolarOrigin}
            />

            {/* GEAR CALCULATOR */}
            {currentView === 'gear_calculator' &&
                <CogDisplay
                    state={state}
                />
            }

            {/* ELLIPSE */}
            {/* {currentView === 'ellipse' && <Ellipse 
                otherPlots={otherPlots}
                xAspect={xAspect}
                yAspect={yAspect}
                cartCoords={cartCoords}
            />} */}

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
                setState={setState}
            />}

            {polars && <CircleGraph showUnitCircleAngles={showUnitCircleAngles}/>}

        </Origin>
    )
}

export default GraphingModule