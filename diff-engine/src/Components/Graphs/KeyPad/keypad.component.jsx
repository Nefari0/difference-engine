import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";

import Gaussian from "../Plots/Gaussian/gaus.component";
import ParabKeys from "../Plots/Parabolas/parab.keys";
// import Ellipse from "../Plots/Ellipses/ellipse.keys";
import UnitCircle from "../Calculators/Trig/AngleConversion/angle_keys.component";
import StandardKeys from "../Calculators/Standard/standard.keys";
// import FractionKeys from "../Calculators/Fractions/frac.keys";
import FractionKeys from "../Calculators/Converters/Fractions/frac.keys";
import CogKeys from "../Calculators/GearCalculators/involute.keys";
import UnitsKeys from "../Calculators/Converters/units.keys";
import PercentKeys from "../Calculators/Converters/Percentages/percent.keys";
import PlotKeys from "../Plots/plots.keys";
import HomeKeys from './HomeKeys/homekeys.component'
import Converters from "../Calculators/Converters/converters.keys";

const KeyModule = (props) => {

    const {
        state,setState,
        execute,
        calculate,
        inputHandler,
        close,
        linearVector,
        polarVector,
        formatFunction,
        returnPlots,
        findDerivative
    } = props

    const { currentView } = useContext(ViewContext)

    return (
        <div>

            {!currentView && 
            <HomeKeys
                formatFunction={formatFunction}
                linearVector={linearVector}
                polarVector={polarVector}
                execute={execute}
                state={state}
                setState={setState}
                returnPlots={returnPlots}
                findDerivative={findDerivative}
            />}


            {currentView === 'standard' && 
            <StandardKeys
                state={state}
                setState={setState}
                execute={execute}
                calculate={calculate}
                inputHandler={inputHandler}
                close={close}
            />}

            {currentView === 'fracs' && 
            <FractionKeys
                state={state}
                setState={setState}
                inputHandler={inputHandler}
                execute={execute}
                close={close}
            />}

            {currentView === 'gaus' &&
            <Gaussian
                state={state}
                setState={setState}
                formatFunction={formatFunction}
                linearVector={linearVector}
                execute={execute}
                inputHandler={inputHandler}
                close={close}
            />}

            {currentView === "parabolas" &&
            <ParabKeys
                state={state}
                setState={setState}
                execute={execute}
                linearVector={linearVector}
                inputHandler={inputHandler}
                close={close}
            />}

            {/* ELLIPSE - currently non-functional */}
            {/* {currentView === 'ellipse' &&
                <Ellipse
                    state={state}
                    setState={setState}
                    execute={execute}
                    linearVector={linearVector}
                    inputHandler={inputHandler}
                    close={close}
                />
            } */}

            {currentView === 'unit_circle' && 
            <UnitCircle
                state={state}
                setState={setState}
                formatFunction={formatFunction}
                linearVector={linearVector}
                polarVector={polarVector}
                execute={execute}
                inputHandler={inputHandler}
                close={close}
            />}

            {currentView === 'gear_calculator' &&
            <CogKeys
                execute={execute}
                inputHandler={inputHandler}
                state={state}
                setState={setState}
                close={close}
            />}

            {currentView === 'unit_converter' &&
            <UnitsKeys
                inputHandler={inputHandler}
                state={state}
                setState={setState}
                close={close}
                execute={execute}
                calculate={calculate}
            />}

            {currentView === 'percentages' &&
            <PercentKeys 
                close={close}
                state={state}
                setState={setState}
                execute={execute}
            />}

            {currentView === 'plots' &&
                <PlotKeys
                    close={close}
                    state={state}
                    setState={setState}
                />
            }

            {currentView === "converters" &&
                <Converters
                    close={close}
                    state={state}
                    setState={setState}
                />
            }
        </div>
    )
}

export default KeyModule