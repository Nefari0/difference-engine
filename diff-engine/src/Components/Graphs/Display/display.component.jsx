import { useContext } from "react"
import { ViewContext } from "../../Context/view.context"
// import ViewSettings from "../ViewSettings/view-settings.component"
import UnitCirclDisplay from "../Plots/Trig/AngleConversion/display.component"
import CircleGraph from "../Plots/Trig/overlay.component"
import StandarMathDisplay from "../Standard/standard.display"
import FractionCalc from "../Fractions/frac.display"
import ParabolaDisplay from "../Plots/Parabolas/parab.display"
// import DisplayKeyInfo from "../KeyPad/KeyInformation/keymap.component"
import CogDisplay from "../GearCalculators/involute.display"
import Units from "../UnitConverter/units.display"
import PercentDisplay from "../Percentages/percent.display"
import { Table,Origin,Row,GridCell } from "../graph.styles"
import NumberLine from "../NumberLines/nums.component"
import { vNumParams,hNumParams } from "../NumberLines/numlineParams"
import { BaseButton } from "../KeyPad/keypad.styles"
import { CopyIcon } from "../SVG"
import { MathFormula } from "../graph.styles"
import { MathComponent } from "mathjax-react"


const GraphingModule = (props) => {

    const { 
        state,
        setState,
        vectorMap,
        returnPlots,
        execute,
        copy,
        linearVector,
        polarVector,
        formatFunction,
    } = props

    const {
        // currentView,
        xAspect,
        yAspect,
        polars,
        showUnitCircleAngles,
        mathFunc,
        matrix,
        otherPlots,
        cartCoords,
        // linearVector,
        // polarVector
    } = state

    const {
        darkmode,
        currentView
    } = useContext(ViewContext)

    const mappedTiles = matrix.map((row, id1) => {
        return row.map((col, id2) => {
          return <GridCell key={id2} darkmode={darkmode}></GridCell>;
        });
      });

    return (
        <Table
            darkmode={darkmode}   
        >
            <Row>
                {/* GRID CELLS */}
                {!polars && mappedTiles}
                {/* NUMBER LINES */}
                {!polars &&
                    <div>
                        <NumberLine parameters={hNumParams} darkmode={darkmode} />
                        <NumberLine parameters={vNumParams} darkmode={darkmode} />
                    </div>
                }

                {/* GRAPH */}
                <Origin
                    xAspect={xAspect}
                    yAspect={yAspect}
                    polars={polars}
                >
                    {vectorMap(returnPlots())}

                    {currentView === 'gear_calculator' &&
                        <CogDisplay
                            state={state}
                        />
                    }

                    {currentView === 'parabolas' && <ParabolaDisplay
                        otherPlots={otherPlots}
                        xAspect={xAspect}
                        yAspect={yAspect}
                        cartCoords={cartCoords}
                    />}

                    {currentView === 'unit_circle' && !showUnitCircleAngles &&
                        <UnitCirclDisplay
                            vectorMap={vectorMap}
                            formatFunction={formatFunction}
                            linearVector={linearVector}
                            polarVector={polarVector}
                            execute={execute}
                            state={state}
                    />}

                    {polars && <CircleGraph showUnitCircleAngles={showUnitCircleAngles}/>}

                </Origin>

                {/* CURRENT MATH FORMULA */}
                <MathFormula darkmode={darkmode} >
                    {!showUnitCircleAngles && <MathComponent tex={String.raw`${mathFunc.replace(/ /g, "").replace(/\*/g, ' \\cdot ')}`} />}
                </MathFormula>

                {!currentView && 
                    <BaseButton 
                        style={{width:'75px',height:'75px',left:'10px',top:'5px',zIndex:'1',opacity:'.6 '}}
                        onClick={() => copy()}
                    >
                        {CopyIcon()}
                        {/* copy coordinates */}
                    </BaseButton>
                }

                {/* PERCENT CALCULATOR */}
                {currentView === 'percentages' && <PercentDisplay
                    state={state}
                    setState={setState}
                />}

                {/* DISPLAY UNIT CONVERTER */}
                {currentView === 'unit_converter' && <Units
                    state={state}
                    setState={setState}
                    execute={execute}
                />}

                {/* DISPLAY FRACTION CALCULATOR */}
                {currentView === 'fracs' && <FractionCalc
                    state={state}
                    input={mathFunc}
                />}

                {/* DISPLAY STANDARD CALCULATOR RESULTS */}
                {currentView === 'standard' && <StandarMathDisplay
                    state={state}
                    setState={setState}
                    execute={execute}
                />}

            </Row>
            
        </Table>
    )
}

export default GraphingModule