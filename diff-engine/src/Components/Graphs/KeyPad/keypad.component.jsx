import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
// import InputField from "./InputField";
import Gaussian from "../Plots/Gaussian/gaus.component";
import UnitCircle from "../Plots/Trig/AngleConversion/angle_keys.component";
import StandardKeys from "../Calculators/Standard/standard.keys";
import FractionKeys from "../Calculators/Fractions/frac.keys";
import ParabKeys from "../Plots/Parabolas/parab.keys";
import DisplayKeyInfo from "./KeyInformation/keymap.component";
import CogKeys from "../Calculators/GearCalculators/involute.keys";
import UnitsKeys from "../Calculators/UnitConverter/units.keys";
import PercentKeys from "../Calculators/Percentages/percent.keys";
import HomeKeys from './HomeKeys/homekeys.component'

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
        // mathFunc
    } = props

    const {
        mathFunc
    } = state

    const { currentView } = useContext(ViewContext)

    return (
        <div>

            {/* {<DisplayKeyInfo execute={execute}/>} */}

            {!currentView && <HomeKeys
                formatFunction={formatFunction}
                linearVector={linearVector}
                polarVector={polarVector}
                execute={execute}
                state={state}
                setState={setState}
            />}


            {currentView === 'standard' && <StandardKeys
                state={state}
                setState={setState}
                execute={execute}
                calculate={calculate}
                inputHandler={inputHandler}
                close={close}
            />}

            {currentView === 'fracs' && <FractionKeys
                state={state}
                setState={setState}
                inputHandler={inputHandler}
                execute={execute}
                close={close}
            />}

            {currentView === 'gaus' && <Gaussian
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
        </div>
    )
}

export default KeyModule