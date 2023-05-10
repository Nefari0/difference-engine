import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { Origin } from "./display.styles";
import CogDisplay from "../Calculators/GearCalculators/involute.display";
import ParabolaDisplay from "../Plots/Parabolas/parab.display";
import UnitCirclDisplay from "../Plots/Trig/AngleConversion/display.component";
import CircleGraph from "../Plots/Trig/overlay.component";


const GraphingModule = (props) => {

    const { 
        state,
        returnPlots,
        vectorMap,
        execute
    } = props

    const {
        xAspect,
        yAspect,
        polars,
        otherPlots,
        polarCoords,
        cartCoords,
        showUnitCircleAngles,
        // vectorMap,
        // returnPlots
    } = state

    const {
        currentView,
        darkmode
    } = useContext(ViewContext)

    return (
        <Origin
            xAspect={xAspect}
            yAspect={yAspect}
            polars={polars}
        >

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